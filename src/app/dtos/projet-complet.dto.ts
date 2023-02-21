import { KlassCompletDto } from "./klass-complet.dto";


export class ProjetCompletDto{
    id:number|undefined;
    nom:string|undefined;
    listeKlass:KlassCompletDto[]|undefined;
}