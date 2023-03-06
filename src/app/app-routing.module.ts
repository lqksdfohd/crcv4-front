import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KlassCreateurComponent } from './projet-afficheur/klass-createur/klass-createur.component';
import { KlassModifieurComponent } from './klass-modifieur/klass-modifieur.component';
import { ProjetAfficheurComponent } from './projet-afficheur/projet-afficheur.component';
import { ProjetCreateurComponent } from './projet-createur/projet-createur.component';
import { ProjetsListeurComponent } from './projets-listeur/projets-listeur.component'

const routes: Routes = [
  {path:'projets/liste', component:ProjetsListeurComponent},
  {path:'projet/nouveau', component:ProjetCreateurComponent},
  {path:'projet/:id', component:ProjetAfficheurComponent},
  {path: 'projet/:id/creer', component:KlassCreateurComponent},
  {path: 'klass/:id/modifier', component:KlassModifieurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
