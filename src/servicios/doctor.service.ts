import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ModeloDoctor } from 'src/app/modelos/doctor.model';

@Injectable({
    providedIn: 'root'
})
export class DoctorService {
    url='http://127.0.0.1:3000'
    constructor(private http: HttpClient){

    }

    obtenerDoctores():Observable<ModeloDoctor[]>{
        return this.http.get<ModeloDoctor[]>(`${this.url}/api/doctores`);
    }
    obtenerDoctoresPorId(id:string):Observable<ModeloDoctor>{
        return this.http.get<ModeloDoctor>(`${this.url}/api/doctores/${id}`);
    }
    obtenerDoctoresPorEspecialidad(especialidad:string):Observable<ModeloDoctor>{
        return this.http.get<ModeloDoctor>(`${this.url}/api/doctores/especialidad/${especialidad}`);
    }
    actualizarDoctor(doctor:ModeloDoctor):Observable<ModeloDoctor>{
        return this.http.put<ModeloDoctor>(`${this.url}/api/doctores/${doctor.id}`,doctor);
    }
    eliminarDoctor(id:string):Observable<string>{
        return this.http.delete(`${this.url}/api/pacientes/${id}`,{responseType:'text'})
    }
    crearDoctor(doctor:ModeloDoctor):Observable<ModeloDoctor>{
        return this.http.post(`${this.url}/api/doctores`,doctor);
    }
}