import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { ChartsModule } from 'ng2-charts';
import { Encuesta2Component } from './components/encuesta2/encuesta2.component';

@NgModule({
  declarations: [
    AppComponent,
    EncuestaComponent,
    Encuesta2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
