import { KlassModel } from "../models/klass.model";


export class KlassSimpleDto {
    id: number | undefined;
    nom: string | undefined;

    initAvecModel(klass: KlassModel) {
        if (klass.id != undefined) {
            this.id = klass.id;
        }
        this.nom = klass.nom;
    }
}