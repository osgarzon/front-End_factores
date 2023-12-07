import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

import { ReservaRoutingModule } from './reserva-routing.module';
import { ReservarConsultorioComponent } from './consultorios/reservar-consultorio/reservar-consultorio.component';
import { BuscarConsultorioComponent } from './consultorios/buscar-consultorio/buscar-consultorio.component';
import { BuscarConsultorioAsignadoComponent } from './consultorios/buscar-consultorio-asignado/buscar-consultorio-asignado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AgendarCitaComponent } from './citas-medicas/agendar-cita/agendar-cita.component';
import { BuscarCitasMedicasComponent } from './citas-medicas/buscar-citas-medicas/buscar-citas-medicas.component';
import { BuscarCitasMedicasPacienteComponent } from './citas-medicas/buscar-citas-medicas-paciente/buscar-citas-medicas-paciente.component';
import { BuscarCitasMedicasDoctorComponent } from './citas-medicas/buscar-citas-medicas-doctor/buscar-citas-medicas-doctor.component';
import { BuscarCitasMedicasEspecialidadComponent } from './citas-medicas/buscar-citas-medicas-especialidad/buscar-citas-medicas-especialidad.component';
import { FilterPipe } from './pipes/filterAsi.pipe';

@NgModule({
  declarations: [
    ReservarConsultorioComponent,
    BuscarConsultorioComponent,
    BuscarCitasMedicasComponent,
    AgendarCitaComponent,
    BuscarConsultorioAsignadoComponent,
    AgendarCitaComponent,
    BuscarCitasMedicasComponent,
    BuscarCitasMedicasPacienteComponent,
    BuscarCitasMedicasDoctorComponent,
    BuscarCitasMedicasEspecialidadComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    ReservaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule, NgbAlertModule, FormsModule, JsonPipe,NgbTimepickerModule
  ],
  exports:[
    ReservarConsultorioComponent
  ]
})
export class ReservaModule { 
  
}
