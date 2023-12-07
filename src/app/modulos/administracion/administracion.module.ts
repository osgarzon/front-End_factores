
import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearPacienteComponent } from './pacientes/crear-paciente/crear-paciente.component';
import { EditarPacienteComponent } from './pacientes/editar-paciente/editar-paciente.component';
import { EliminarPacienteComponent } from './pacientes/eliminar-paciente/eliminar-paciente.component';
import { BuscarPacienteComponent } from './pacientes/buscar-paciente/buscar-paciente.component';
import { BuscarDoctorComponent } from './doctores/buscar-doctor/buscar-doctor.component';
import { ReservaModule } from '../reserva/reserva.module';
import { NgbAlertModule, NgbDatepickerModule, NgbTimepickerModule,  } from '@ng-bootstrap/ng-bootstrap';
import { BuscarEspecialidadComponent } from './especialidades/buscar-especialidad/buscar-especialidad.component';
import { FilterPipe } from './pacientes/pipes/filter.pipe'; 
//import { FilterPipe1 } from './doctores/pipes/filterDoc.pipe';
@NgModule({
  declarations: [
    CrearPacienteComponent,
    EditarPacienteComponent,
    EliminarPacienteComponent,
    BuscarPacienteComponent,
    BuscarDoctorComponent,
    BuscarEspecialidadComponent,
    FilterPipe,
 //   FilterPipe1
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReservaModule,
    NgbDatepickerModule, NgbAlertModule, JsonPipe,NgbTimepickerModule
  ]
})
export class AdministracionModule { }
