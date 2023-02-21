import { ProjetCompletDto } from "../dtos/projet-complet.dto";
import { ProjetSimpleDto } from "../dtos/projet-simple.dto";
import { KlassModel } from "./klass.model";

export class ProjetModel{
    id:number|undefined;
    nom:string|undefined;
    listeKlass:KlassModel[]|undefined;

    constructor(){}

    initAvecProjetSimpleDto(projetSimpleDto:ProjetSimpleDto){
        this.id = projetSimpleDto.id;
        this.nom = projetSimpleDto.nom;
    }

    initAvecProjetDtoComplet(dto:ProjetCompletDto){
        this.id = dto.id;
        this.nom = dto.nom;
        this.listeKlass = dto.listeKlass?.map(k => {
            let km:KlassModel = new KlassModel();
            km.initAvecKlassDtoComplet(k);
            return km;
        })
    }
}