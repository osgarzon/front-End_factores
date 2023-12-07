import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarDoctorComponent} from './doctores/buscar-doctor/buscar-doctor.component';
import { CrearPacienteComponent } from './pacientes/crear-paciente/crear-paciente.component';
import { EditarPacienteComponent } from './pacientes/editar-paciente/editar-paciente.component';
import { BuscarPacienteComponent } from './pacientes/buscar-paciente/buscar-paciente.component';
import { EliminarPacienteComponent } from './pacientes/eliminar-paciente/eliminar-paciente.component';
import { BuscarEspecialidadComponent } from './especialidades/buscar-especialidad/buscar-especialidad.component';

const routes: Routes = [
{
  path: 'doctores',
  component:BuscarDoctorComponent
},

{
  path: 'pacientes',
  component:BuscarPacienteComponent
},
{
  path: 'crear-paciente',
  component:CrearPacienteComponent
},

{
  path: 'pacientes/:id',
  component:EditarPacienteComponent
},
{
  path: 'pacientes/eliminar/:id',
  component:EliminarPacienteComponent
},
{
  path: 'especialidades',
  component:BuscarEspecialidadComponent
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
