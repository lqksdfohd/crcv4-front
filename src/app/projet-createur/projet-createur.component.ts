import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetSimpleDto } from '../dtos/projet-simple.dto';
import { ProjetBackService } from '../services/projet-back.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-projet-createur',
  templateUrl: './projet-createur.component.html',
  styleUrls: ['./projet-createur.component.css']
})
export class ProjetCreateurComponent implements OnInit {

  constructor(private projetBackService:ProjetBackService, private router:Router) { }

  ngOnInit(): void {
  }

  /** permet de créer un projet à partir de son nom */
  creerProjet(nomProjet:string){

    const observeurCreerProjet:Observer<ProjetSimpleDto> = {
      next: (dto) =>{
        this.router.navigate(['projet', dto.id]);
      },
      error: erreur => {console.log(erreur)},
      complete: () => {}
    }
    
    const projet:ProjetSimpleDto = new ProjetSimpleDto(nomProjet);
    this.projetBackService.creerUnProjet(projet).subscribe(observeurCreerProjet);
  }

}
