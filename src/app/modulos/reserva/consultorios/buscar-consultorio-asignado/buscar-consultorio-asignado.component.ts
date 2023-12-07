import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModeloConsultorioAsignado } from 'src/app/modelos/consultorioAsignado.model';
import { ConsultorioAsignadoService } from 'src/servicios/consultorio-asignado.service';

@Component({
  selector: 'app-buscar-consultorio-asignado',
  templateUrl: './buscar-consultorio-asignado.component.html',
  styleUrls: ['./buscar-consultorio-asignado.component.css']
})
export class BuscarConsultorioAsignadoComponent implements OnInit {

  listadoConsultoriosAsignados:ModeloConsultorioAsignado[]=[];
  constructor(private consultorioAsignadoService:ConsultorioAsignadoService){


}
  filterAsiPost = '';

  ngOnInit(): void {
    this.obtenerListadoConsultoriosAsignados();
  }
obtenerListadoConsultoriosAsignados(){
  this.consultorioAsignadoService.obtenerConsultoriosAsignados().subscribe(
    (consultoriosAsignados:ModeloConsultorioAsignado[])=>{
      console.log(consultoriosAsignados)
      this.listadoConsultoriosAsignados=consultoriosAsignados;
    },(error:HttpErrorResponse)=>{
      alert(error.message)
      console.log(JSON.stringify(error));
    }
    )
}


  
}
