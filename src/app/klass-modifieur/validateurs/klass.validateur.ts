import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { ProjetService } from "src/app/projet-afficheur/service/projet.service";



@Injectable({providedIn:'root'})
export class KlassValidateur{
    constructor(private projetService:ProjetService){
    }

    collaborateursValidateur(): ValidatorFn {
        return (control:AbstractControl):ValidationErrors | null =>{
            const listeInput = (control.value as string).split(',');
            const listeProjet = this.projetService.getProjet().listeKlass?.map(k => k.nom);
            let dedans = true;
            let faute = '';
            //si le formcontrol est vide alors il n y a pas d'erreur
            const listeTrim = listeInput.map(k => k.trim()).filter(t => t.length > 0);
            if(listeTrim.length == 0){
                return null;
            }
            for(let input of listeInput){
                //si le nom de la klass en input n'est pas dans la liste des noms de klasses du projet
                //alors on retourne une erreur.
                const resultat = listeProjet?.filter(nomKlass => nomKlass === input );
                if(resultat?.length === 0 ){
                    dedans = false;
                    faute = input;
                    break
                }
            }

            if(dedans){
                return null;
            }else{
                return {collaborateurNonExistant: { value: faute}};
            }
        }
    }
}