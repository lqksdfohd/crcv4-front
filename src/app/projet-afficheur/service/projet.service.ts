import { Injectable } from "@angular/core";
import { ProjetModel } from "src/app/models/projet.model";




@Injectable({providedIn:'root'})
export class ProjetService{
    projet:ProjetModel|undefined;

    setProjet(projet:ProjetModel):void{
        this.projet = projet;
    }

    getProjet():ProjetModel{
        return this.projet as ProjetModel;
    }

}