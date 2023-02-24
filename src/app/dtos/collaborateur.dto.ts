import { KlassSimpleDto } from "./klass-simple.dto";

export class CollaborateurDto{
    id:number|undefined;
    principal:KlassSimpleDto|undefined;
    collaborant:KlassSimpleDto|undefined;
}