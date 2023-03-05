import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { KlassCompletDto } from "../dtos/klass-complet.dto";
import { ProjetCompletDto } from "../dtos/projet-complet.dto";
import { ProjetSimpleDto } from "../dtos/projet-simple.dto";
import { ProjetModel } from "../models/projet.model";

export const UrlBackProvider = [{provide:"URL_BACK", useValue: 'http://localhost:8080/'}]

@Injectable({providedIn:'root'})
export class ProjetBackService{
    constructor(@Inject('URL_BACK') private urlBack:string, private http:HttpClient){}

    listerLesProjetExistant():Observable<ProjetSimpleDto[]>{
        const url = this.urlBack.concat('projets/')
        return this.http.get<ProjetSimpleDto[]>(url);
    }

    recupererProjetParId(id:string):Observable<ProjetCompletDto>{
        const url = this.urlBack.concat(`projet/${id}`);
        return this.http.get<ProjetCompletDto>(url);
    }

    creerUnProjet(projet:ProjetSimpleDto){
        const url = this.urlBack.concat('projet/');
        return this.http.post<ProjetSimpleDto>(url,projet);
    }

    ajouterUneKlassAuProjet(idProjet:string, klass:KlassCompletDto){
        const url = this.urlBack.concat(`projet/${idProjet}/klass`);
        return this.http.post<KlassCompletDto>(url, klass);
    }

    supprimerUneKlassDuProjet(idKlass:number){
        const url = this.urlBack.concat(`projet/klass/${idKlass}`);
        return this.http.delete(url);
    }
}