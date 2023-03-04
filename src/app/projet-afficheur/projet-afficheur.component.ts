import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetModel } from '../models/projet.model';
import { ProjetBackService } from '../services/projet-back.service';
import { ProjetService } from './service/projet.service';
import { Observer } from 'rxjs';
import { ProjetCompletDto } from '../dtos/projet-complet.dto';
import { GestionnaireErreursService } from '../gestionnaire-erreurs/gestionnaire-erreurs.service';
import { KlassModel } from '../models/klass.model';

@Component({
  selector: 'app-projet-afficheur',
  templateUrl: './projet-afficheur.component.html',
  styleUrls: ['./projet-afficheur.component.css']
})
export class ProjetAfficheurComponent implements OnInit {

  /**l'id du projet à afficher */
  idProjet:string = '';
  projetAAfficher:ProjetModel|undefined;

  constructor(private activatedRoute:ActivatedRoute, private projetBackService:ProjetBackService,
  private projetService:ProjetService, private gestionnaireDErreurs:GestionnaireErreursService,
  private router:Router) {
    this.activatedRoute.params.subscribe(params => this.idProjet = params['id']);
  }

  ngOnInit(): void {

    const observeurRecupProjet:Observer<ProjetCompletDto> = {
      next: p => {
        let projetModel:ProjetModel = new ProjetModel();
        projetModel.initAvecProjetDtoComplet(p);
        this.projetService.setProjet(projetModel);
        this.projetAAfficher = this.projetService.getProjet();      
      },
      error: erreur => {this.gestionnaireDErreurs.setErreur(erreur.error)},
      complete: () => {}
    }
    /* on construit le projet à afficher à partir de la dto du projet complet */
    this.projetBackService.recupererProjetParId(this.idProjet).subscribe(observeurRecupProjet);
  }

  navVersCreerKlass(){
    this.router.navigate(['projet', this.idProjet, 'creer']);
  }

}
