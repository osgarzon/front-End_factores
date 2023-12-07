import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloConsultorioAsignado } from 'src/app/modelos/consultorioAsignado.model';
import { ModeloConsultorioAsignadoRequest } from 'src/app/modelos/consultorioAsignadoRequest.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultorioAsignadoService {
  url='http://127.0.0.1:3000'
  constructor(private http:HttpClient) {

   }
   obtenerConsultoriosAsignados():Observable<ModeloConsultorioAsignado[]>{
    return this.http.get<ModeloConsultorioAsignado[]>(`${this.url}/api/consultorios-asignados`);
   }
   reservarConsultorio(consultorioAsignadoRequest:ModeloConsultorioAsignadoRequest):Observable<ModeloConsultorioAsignado>{
    return this.http.post<ModeloConsultorioAsignado>(`${this.url}/api/consultorios-asignados`,consultorioAsignadoRequest);

   }
}
