import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloCitaMedica } from 'src/app/modelos/citaMedica.model';
import { CitasMedicasService } from 'src/servicios/citas-medicas.service';

@Component({
  selector: 'app-buscar-citas-medicas-especialidad',
  templateUrl: './buscar-citas-medicas-especialidad.component.html',
  styleUrls: ['./buscar-citas-medicas-especialidad.component.css']
})
export class BuscarCitasMedicasEspecialidadComponent implements OnInit {
  nombreEspecialidad: string = '';
  listadoCitasMedicas: ModeloCitaMedica[] = [];

  constructor(private citasMedicasService: CitasMedicasService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.nombreEspecialidad = this.route.snapshot.params["nombreEspecialidad"];
    this.obtenerListadoCitasMedicas();
  }
  obtenerListadoCitasMedicas() {
    this.citasMedicasService.obtenerCitasMedicasporEspecialidad(this.nombreEspecialidad).subscribe(
      (citasMedicas: ModeloCitaMedica[]) => {
        console.log(citasMedicas)
        this.listadoCitasMedicas = citasMedicas;
      }, (error: HttpErrorResponse) => {
        alert(error.message)
        console.log(JSON.stringify(error))
      }
    )
  }
}
