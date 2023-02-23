import { Component, OnInit,Input } from '@angular/core';
import { ErreurModel } from './erreur.model';
import { ResetAffichageService } from './reset-affichage.service';

@Component({
  selector: 'app-gestionnaire-erreurs',
  templateUrl: './gestionnaire-erreurs.component.html',
  styleUrls: ['./gestionnaire-erreurs.component.css']
})
export class GestionnaireErreursComponent implements OnInit {


  @Input()
  erreurModel:ErreurModel|undefined;

  constructor(private resetService:ResetAffichageService) { }

  ngOnInit(): void {
  }

  validerLectureErreur(){
    this.resetService.resetEcran();
  }

}
