import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlBackProvider } from './services/projet-back.service';
import { ProjetsListeurComponent } from './projets-listeur/projets-listeur.component';
import { ProjetAfficheurComponent } from './projet-afficheur/projet-afficheur.component';
import { ProjetCreateurComponent } from './projet-createur/projet-createur.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetsListeurComponent,
    ProjetAfficheurComponent,
    ProjetCreateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [UrlBackProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
