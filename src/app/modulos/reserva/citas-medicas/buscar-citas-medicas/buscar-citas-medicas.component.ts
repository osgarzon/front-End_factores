import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModeloCitaMedica } from 'src/app/modelos/citaMedica.model';
import { CitasMedicasService } from 'src/servicios/citas-medicas.service';

@Component({
  selector: 'app-buscar-citas-medicas',
  templateUrl: './buscar-citas-medicas.component.html',
  styleUrls: ['./buscar-citas-medicas.component.css']
})
export class BuscarCitasMedicasComponent implements OnInit {

  listadoCitasMedicas: ModeloCitaMedica[] = [];
  constructor(private citasMedicasService: CitasMedicasService) {

  }
  ngOnInit(): void {
    this.obtenerListadoCitasMedicas();
  }

  obtenerListadoCitasMedicas() {
    this.citasMedicasService.obtenerCitasMedicas().subscribe(
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
