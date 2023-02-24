import { KlassCompletDto } from "../dtos/klass-complet.dto";
import { ResponsabiliteModel } from "./responsabilite.model";

export class KlassModel{
    id:number|undefined;
    nom:string|undefined;
    listeResponsabilites:ResponsabiliteModel[] = [];
    listeCollaborateurs:undefined;

    initAvecKlassDtoComplet(dto:KlassCompletDto){
        this.id = dto.id;
        this.nom = dto.nom;
        this.listeResponsabilites = dto.listeResponsabilites.map( dto => {
            const r = new ResponsabiliteModel();
            r.initAvecResponsabiliteDto(dto);
            return r;
        })
    }
}