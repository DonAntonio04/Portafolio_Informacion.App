import { Component } from '@angular/core';
import { Informacion } from './models/informacion';
import { InformacionService } from './services/informacion.service'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Informacion.App';
  informacion:Informacion[]=[];

  constructor(private informacionService: InformacionService){ }
  ngOnInit(): void {
    this.informacionService.getInformacion().subscribe((result: Informacion[]) => {
      this.informacion = result;});
    }
  }

