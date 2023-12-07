import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModeloConsultorio } from 'src/app/modelos/consultorio.model';
import { ConsultorioService } from 'src/servicios/consultorio.service';

@Component({
  selector: 'app-buscar-consultorio',
  templateUrl: './buscar-consultorio.component.html',
  styleUrls: ['./buscar-consultorio.component.css']
})
export class BuscarConsultorioComponent implements OnInit {

  listadoConsultorios: ModeloConsultorio[] = [];
  constructor(private consultorioService: ConsultorioService) {

  }

  ngOnInit(): void {
    this.obtenerListadoConsutorios();
  }
  obtenerListadoConsutorios() {
    this.consultorioService.obtenerConsultorios().subscribe((
      consultorios: ModeloConsultorio[]) => {
      console.log(consultorios)
      this.listadoConsultorios = consultorios;
    }, (error: HttpErrorResponse) => {
      alert(error.message)
      console.log(JSON.stringify(error));
    }
    )
  }

}
