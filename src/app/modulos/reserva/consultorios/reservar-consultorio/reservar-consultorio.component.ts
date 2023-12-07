import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ModeloConsultorioAsignado } from 'src/app/modelos/consultorioAsignado.model';
import { ConsultorioAsignadoService } from 'src/servicios/consultorio-asignado.service';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ConsultorioService } from 'src/servicios/consultorio.service';
import { ModeloConsultorio } from 'src/app/modelos/consultorio.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ModeloDoctor } from 'src/app/modelos/doctor.model';
import { ModeloConsultorioAsignadoRequest } from 'src/app/modelos/consultorioAsignadoRequest.model';
@Component({
  selector: 'app-reservar-consultorio',
  templateUrl: './reservar-consultorio.component.html',
  styleUrls: ['./reservar-consultorio.component.css']
})
export class ReservarConsultorioComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<ModeloConsultorioAsignado>();
  public listadoConsultoriosLibres: ModeloConsultorio[] = [];
  fechaInicio: FormsModule | null;
  fechaFin: FormsModule | null;
  horaInicio: string;
  horaFin: string;
  idDoctor: string;
  model: NgbDateStruct | null;
  private fechaInicioSeleccionada: any;
  private fechaFinSeleccionada: any;
  public consultorioLibreSeleccionado?: ModeloConsultorio;
  @Input() doctorGuardado?: ModeloDoctor;
  @Output() consultorioAsignado?: ModeloConsultorioAsignado;
  fgValidador: FormGroup = this.fb.group({
    'fechaInicio': ['', [Validators.required]],
    'fechaFin': ['', [Validators.required]],
    'horaFin': ['', [Validators.required]],
    'horaInicio': ['', [Validators.required]],
  });

  fgValidadorReserva: FormGroup = this.fb.group({
    'idDoctor': ['', [Validators.required]],
    'nombreCompleto': ['',],
    'idConsultorio': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'ciudad': ['', [Validators.required]],
    'numConsultorio': ['', [Validators.required]],
    'fechaInicioConfirmada': ['', [Validators.required]],
    'fechaFinConfirmada': ['', [Validators.required]],
  });

  constructor(private consutAsigService: ConsultorioAsignadoService,
    private consultorioService: ConsultorioService,
    private fb: FormBuilder) {
    this.fechaInicio = null;
    this.fechaFin = null;
    this.idDoctor = '';
    this.horaInicio = '00:00';
    this.horaFin = '00:00';
    this.model = null;
    this.consultorioLibreSeleccionado = new ModeloConsultorio;
  }
  ngOnInit(): void {
    console.log("DOCTOR GUARDADO: " + this.doctorGuardado)
  }

  public abrirModalReserva(consultorio: ModeloConsultorio, mode: string) { //metodo que abre un modal dependiendo de la opcioon,create delete, update

    const container = document.getElementById('main-container-reserva')
    const button = document.createElement('button');
    button.type = 'button';
    //button.style.display='none';
    button.setAttribute('data-bs-toggle', 'modal')//viende de laas clases de boostrap
    if (mode === 'añadir') {
      button.setAttribute('data-bs-target', '#añadirReservaModal');
      //LLENANDO EL MODAL con datos por defecto.
      if (consultorio != null) {
        this.consultorioLibreSeleccionado = consultorio;
        console.log(this.doctorGuardado)
        //caso si se asigna directamente creado el doctor
        if (this.doctorGuardado != undefined) {
          this.fgValidadorReserva.controls["idDoctor"].setValue(this.doctorGuardado?.id);
          this.fgValidadorReserva.controls["nombreCompleto"].setValue(`${this.doctorGuardado?.nombre} ${this.doctorGuardado?.apellido}`);
        } else { // caso si se asigna unicamente el consultorio sin crear doctor antes
          this.idDoctor = this.fgValidadorReserva.controls['idDoctor'].value;
          console.log("Entro al else:" + this.fgValidadorReserva.controls["idDoctor"].value)
          this.fgValidadorReserva.controls["idConsultorio"].setValue(this.idDoctor);

        }
        this.fgValidadorReserva.controls["idConsultorio"].setValue(consultorio?.id);
        this.fgValidadorReserva.controls["direccion"].setValue(consultorio?.direccion);
        this.fgValidadorReserva.controls["ciudad"].setValue(consultorio?.ciudad);
        this.fgValidadorReserva.controls["numConsultorio"].setValue(consultorio?.numero);
        this.fgValidadorReserva.controls["fechaInicioConfirmada"].setValue(this.fechaInicioSeleccionada);
        this.fgValidadorReserva.controls["fechaFinConfirmada"].setValue(this.fechaFinSeleccionada);
      }

    }
    if (mode === 'editar') {
      button.setAttribute('data-bs-target', '#editarDoctorModal');
    } if (mode === 'eliminar') {
      button.setAttribute('data-bs-target', '#eliminarDoctorModal');
    }
    container?.appendChild(button)
    button.click()

  }
  public buscarConsultoriosDisponibles(): void {
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
    this.consultorioService.obtenerConsultoriosLibres(fechaInicio, fechaFin).subscribe(
      (consultorios: ModeloConsultorio[]) => {
        this.listadoConsultoriosLibres = consultorios;
        console.log(this.listadoConsultoriosLibres);
        if (this.listadoConsultoriosLibres.length == 0) {
          alert("No existen consultorios disponibles en dicho horario")
        }
      },
      (error: HttpErrorResponse) => {
        alert(JSON.stringify(error));
        console.log(JSON.stringify(error));
      }
    );
  }

  public confirmarReservaConsultorio(): void {

    console.log("validando datos*********")
    console.log("DoctorGuardado: " + this.doctorGuardado)
    console.log("ConsultLibre" + this.consultorioLibreSeleccionado)
    console.log("FechaInicioSelec" + this.fechaInicioSeleccionada)
    console.log("FechafinSelec" + this.fechaFinSeleccionada)
    console.log("idDoctor" + this.idDoctor)

    let idConsultorio = this.consultorioLibreSeleccionado?.id;
    let fechaInicioReserva = this.fechaInicioSeleccionada;
    let fechaFinReserva = this.fechaFinSeleccionada;

    let consultorioAsignadoReqst = new ModeloConsultorioAsignadoRequest();
    consultorioAsignadoReqst.inicioReserva = fechaInicioReserva;
    consultorioAsignadoReqst.finReserva = fechaFinReserva;
    //    consultorioAsignadoReqst.id_doctor=idDoctor;
    if (this.doctorGuardado != undefined) {
      consultorioAsignadoReqst.id_doctor = this.doctorGuardado.id;
    } else {
      consultorioAsignadoReqst.id_doctor = this.idDoctor;
    }
    consultorioAsignadoReqst.id_consultorio = idConsultorio;

    document.getElementById("cerrarModalConfirmarReserva")?.click();

    console.log(JSON.stringify(consultorioAsignadoReqst))
    this.consutAsigService.reservarConsultorio(consultorioAsignadoReqst).subscribe((consultorioAsignadoResponse: ModeloConsultorioAsignado) => {
      alert("Reserva de consultorio realizada satistactoriamente");
      this.consultorioAsignado = consultorioAsignadoResponse;
      console.log(JSON.stringify(consultorioAsignadoResponse));
      this.addNewItem();
    },
      (error: HttpErrorResponse) => {
        alert(JSON.stringify(error))
        console.log("ERRRR datos*********")
        console.log(JSON.stringify(error));

      }
    )
  }

  addNewItem() {
    this.newItemEvent.emit(this.consultorioAsignado);
  }

}

