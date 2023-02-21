import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetAfficheurComponent } from './projet-afficheur/projet-afficheur.component';
import { ProjetsListeurComponent } from './projets-listeur/projets-listeur.component'

const routes: Routes = [
  {path:'projets/liste', component:ProjetsListeurComponent},
  {path:'projet/:id', component:ProjetAfficheurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
