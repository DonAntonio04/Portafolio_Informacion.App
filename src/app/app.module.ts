import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { MiComponenteComponent } from './components/mi-componente/mi-componente.component';
import { InformacionComponent } from './Paginas/Informacion/informacion/informacion.component';
import { InicioComponent } from './Paginas/Inicio/inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
  //  MiComponenteComponent,
    InformacionComponent,
  InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
