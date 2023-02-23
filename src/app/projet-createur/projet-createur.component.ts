import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetSimpleDto } from '../dtos/projet-simple.dto';
import { ProjetBackService } from '../services/projet-back.service';

@Component({
  selector: 'app-projet-createur',
  templateUrl: './projet-createur.component.html',
  styleUrls: ['./projet-createur.component.css']
})
export class ProjetCreateurComponent implements OnInit {

  constructor(private projetBackService:ProjetBackService, private router:Router) { }

  ngOnInit(): void {
  }

  creerProjet(nomProjet:string){
    const projet:ProjetSimpleDto = new ProjetSimpleDto(nomProjet);
    this.projetBackService.creerUnProjet(projet).subscribe(dto => {
      this.router.navigate(['projet', dto.id]);
    })
  }

}
