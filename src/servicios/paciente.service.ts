import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloPaciente } from 'src/app/modelos/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
url= 'http://127.0.0.1:3000'
  constructor(private http: HttpClient) { 


  }
  
  ObtenerPacientes():Observable<ModeloPaciente[]>{
    return this.http.get<ModeloPaciente[]>(`${this.url}/api/pacientes`)
  }
  ObtenerPacientePorId(id:string):Observable<ModeloPaciente>{
    return this.http.get<ModeloPaciente>(`${this.url}/api/pacientes/${id}`)
  }
  //validar, para crear paciente no necesito Id
  CrearPaciente(paciente : ModeloPaciente):Observable<ModeloPaciente>{
    return this.http.post<ModeloPaciente>(`${this.url}/api/pacientes`,paciente)
  }
  ActualizarPaciente(paciente : ModeloPaciente):Observable<ModeloPaciente>{
    return this.http.put<ModeloPaciente>(`${this.url}/api/pacientes/${paciente.id}`,paciente)
  }
  EliminarPaciente(id : string):Observable<string>{
    return this.http.delete(`${this.url}/api/pacientes/${id}`,{responseType:'text'})
  }

}
