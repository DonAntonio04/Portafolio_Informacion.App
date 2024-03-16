import { Injectable } from '@angular/core';
import { Informacion } from '../models/informacion';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development'; 

@Injectable({
  providedIn: 'root'
})
export class InformacionService {
  url = 'informacion';

  constructor(private http: HttpClient) { }

  public getInformacion():Observable<Informacion[]>{
    return this.http.get<Informacion[]>(`${environment.apiUrl}`);
  }
}
