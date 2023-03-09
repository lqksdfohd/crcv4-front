import { ResponsabiliteModel } from "../models/responsabilite.model";


export class ResponsabiliteDto{
    id:number|undefined;
    titre:string|undefined;

    initAvecModel(responsabilite:ResponsabiliteModel){
        if(responsabilite.id){
            this.id = responsabilite.id;
        }
        this.titre = responsabilite.titre;
    }
}