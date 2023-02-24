import { ResponsabiliteDto } from "../dtos/responsabilite.dto";


export class ResponsabiliteModel{
    id:number|undefined;
    titre:string|undefined;

    initAvecResponsabiliteDto(dto:ResponsabiliteDto){
        this.id = dto.id;
        this.titre = dto.titre;
    }
}