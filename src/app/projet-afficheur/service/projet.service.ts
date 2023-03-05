import { Injectable } from "@angular/core";
import { Observer, Subject } from "rxjs";
import { ProjetModel } from "src/app/models/projet.model";




@Injectable({providedIn:'root'})
export class ProjetService{
    projet:ProjetModel|undefined;
    projetObs:Subject<ProjetModel> = new Subject();


    setProjet(projet:ProjetModel):void{
        this.projet = projet;
        this.projetObs.next(this.projet);
    }

    getProjet():ProjetModel{
        return this.projet as ProjetModel;
    }

    ajouterUnObserveur(observeur:Observer<ProjetModel>){
        this.projetObs.subscribe(observeur);
    }

}