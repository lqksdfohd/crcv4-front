import { ProjetSimpleDto } from "../dtos/projet-simple.dto";

export class ProjetModel{
    id:number|undefined;
    nom:string;
    listeKlass:undefined;

    constructor(projetSimpleDto:ProjetSimpleDto){
        this.id = projetSimpleDto.id;
        this.nom = projetSimpleDto.nom;
    }
}