import { KlassModel } from "../models/klass.model";
import { CollaborateurDto } from "./collaborateur.dto";
import { ResponsabiliteDto } from "./responsabilite.dto";



export class KlassCompletDto{
    id:number|undefined;
    nom:string|undefined;
    listeResponsabilites:ResponsabiliteDto[] = [];
    listeCollaborateurs:CollaborateurDto[] = [];

    initAvecModel(klass:KlassModel){
        this.id = klass.id;
        this.nom = klass.nom;
        this.listeResponsabilites = klass.listeResponsabilites.map(r =>{
            let rdto = new ResponsabiliteDto();
            rdto.initAvecModel(r);
            return rdto;
        });
        this.listeCollaborateurs = klass.listeCollaborateurs.map(c => {
            let cdto = new CollaborateurDto();
            cdto.initAvecModel(c);
            return cdto;
        })
    }
}