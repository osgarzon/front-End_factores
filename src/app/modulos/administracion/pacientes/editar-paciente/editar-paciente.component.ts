import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPaciente } from 'src/app/modelos/paciente.model';
import { PacienteService } from 'src/servicios/paciente.service';
import { NgbDateStruct, NgbDateParserFormatter, NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarPacienteComponent {
  id: string = '';
  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'cedula': ['', [Validators.required]],
    'fechaNacimiento': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'Genero': ['', [Validators.required]],
    'EPS': ['', [Validators.required]]

  });

  constructor(private fb: FormBuilder,
    private servicioPaciente: PacienteService,
    private router: Router,
    private route: ActivatedRoute,
    private ngbDateParserFormatter: NgbDateParserFormatter,

  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarPaciente();
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
      this.fgValidador.controls["Genero"].setValue(datos.Genero);
      this.fgValidador.controls["EPS"].setValue(datos.EPS);
    })
  }
  EditarPaciente() {
    let nombres = this.fgValidador.controls["nombres"].value;
    let apellidos = this.fgValidador.controls["apellidos"].value;
    let cedula = this.fgValidador.controls["cedula"].value;
    let fechaNacimiento = this.fgValidador.controls["fechaNacimiento"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let Genero = this.fgValidador.controls["Genero"].value;
    let EPS = this.fgValidador.controls["EPS"].value;
    let paciente = new ModeloPaciente(); // creando el paciente para enviar al bknd
    paciente.nombre = nombres;
    paciente.apellido = apellidos;
    paciente.cedula = cedula;
    paciente.fechaNacimiento = `${fechaNacimiento.year}-${fechaNacimiento.month.toString().padStart(2, '0')}-${fechaNacimiento.day.toString().padStart(2, '0')}`;
    paciente.telefono = telefono;
    paciente.Genero = Genero;
    paciente.EPS = EPS;
    paciente.id = this.id;

    this.servicioPaciente.ActualizarPaciente(paciente).subscribe((datos: ModeloPaciente) => {
      alert("Paciente actualizado correctamente");
      this.router.navigate(["/administracion/pacientes"])
    }, (error: any) => {
      alert("Error actualizando el paciente");
      alert(error.error);
      console.log(JSON.stringify(error));
    })


  }


}
