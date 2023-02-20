
export class ProjetSimpleDto{
    nom:string;
    id:number|undefined;

    constructor(nom:string, id?:number){
        this.nom = nom;
        if(id){
            this.id = id;
        }else{
            this.id = undefined;
        }
    }
}