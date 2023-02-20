import { Component, OnInit } from '@angular/core';
import { ProjetBackService } from '../services/projet-back.service';
import { Observer } from 'rxjs'
import { ProjetSimpleDto } from '../dtos/projet-simple.dto';
import { ProjetModel } from './projet.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projets-listeur',
  templateUrl: './projets-listeur.component.html',
  styleUrls: ['./projets-listeur.component.css']
})
export class ProjetsListeurComponent implements OnInit {

  listeProjets:ProjetModel[] = [];

  constructor(private projetBackService:ProjetBackService, private router:Router) { }

  ngOnInit(): void {
    const observeur:Observer<ProjetSimpleDto[]> = {
      next: liste => {this.listeProjets = liste.map(p => new ProjetModel(p));},
      error: erreur => {},
      complete: () =>{}
    }

    this.projetBackService.listerLesProjetExistant().subscribe(observeur);
  }
}
