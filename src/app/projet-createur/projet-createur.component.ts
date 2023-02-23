import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetSimpleDto } from '../dtos/projet-simple.dto';
import { ProjetBackService } from '../services/projet-back.service';
import { Observer } from 'rxjs';
import { GestionnaireErreursService } from '../gestionnaire-erreurs/gestionnaire-erreurs.service';

@Component({
  selector: 'app-projet-createur',
  templateUrl: './projet-createur.component.html',
  styleUrls: ['./projet-createur.component.css']
})
export class ProjetCreateurComponent implements OnInit {

  constructor(private projetBackService:ProjetBackService, private router:Router,
  private gestionnaireErreurs:GestionnaireErreursService) { }

  ngOnInit(): void {
  }

  /** permet de créer un projet à partir de son nom */
  creerProjet(nomProjet:string){

    const observeurCreerProjet:Observer<ProjetSimpleDto> = {
      next: (dto) =>{
        this.router.navigate(['projet', dto.id]);
      },
      error: erreur => {
        this.gestionnaireErreurs.setErreur(erreur.error);
        console.log(erreur.error);
      },
      complete: () => {}
    }

    const projet:ProjetSimpleDto = new ProjetSimpleDto(nomProjet);
    this.projetBackService.creerUnProjet(projet).subscribe(observeurCreerProjet);
  }

}
