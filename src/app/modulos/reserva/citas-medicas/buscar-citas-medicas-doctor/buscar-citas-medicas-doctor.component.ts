import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloCitaMedica } from 'src/app/modelos/citaMedica.model';
import { CitasMedicasService } from 'src/servicios/citas-medicas.service';

@Component({
  selector: 'app-buscar-citas-medicas-doctor',
  templateUrl: './buscar-citas-medicas-doctor.component.html',
  styleUrls: ['./buscar-citas-medicas-doctor.component.css']
})
export class BuscarCitasMedicasDoctorComponent implements OnInit {
  id: string = '';
  listadoCitasMedicas: ModeloCitaMedica[] = [];

  constructor(private citasMedicasService: CitasMedicasService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.obtenerListadoCitasMedicas();
  }
  obtenerListadoCitasMedicas() {
    this.citasMedicasService.obtenerCitasMedicasporDoctor(this.id).subscribe(
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
