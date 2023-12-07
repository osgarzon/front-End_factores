import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ModeloPaciente } from 'src/app/modelos/paciente.model';
import { PacienteService } from 'src/servicios/paciente.service';

@Component({
  selector: 'app-eliminar-paciente',
  templateUrl: './eliminar-paciente.component.html',
  styleUrls: ['./eliminar-paciente.component.css']
})
export class EliminarPacienteComponent implements OnInit {
  id: string = '';
  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'cedula': ['', [Validators.required]],
    'fechaNacimiento': ['', [Validators.required]],
    'telefono': ['', [Validators.required]]

  });
  constructor(private servicioPaciente: PacienteService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarPaciente()
  }

  BuscarPaciente() {
    this.servicioPaciente.ObtenerPacientePorId(this.id).subscribe((datos: ModeloPaciente) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombres"].setValue(datos.nombre);
      this.fgValidador.controls["apellidos"].setValue(datos.apellido);
      this.fgValidador.controls["cedula"].setValue(datos.cedula);
      let fechaNacimientoStr = datos.fechaNacimiento;
      if (fechaNacimientoStr !== undefined) { //pasandolo de neuvo a objeto de angular para que se vea en el input
        const dateParts = fechaNacimientoStr.split('-');
        const year = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]);
        const day = parseInt(dateParts[2]);
        let fecha = new NgbDate(year, month, day);
        this.fgValidador.controls["fechaNacimiento"].setValue(fecha);
      } else {
        this.fgValidador.controls["fechaNacimiento"].setValue(datos.fechaNacimiento);
      }
      this.fgValidador.controls["telefono"].setValue(datos.telefono);
    })
  }

  EliminarPaciente() {

    this.servicioPaciente.EliminarPaciente(this.id).subscribe((response: string) => {
      alert(`paciente ${this.id} eliminado correctamente`);
      this.router.navigate(["/administracion/pacientes"])
    }, (error: any) => {
      alert(`Error al eliminar el paciente ${this.id}`)
      alert(error.error);
      console.log(JSON.stringify(error));
    })

  }
}

