import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloConsultorio } from 'src/app/modelos/consultorio.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultorioService {
  url='http://127.0.0.1:3000'
  constructor(private http:HttpClient) {

   }
   obtenerConsultorios():Observable<ModeloConsultorio[]>{
    return this.http.get<ModeloConsultorio[]>(`${this.url}/api/consultorios`);
   }
   obtenerConsultorioPorId(id:string):Observable<ModeloConsultorio>{
    return this.http.get<ModeloConsultorio>(`${this.url}/api/consultorios/${id}`);
   }
   obtenerConsultoriosLibres(fechaInicio:string,fechaFin:string):Observable<ModeloConsultorio[]>{
    return this.http.get<ModeloConsultorio[]>(`${this.url}/api/consultorios/reserva/fecha-inicio=${fechaInicio}&fecha-fin=${fechaFin}`);
  }
   }

