import { CollaborateurDto } from "../dtos/collaborateur.dto";
import { KlassSimpleDto } from "../dtos/klass-simple.dto";
import { KlassModel } from "./klass.model";


export class CollaborateurModel{
    id:number|undefined;
    principal:KlassModel|undefined;
    collaborant:KlassModel|undefined;

    initAvecCollaborateurDto(dto: CollaborateurDto){
        this.id = dto.id;

        let principal = new KlassModel();
        let dtoPrincipal = dto.principal as KlassSimpleDto;
        principal.initAvecKlassSimpleDto(dtoPrincipal);
        this.principal = principal;

        let collaborant = new KlassModel();
        let dtoCollaborant = dto.collaborant as KlassSimpleDto;
        collaborant.initAvecKlassSimpleDto(dtoCollaborant);
        this.collaborant = collaborant;
    }
}