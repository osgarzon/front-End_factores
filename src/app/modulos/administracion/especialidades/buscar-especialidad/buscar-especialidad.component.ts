import { Component, OnInit } from '@angular/core';
import { ModeloEspecialidad } from 'src/app/modelos/especialidad.model';
import { EspecialidadService } from 'src/servicios/especialidad.service';

@Component({
  selector: 'app-buscar-especialidad',
  templateUrl: './buscar-especialidad.component.html',
  styleUrls: ['./buscar-especialidad.component.css']
})
export class BuscarEspecialidadComponent implements OnInit {

  constructor(private especialidaService: EspecialidadService) {

  }
  listadoEspecialidades: ModeloEspecialidad[] = [];

  ngOnInit(): void {
    this.obtenerListadoEspecialidades();
  }
  obtenerListadoEspecialidades() {
    this.especialidaService.obtenerEspecialidades().subscribe(
      (especialidades: ModeloEspecialidad[]) => {
        this.listadoEspecialidades = especialidades;
      }, (error) => {
        console.log("error" + error)
      }
    )
  }

}
