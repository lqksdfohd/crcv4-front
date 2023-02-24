import { KlassCompletDto } from "../dtos/klass-complet.dto";
import { KlassSimpleDto } from "../dtos/klass-simple.dto";
import { CollaborateurModel } from "./collaborateur.model";
import { ResponsabiliteModel } from "./responsabilite.model";

export class KlassModel{
    id:number|undefined;
    nom:string|undefined;
    listeResponsabilites:ResponsabiliteModel[] = [];
    listeCollaborateurs:CollaborateurModel[] = [];

    initAvecKlassDtoComplet(dto:KlassCompletDto){
        this.id = dto.id;
        this.nom = dto.nom;
        this.listeResponsabilites = dto.listeResponsabilites.map( dto => {
            const r = new ResponsabiliteModel();
            r.initAvecResponsabiliteDto(dto);
            return r;
        })
    }

    initAvecKlassSimpleDto(dto:KlassSimpleDto){
        this.id = dto.id;
        this.nom = dto.nom;
        this.listeResponsabilites = [];
        this.listeCollaborateurs = [];
    }
}