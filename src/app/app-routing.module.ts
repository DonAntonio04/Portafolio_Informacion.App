import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InformacionComponent } from './Paginas/Informacion/informacion/informacion.component';
import { InicioComponent } from './Paginas/Inicio/inicio/inicio.component';

const routes: Routes = [
  {path: 'inicio', component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
