import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InformacionComponent } from './Paginas/Informacion/informacion/informacion.component';
import { InicioComponent } from './Paginas/Inicio/inicio/inicio.component';
import { YoComponent } from './Paginas/yo/yo.component';
import { TecnologiasComponent } from './Paginas/tecnologias/tecnologias.component';
import { ProyectosComponent } from './Paginas/proyectos/proyectos.component';


const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'informacion', component:InformacionComponent},
  {path: 'yo',component:YoComponent},
 {path: 'tecnologias',component:TecnologiasComponent},
 {path: 'proyectos',component:ProyectosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
