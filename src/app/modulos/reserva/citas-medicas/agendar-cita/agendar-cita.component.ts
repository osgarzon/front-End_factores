import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloCitaMedica } from 'src/app/modelos/citaMedica.model';
import { ModeloCitaMedicaRequest } from 'src/app/modelos/citaMedicaRequest.model';
import { ModeloEspecialidad } from 'src/app/modelos/especialidad.model';
import { ModeloPaciente } from 'src/app/modelos/paciente.model';
import { CitasMedicasService } from 'src/servicios/citas-medicas.service';
import { EspecialidadService } from 'src/servicios/especialidad.service';
import { PacienteService } from 'src/servicios/paciente.service';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css'],
})
export class AgendarCitaComponent implements OnInit {
  protected listadoEspecialidades: ModeloEspecialidad[] = [];
  @Input() pacienteSeleccionado: ModeloPaciente = new ModeloPaciente;
  private fechaInicioSeleccionada: any;
  private fechaFinSeleccionada: any;
  fgValidador: FormGroup = this.fb.group({
    fechaInicio: ['', [Validators.required]],
    fechaFin: ['', [Validators.required]],
    horaFin: ['', [Validators.required]],
    horaInicio: ['', [Validators.required]],
    cedula: ['', Validators.required],
    nombrePacienteCompleto: [''],
    'esp.nombre': ['', [Validators.required]],
  });

  constructor(private citaMedicaService: CitasMedicasService,
    private especialidadService: EspecialidadService,
    private fb: FormBuilder,
    private router: Router,
  ) {

  }
  ngOnInit(): void {
    this.obtenerEspecialidades();
  }

  private obtenerEspecialidades(): void {
    this.especialidadService.obtenerEspecialidades().subscribe(
      (especialidades: ModeloEspecialidad[]) => {
        this.listadoEspecialidades = especialidades;
      }, (error: HttpErrorResponse) => {
        alert(error.message)
        console.log(JSON.stringify(error));
      }
    )
  }

  public confirmarCitaMedica(): void {
    let cedulaPaciente = this.fgValidador.controls['cedula'].value;
    const especialidad = this.fgValidador.controls['esp.nombre'].value
    const fechaInicioValue = this.fgValidador.controls['fechaInicio'].value;
    const fechaFinValue = this.fgValidador.controls['fechaFin'].value;
    const horaInicioValue = this.fgValidador.controls['horaInicio'].value;
    const horaFinValue = this.fgValidador.controls['horaFin'].value;
    //ajustando al formato que recibe el servicio backend de fecha
    //DD-MM-YYYY HH:MM
    //se usa .padStart para completar el formato de dos digitos que solicita el backend
    let fechaInicio = `${fechaInicioValue.day.toString().padStart(2, '0')}-${fechaInicioValue.month.toString().padStart(2, '0')}-${fechaInicioValue.year} ${horaInicioValue.hour.toString().padStart(2, '0')}:${horaInicioValue.minute.toString().padStart(2, '0')}`;
    let fechaFin = `${fechaFinValue.day.toString().padStart(2, '0')}-${fechaFinValue.month.toString().padStart(2, '0')}-${fechaFinValue.year} ${horaFinValue.hour.toString().padStart(2, '0')}:${horaFinValue.minute.toString().padStart(2, '0')}`;
    this.fechaInicioSeleccionada = fechaInicio;
    this.fechaFinSeleccionada = fechaFin;
    let citaMedicaRqst = new ModeloCitaMedicaRequest();
    citaMedicaRqst.cedulaPaciente = cedulaPaciente;
    citaMedicaRqst.especialidad = especialidad;
    citaMedicaRqst.fechaInicio = this.fechaInicioSeleccionada;
    citaMedicaRqst.fechaFin = this.fechaFinSeleccionada;
    this.citaMedicaService.crearCitaMedica(citaMedicaRqst).subscribe((citaMedica: ModeloCitaMedica) => {
      alert("Cita asignada satisfactoriamente");
      console.log(JSON.stringify(citaMedica));
      this.router.navigate(["/reservas/citas-medicas"])
    }, (error: HttpErrorResponse) => {
      alert(JSON.stringify(error))
      console.log("ERROR AL AGENDAR CITA MEDICA")
      console.log(JSON.stringify(error));
    })




  }
}
