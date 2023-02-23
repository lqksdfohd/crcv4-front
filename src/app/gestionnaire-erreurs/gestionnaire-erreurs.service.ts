
import { Subject, Observer } from 'rxjs';
import { ErreurModel } from './erreur.model';
import { Injectable } from '@angular/core'


@Injectable({providedIn: 'root'})
/**
 * Service permettant d'afficher une erreur à l'utilisateur de l'application
 */
export class GestionnaireErreursService{
    obsGestionnaireErreurs:Subject<ErreurModel> = new Subject();

    ajouterUnObserveur(observeur:Observer<ErreurModel>){
        this.obsGestionnaireErreurs.subscribe(observeur);
    }

    setErreur(erreur:ErreurModel){
        this.obsGestionnaireErreurs.next(erreur);
    }
}