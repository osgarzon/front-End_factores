import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarConsultorioComponent } from './consultorios/buscar-consultorio/buscar-consultorio.component';
import { BuscarConsultorioAsignadoComponent } from './consultorios/buscar-consultorio-asignado/buscar-consultorio-asignado.component';
import { ReservarConsultorioComponent } from './consultorios/reservar-consultorio/reservar-consultorio.component';
import { AgendarCitaComponent } from './citas-medicas/agendar-cita/agendar-cita.component';
import { BuscarCitasMedicasComponent } from './citas-medicas/buscar-citas-medicas/buscar-citas-medicas.component';
import { BuscarCitasMedicasPacienteComponent } from './citas-medicas/buscar-citas-medicas-paciente/buscar-citas-medicas-paciente.component';
import { BuscarCitasMedicasDoctorComponent } from './citas-medicas/buscar-citas-medicas-doctor/buscar-citas-medicas-doctor.component';
import { BuscarCitasMedicasEspecialidadComponent } from './citas-medicas/buscar-citas-medicas-especialidad/buscar-citas-medicas-especialidad.component';

const routes: Routes = [
  {
    path:'consultorios',
    component:BuscarConsultorioComponent
  },
{
  path:'consultorios/consultorios/reserva',
  component:ReservarConsultorioComponent
},
{
  path:'consultorios-asignados',
  component:BuscarConsultorioAsignadoComponent
},

{
  path:'citas-medicas',
  component:BuscarCitasMedicasComponent
},{
  path:'citas-medicas/agendar',
  component:AgendarCitaComponent
},{
  path:'citas-medicas/paciente/:id',
  component:BuscarCitasMedicasPacienteComponent
},{
  path:'citas-medicas/doctor/:id',
  component:BuscarCitasMedicasDoctorComponent
},{
  path:'citas-medicas/especialidad/:nombreEspecialidad',
  component:BuscarCitasMedicasEspecialidadComponent
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }
