import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetsListeurComponent } from './projets-listeur/projets-listeur.component';

const routes: Routes = [
  {path:'projets/liste', component:ProjetsListeurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
