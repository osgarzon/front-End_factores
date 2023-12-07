import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModeloConsultorioAsignado } from 'src/app/modelos/consultorioAsignado.model';
import { ModeloDoctor } from 'src/app/modelos/doctor.model';
import { ModeloEspecialidad } from 'src/app/modelos/especialidad.model';
import { DoctorService } from 'src/servicios/doctor.service';
import { EspecialidadService } from 'src/servicios/especialidad.service';

@Component({
  selector: 'app-buscar-doctor',
  templateUrl: './buscar-doctor.component.html',
  styleUrls: ['./buscar-doctor.component.css']
})
export class BuscarDoctorComponent implements OnInit {

  public listadoDoctores: ModeloDoctor[] = [];
  public doctorGuardado: ModeloDoctor = new ModeloDoctor;
  protected listadoEspecialidades: ModeloEspecialidad[] = [];
  public consultorioAsignado = new ModeloConsultorioAsignado;
  public consultorioAsignadoGuardado?: ModeloConsultorioAsignado;


  fgValidador: FormGroup = this.fb.group({
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'correo': ['', [Validators.required, Validators.minLength(1)]],
    'esp.nombre': ['', [Validators.required]]
  });

  constructor(private doctorService: DoctorService,
    private fb: FormBuilder,
    private especialidadService: EspecialidadService) {

  }
  filterDocPost = '';
  ngOnInit(): void {
    this.obtenerDoctores();
    this.obtenerEspecialidades();
  }

  guardarConsultorio(consultorioAsignadoResponse: ModeloConsultorioAsignado) {
    this.consultorioAsignadoGuardado = consultorioAsignadoResponse;
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
  public obtenerDoctores(): void {
    this.doctorService.obtenerDoctores().subscribe(
      (doctores: ModeloDoctor[]) => {
        this.listadoDoctores = doctores;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
        console.log(JSON.stringify(error));
      }
    )
  }
  public abrirModal(doctor: ModeloDoctor | null, mode: string) { //metodo que abre un modal dependiendo de la opcioon,create delete, update
    const container = document.getElementById('main-container')
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal')//viende de laas clases de boostrap
    if (mode === 'añadir') {
      button.setAttribute('data-bs-target', '#añadirDoctorModal');
    }
    if (mode === 'editar') {
      button.setAttribute('data-bs-target', '#editarDoctorModal');
    } if (mode === 'eliminar') {
      button.setAttribute('data-bs-target', '#eliminarDoctorModal');
    }
    container?.appendChild(button)
    button.click()

  }
  public guardarDoctor() {
    document.getElementById("cerrarModalAñadirDoctor")?.click();
    let nombres = this.fgValidador.controls["nombres"].value;
    let apellidos = this.fgValidador.controls["apellidos"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let nombreEspecialidad = this.fgValidador.controls["esp.nombre"].value;
    let doctor = new ModeloDoctor();
    doctor.nombre = nombres;
    doctor.apellido = apellidos;
    doctor.correo = correo;
    doctor.nombreEspecialidad = nombreEspecialidad;
    this.doctorService.crearDoctor(doctor).subscribe((doctor: ModeloDoctor) => {
      alert("Doctor guardado correctamente");
      this.doctorGuardado = doctor
      console.log(JSON.stringify(this.doctorGuardado));
      //this.obtenerDoctores();

    },
      (error: HttpErrorResponse) => {
        alert(error.message)
        console.log(JSON.stringify(error));

      }
    )

  }


}
