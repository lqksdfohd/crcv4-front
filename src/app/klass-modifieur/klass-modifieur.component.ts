import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observer } from 'rxjs';
import { KlassCompletDto } from '../dtos/klass-complet.dto';
import { GestionnaireErreursService } from '../gestionnaire-erreurs/gestionnaire-erreurs.service';
import { KlassModel } from '../models/klass.model';
import { ProjetBackService } from '../services/projet-back.service';

@Component({
  selector: 'app-klass-modifieur',
  templateUrl: './klass-modifieur.component.html',
  styleUrls: ['./klass-modifieur.component.css']
})
export class KlassModifieurComponent implements OnInit {

  klassId:string|undefined;
  klassAModifier:KlassModel|undefined;

  constructor(private activatedRoute:ActivatedRoute, private projetBackService:ProjetBackService,
  private gestionnaireErreurs:GestionnaireErreursService) {
    this.activatedRoute.params.subscribe(params => {this.klassId = params['id']});
  }

  ngOnInit(): void {
    const observeurModifierKlass:Observer<KlassCompletDto> = {
      next : dto => {
        this.klassAModifier = new KlassModel();
        this.klassAModifier.initAvecKlassDtoComplet(dto);
        console.log(this.klassAModifier);
      },
      error: erreur => {this.gestionnaireErreurs.setErreur(erreur.error)},
      complete: () => {}
    }

    this.projetBackService.recupererUneKlassDuProjet(this.klassId as string).subscribe(observeurModifierKlass);
  }

}
