import { CollaborateurDto } from "./collaborateur.dto";
import { ResponsabiliteDto } from "./responsabilite.dto";



export class KlassCompletDto{
    id:number|undefined;
    nom:string|undefined;
    listeResponsabilites:ResponsabiliteDto[] = [];
    listeCollaborateurs:CollaborateurDto[] = [];
}