import { Component,OnInit } from '@angular/core';
import { ErreurModel } from './gestionnaire-erreurs/erreur.model';
import { GestionnaireErreursService } from './gestionnaire-erreurs/gestionnaire-erreurs.service';
import { Observer } from 'rxjs';
import { ResetAffichageService } from './gestionnaire-erreurs/reset-affichage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  erreurModel:ErreurModel|undefined
  affichageErreurComposant:boolean = false;
  constructor(private gestionnaireErreurs:GestionnaireErreursService, 
  private resetService:ResetAffichageService){
  }

  ngOnInit(): void {
    const observeurErreurs:Observer<ErreurModel> = {
      next: (model) =>{
        this.affichageErreurComposant = true;
        this.erreurModel = model;
      },
      error: erreur => {},
      complete: () => {}
    }

    const observeurReset:Observer<boolean> = {
      next: b =>{ 
        if(b === true){
          this.affichageErreurComposant = false;
        }
      },
      error : erreur => {},
      complete: () => {}
    }
    this.resetService.ajouterUnObserveur(observeurReset);
    this.gestionnaireErreurs.ajouterUnObserveur(observeurErreurs);
  }
  
}
