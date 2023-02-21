import { KlassCompletDto } from "../dtos/klass-complet.dto";

export class KlassModel{
    id:number|undefined;
    nom:string|undefined;
    listeResponsabilites:undefined;
    listeCollaborateurs:undefined;

    initAvecKlassDtoComplet(dto:KlassCompletDto){
        this.id = dto.id;
        this.nom = dto.nom;
    }
}