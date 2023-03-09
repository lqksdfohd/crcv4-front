import { CollaborateurModel } from "../models/collaborateur.model";
import { KlassModel } from "../models/klass.model";
import { KlassSimpleDto } from "./klass-simple.dto";

export class CollaborateurDto{
    id:number|undefined;
    principal:KlassSimpleDto|undefined;
    collaborant:KlassSimpleDto|undefined;

    initAvecModel(collaborateur:CollaborateurModel){
        if(collaborateur.id){
            this.id = collaborateur.id;
        }
        this.principal = new KlassSimpleDto();
        this.principal.initAvecModel(collaborateur.principal as KlassModel);
        this.collaborant = new KlassSimpleDto();
        this.collaborant.initAvecModel(collaborateur.collaborant as KlassModel);

    }
}