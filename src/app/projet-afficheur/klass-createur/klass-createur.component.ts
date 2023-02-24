import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observer } from "rxjs";
import { KlassCompletDto } from "src/app/dtos/klass-complet.dto";
import { GestionnaireErreursService } from "src/app/gestionnaire-erreurs/gestionnaire-erreurs.service";
import { ProjetBackService } from "src/app/services/projet-back.service";




@Component({
    selector: 'app-klass-createur',
    templateUrl: './klass-createur.component.html',
    styleUrls: ['./klass-createur.component.css']
})
export class KlassCreateurComponent {

    idProjet: string = '';

    constructor(private projetBackService: ProjetBackService, private activatedRoute: ActivatedRoute,
        private router: Router, private gestionnaireErreurs: GestionnaireErreursService) {
        this.activatedRoute.params.subscribe(params => this.idProjet = params['id'])
    }


    creerKlass(nomKlass: string) {
        const klass = new KlassCompletDto();
        klass.nom = nomKlass;

        const observeur: Observer<KlassCompletDto> = {
            next: k => {
                this.router.navigate(['projet', this.idProjet]);
            },
            error: erreur => {
                this.gestionnaireErreurs.setErreur(erreur.error);
            },
            complete: () => { }
        }

        this.projetBackService.ajouterUneKlassAuProjet(this.idProjet, klass).subscribe(observeur);
    }


}