import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observer } from 'rxjs';
import { KlassCompletDto } from '../dtos/klass-complet.dto';
import { GestionnaireErreursService } from '../gestionnaire-erreurs/gestionnaire-erreurs.service';
import { KlassModel } from '../models/klass.model';
import { ResponsabiliteModel } from '../models/responsabilite.model';
import { ProjetBackService } from '../services/projet-back.service';

@Component({
  selector: 'app-klass-modifieur',
  templateUrl: './klass-modifieur.component.html',
  styleUrls: ['./klass-modifieur.component.css']
})
export class KlassModifieurComponent implements OnInit {

  klassId:number = -1;
  klassAModifier:KlassModel|undefined;
  form:FormGroup;

  constructor(private activatedRoute:ActivatedRoute, private projetBackService:ProjetBackService,
  private gestionnaireErreurs:GestionnaireErreursService) {
    this.activatedRoute.params.subscribe(params => {this.klassId = params['id']});
    this.form = new FormGroup({
      r0: new FormControl(''),
      r1: new FormControl(''),
      r2: new FormControl(''),
      c1: new FormControl('')
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
    /*this.form = new FormGroup({});*/
    let validateursResponsabilite:ValidatorFn[] = [];
    let validateursCollaborateur:ValidatorFn[] = [];
    let value = this.form.getRawValue();
    let i = 0;
    for(let _item of Object.keys(value)){
      if(klass.listeResponsabilites[i]){
        value[_item] = klass.listeResponsabilites[i].titre;
        i++;
      }      
    }

    let collaborants = klass.listeCollaborateurs.map(c => c.collaborant?.nom).join(',');
    if(collaborants){
      value['c1'] = collaborants;
    }
    
    this.form.setValue(value);
  }

}

export class UniteForm{
  responsabilite:ResponsabiliteModel;
  control:FormControl;  
  constructor(r:ResponsabiliteModel, control:FormControl){
    this.responsabilite = r;
    this.control = control;
  }
}