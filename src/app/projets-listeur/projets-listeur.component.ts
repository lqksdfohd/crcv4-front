import { Component, OnInit } from '@angular/core';
import { ProjetBackService } from '../services/projet-back.service';
import { Observer } from 'rxjs'
import { ProjetSimpleDto } from '../dtos/projet-simple.dto';
import { ProjetModel } from '../models/projet.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projets-listeur',
  templateUrl: './projets-listeur.component.html',
  styleUrls: ['./projets-listeur.component.css']
})
export class ProjetsListeurComponent implements OnInit {

  /**la liste des projets parmis lesquels on choisie celui à ouvrir*/
  listeProjets:ProjetModel[] = [];

  constructor(private projetBackService:ProjetBackService, private router:Router) { }

  ngOnInit(): void {
    /* construit une liste de projets, parmis lesquelles on choisi le projet à ouvrir */
    const observeur:Observer<ProjetSimpleDto[]> = {
      next: liste => { 
        this.listeProjets = liste.map(p => {
          let projet:ProjetModel = new ProjetModel();
          projet.initAvecProjetSimpleDto(p);
          return projet;
        });
      },
      error: erreur => {},
      complete: () =>{}
    }

    this.projetBackService.listerLesProjetExistant().subscribe(observeur);
  }

  naviguerVersUnProjet(id:any){
    const rId = id as string;
    this.router.navigate(['projet', rId]);
  }
}
