import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiComponenteComponent } from './components/mi-componente/mi-componente.component';
import { InformacionComponent } from './Paginas/Informacion/informacion/informacion.component';
import { InicioComponent } from './Paginas/Inicio/inicio/inicio.component';
import { YoComponent } from './Paginas/yo/yo.component';
import { TecnologiasComponent } from './Paginas/tecnologias/tecnologias.component';
import { ProyectosComponent } from './Paginas/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    InformacionComponent,
    InicioComponent,
    YoComponent,
    TecnologiasComponent,
    ProyectosComponent,
   
   
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

