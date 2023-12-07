import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloCitaMedica } from 'src/app/modelos/citaMedica.model';
import { ModeloCitaMedicaRequest } from 'src/app/modelos/citaMedicaRequest.model';

@Injectable({
  providedIn: 'root'
})
export class CitasMedicasService {
  url='http://127.0.0.1:3000'

  constructor(private http:HttpClient) { 

  }
  crearCitaMedica(citaMedica:ModeloCitaMedicaRequest):Observable<ModeloCitaMedica>{
    return this.http.post<ModeloCitaMedica>(`${this.url}/api/citas-medicas`,citaMedica);
  }
  obtenerCitasMedicas():Observable<ModeloCitaMedica[]>{
    return this.http.get<ModeloCitaMedica[]>(`${this.url}/api/citas-medicas`);
  }
  obtenerCitasMedicasporPaciente(id:string):Observable<ModeloCitaMedica[]>{
    return this.http.get<ModeloCitaMedica[]>(`${this.url}/api/citas-medicas/paciente/${id}`);
  }
  obtenerCitasMedicasporDoctor(id:string):Observable<ModeloCitaMedica[]>{
    return this.http.get<ModeloCitaMedica[]>(`${this.url}/api/citas-medicas/doctor/${id}`);
  }
  obtenerCitasMedicasporEspecialidad(especialidad:string):Observable<ModeloCitaMedica[]>{
    return this.http.get<ModeloCitaMedica[]>(`${this.url}/api/citas-medicas/especialidad/${especialidad}`);
  }

}
