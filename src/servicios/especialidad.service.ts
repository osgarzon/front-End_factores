import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloEspecialidad } from 'src/app/modelos/especialidad.model';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {
  url= 'http://127.0.0.1:3000'
  constructor(private http:HttpClient) {

   }
  obtenerEspecialidades():Observable<ModeloEspecialidad[]>{
    return this.http.get<ModeloEspecialidad[]>(`${this.url}/api/especialidades`);
  }
  
}
