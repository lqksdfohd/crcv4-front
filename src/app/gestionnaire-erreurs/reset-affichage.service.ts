import { Observer, Subject } from 'rxjs';
import { Injectable } from '@angular/core'

@Injectable({providedIn: 'root'})
/**
 * service permetant de réinitialiser l'écran.
 */
export class ResetAffichageService{

    obsReset:Subject<boolean> = new Subject();

    ajouterUnObserveur(observeur:Observer<boolean>){
        this.obsReset.subscribe(observeur);
    }

    resetEcran(){
        this.obsReset.next(true);
    }
}