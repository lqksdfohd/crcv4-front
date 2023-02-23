
import { Subject, Observer } from 'rxjs';
import { ErreurModel } from './erreur.model';
import { Injectable } from '@angular/core'


@Injectable({providedIn: 'root'})
export class GestionnaireErreursService{
    obsGestionnaireErreurs:Subject<ErreurModel> = new Subject();

    ajouterUnObserveur(observeur:Observer<ErreurModel>){
        this.obsGestionnaireErreurs.subscribe(observeur);
    }

    setErreur(erreur:ErreurModel){
        this.obsGestionnaireErreurs.next(erreur);
    }
}