import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observer } from 'rxjs';
import { KlassCompletDto } from '../dtos/klass-complet.dto';
import { GestionnaireErreursService } from '../gestionnaire-erreurs/gestionnaire-erreurs.service';
import { CollaborateurModel } from '../models/collaborateur.model';
import { KlassModel } from '../models/klass.model';
import { ResponsabiliteModel } from '../models/responsabilite.model';
import { ProjetService } from '../projet-afficheur/service/projet.service';
import { ProjetBackService } from '../services/projet-back.service';
import { KlassValidateur } from './validateurs/klass.validateur';

@Component({
  selector: 'app-klass-modifieur',
  templateUrl: './klass-modifieur.component.html',
  styleUrls: ['./klass-modifieur.component.css']
})
export class KlassModifieurComponent implements OnInit {

  klassId:number = -1;
  klassAModifier:KlassModel = new KlassModel();
  form:FormGroup;

  constructor(private activatedRoute:ActivatedRoute, private projetBackService:ProjetBackService,
  private gestionnaireErreurs:GestionnaireErreursService, private projetService:ProjetService,
  private router:Router, private klassValidateur:KlassValidateur) {
    
    this.activatedRoute.params.subscribe(params => {this.klassId = params['id']});
    this.form = new FormGroup({
      r0: new FormControl(''),
      r1: new FormControl(''),
      r2: new FormControl(''),
      c1: new FormControl('', klassValidateur.collaborateursValidateur())
    });
  }

  ngOnInit(): void {
    /* permet d'initialiser le composant avec la klass venant du back */
    const observeurModifierKlass:Observer<KlassCompletDto> = {
      next : dto => {
        this.klassAModifier = new KlassModel();
        this.klassAModifier.initAvecKlassDtoComplet(dto);
        this.initialiserForm(this.klassAModifier as KlassModel);
      },
      error: erreur => {this.gestionnaireErreurs.setErreur(erreur.error)},
      complete: () => {}
    }
    this.projetBackService.recupererUneKlassDuProjet(this.klassId).subscribe(observeurModifierKlass);
  }

  initialiserForm(klass:KlassModel){
    //compléter la partie responsabilite du formulaire.
    let value = this.form.getRawValue();
    let i = 0;
    for(let _item of Object.keys(value)){
      if(klass.listeResponsabilites[i]){
        value[_item] = klass.listeResponsabilites[i].titre;
        i++;
      }      
    }

    //remplir la partie collaborateur du formulaire.
    let collaborants = klass.listeCollaborateurs.map(c => c.collaborant?.nom).join(',');
    if(collaborants){
      value['c1'] = collaborants;
    }
    
    this.form.setValue(value);
  }

/**
 * permet d'annuler la modification en cours sur la klass et de retourner à l'affichage du projet.
 */
  retournerVersAfficherProjet(){
    const projetId = this.projetService.getProjet().id;
    this.router.navigate(['projet', projetId]);
  }


  enregistrerKlass(){
    const observeurSauvegardeKlass:Observer<KlassCompletDto> = {
      next: dto => {
        this.retournerVersAfficherProjet();
      },
      error: erreur => { 
        console.log(erreur);
        this.gestionnaireErreurs.setErreur(erreur.error)},
      complete: () => {}
    }

    if(this.form.valid){
      //si le form est valide on met à jour le klass et on la sauvegarde.
      this.mettreAJourKlass();
      let dto = new KlassCompletDto();
      dto.initAvecModel(this.klassAModifier);
      this.projetBackService.enregistrerUneKlassDuProjet(dto).subscribe(observeurSauvegardeKlass);
    }
  }


  mettreAJourKlass(){
    this.mettreAJourResponsabilite('r0',0);
    this.mettreAJourResponsabilite('r1',1);
    this.mettreAJourResponsabilite('r2',2);
    this.mettreAJourCollaborateurs('c1');     
  }

  mettreAJourResponsabilite(nomFormControl:string, positionDansListe:number){
    const formValue = this.form.value;
    //si le formcontrol n'est pas vide
      if(formValue[nomFormControl].trim() !== ''){
        //s'il existe une responsabilite correspondant à cet index
        if(this.klassAModifier.listeResponsabilites[positionDansListe] !== undefined){
          //on met à jour la responsabilite avec la valeur du formcontrol
          this.klassAModifier.listeResponsabilites[positionDansListe].titre = formValue.r0;
        }else{
          //s'il n'existe pas de responsabilite correspondant à cet index
          //on crée une nouvelle responsabilite.
          const responsabilite = new ResponsabiliteModel();
          responsabilite.titre = formValue[nomFormControl];
          this.klassAModifier.listeResponsabilites.push(responsabilite);
        }
      }
  }

  mettreAJourCollaborateurs(nomFormConrol:string){
    //on récupère les noms des collaborants dans le formulaire.
    let collaborantsEnInput: string[] |any[] = this.form.value[nomFormConrol].split(',').filter( (c:string) => c != '');
    //s'il n y a pas de collaborant en input on met à zéro la liste des collaborateurs dans la klass
    if(collaborantsEnInput.length === 0){
      this.klassAModifier.listeCollaborateurs = [];
    }else{
      let listeKlass = this.projetService.getProjet().listeKlass;
      //sinon pour chaque nom de klass( nom du collaborant)
      for(let col of collaborantsEnInput){
        let collaborateurTrouvee = this.klassAModifier.listeCollaborateurs.filter(c => c.collaborant?.nom == col);
        //si la combinaison principal, collaborateur n'existe pas déjà on la crée.
        if(collaborateurTrouvee.length === 0){
          let collaborateur = new CollaborateurModel();
          collaborateur.principal = this.klassAModifier;
          collaborateur.collaborant = listeKlass?.filter(k => k.nom === col)[0];
          console.log(collaborateur)
          this.klassAModifier.listeCollaborateurs.push(collaborateur);
        }else{
          //si cette combinaison existe déjà on ne fait rien et on passe au suivant
          continue;
        }

      }
    }
  }
}
