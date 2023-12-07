import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { ErrorComponent } from './plantilla/error/error.component';

const routes: Routes = [
{
  path:"inicio",
  component:InicioComponent
},
{
  path:"",
  pathMatch: 'full',
  redirectTo: '/inicio'
},
/*haciendo lazyLoading para cargar los componentes de los modulos, se tienen los archivos
precargado*/
{
  path:'administracion',
  loadChildren: () =>import("./modulos/administracion/administracion.module").then(x=>x.AdministracionModule)
},
{
  path:'reservas',
  loadChildren: () =>import("./modulos/reserva/reserva.module").then(x=>x.ReservaModule)
},
{
  //comodines, rutas que no existen
  path:'**',
  component:ErrorComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
