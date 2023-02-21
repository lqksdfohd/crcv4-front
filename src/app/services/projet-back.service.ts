import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProjetCompletDto } from "../dtos/projet-complet.dto";
import { ProjetSimpleDto } from "../dtos/projet-simple.dto";

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
}