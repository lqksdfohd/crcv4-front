import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetModel } from '../models/projet.model';
import { ProjetBackService } from '../services/projet-back.service';
import { ProjetService } from './service/projet.service';

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
  private projetService:ProjetService) {
    this.activatedRoute.params.subscribe(params => this.idProjet = params['id']);
  }

  ngOnInit(): void {
    /* on construit le projet à afficher à partir de la dto du projet complet */
    this.projetBackService.recupererProjetParId(this.idProjet).subscribe(p => {
      let projetModel:ProjetModel = new ProjetModel();
      projetModel.initAvecProjetDtoComplet(p);
      this.projetService.setProjet(projetModel);
      this.projetAAfficher = this.projetService.getProjet();      
    })
  }

}
