import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observer } from 'rxjs';
import { GestionnaireErreursService } from 'src/app/gestionnaire-erreurs/gestionnaire-erreurs.service';
import { KlassModel } from 'src/app/models/klass.model';
import { ProjetBackService } from 'src/app/services/projet-back.service';
import { ProjetService } from '../service/projet.service';

@Component({
  selector: 'app-klass-afficheur',
  templateUrl: './klass-afficheur.component.html',
  styleUrls: ['./klass-afficheur.component.css']
})
export class KlassAfficheurComponent implements OnInit {

  @Input()
  klass:KlassModel;
  constructor(private projetBackService:ProjetBackService, private router:Router, private projetService:ProjetService,
    private gestionErreursService:GestionnaireErreursService) {
    this.klass = new KlassModel();
  }

  ngOnInit(): void {
  }

  /** permet d'afficher la liste des collaborants de cette klass comme une liste de nom de klass */
  miseEnFormCollaborateurs():string{
    const resultat = this.klass.listeCollaborateurs.map(c => c.collaborant?.nom).join('\n');
    return resultat;
  }

  supprimerKlass(){
    const observer:Observer<Object> = {
      //si la klass est bien supprimée du projet
      next: reponse => {
        const projetId = this.projetService.getProjet().id;
        this.router.navigate(["projet", projetId]);
      }, 
      //s'il y a une erreur lors de la suppression
      error: erreur => { this.gestionErreursService.setErreur(erreur.error)},
      complete: () => {}
    }
    this.projetBackService.supprimerUneKlassDuProjet(this.klass.id as number).subscribe(observer);
  }

}
