import { Component, OnInit } from '@angular/core';
import { ModeloPaciente } from 'src/app/modelos/paciente.model';
import { PacienteService } from 'src/servicios/paciente.service';

@Component({
  selector: 'app-buscar-paciente',
  templateUrl: './buscar-paciente.component.html',
  styleUrls: ['./buscar-paciente.component.css']
})
export class BuscarPacienteComponent implements OnInit {

  constructor(private pacienteService: PacienteService) {

  }
  filterPost = '';
  listadoRegistros: ModeloPaciente[] = [];
  ngOnInit(): void {
    this.ObtenerListadoPacientes()
  }
  ObtenerListadoPacientes() {
    this.pacienteService.ObtenerPacientes().subscribe((datos: ModeloPaciente[]) => {
      console.log(datos)
      this.listadoRegistros = datos;
    }, (error) => {
      console.log("error" + error)
    }
    )
  }


}
