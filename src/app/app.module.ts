import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { ForfaitComponent } from './forfait/forfait.component';
import { ForfaitDetailsComponent } from './forfait-details/forfait-details.component';
import { ForfaitListComponent } from './forfait-list/forfait-list.component';
import { PetitForfaitComponent } from './petit-forfait/petit-forfait.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormulaireGestionComponent } from './formulaire-gestion/formulaire-gestion.component';
import { FormulaireRechercheComponent } from './formulaire-recherche/formulaire-recherche.component';

@NgModule({
  declarations: [
    AppComponent,
    ForfaitCompletComponent,
    ForfaitComponent,
    ForfaitDetailsComponent,
    ForfaitListComponent,
    PetitForfaitComponent,
    FormulaireGestionComponent,
    FormulaireRechercheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
