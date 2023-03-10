import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlBackProvider } from './services/projet-back.service';
import { ProjetsListeurComponent } from './projets-listeur/projets-listeur.component';
import { ProjetAfficheurComponent } from './projet-afficheur/projet-afficheur.component';
import { ProjetCreateurComponent } from './projet-createur/projet-createur.component';
import { GestionnaireErreursComponent } from './gestionnaire-erreurs/gestionnaire-erreurs.component';
import { KlassAfficheurComponent } from './projet-afficheur/klass-afficheur/klass-afficheur.component';
import { KlassModifieurComponent } from './klass-modifieur/klass-modifieur.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProjetsListeurComponent,
    ProjetAfficheurComponent,
    ProjetCreateurComponent,
    GestionnaireErreursComponent,
    KlassAfficheurComponent,
    KlassModifieurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [UrlBackProvider, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
