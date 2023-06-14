import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prestamo } from '../models/Prestamo';
import { prestamoService } from '../services/prestamo.service';

@Component({
  selector: 'app-lista-solicitudes-pendientes',
  templateUrl: './lista-solicitudes-pendientes.component.html',
  styleUrls: ['./lista-solicitudes-pendientes.component.css']
})
export class ListaSolicitudesPendientesComponent implements OnInit {
  prestamos: Prestamo[] = [];
  
  


  constructor(private prestamoService: prestamoService, private router: Router) { }

  ngOnInit(): void {
    this.prestamoService.getPrestamos().subscribe(
      response =>{
        response.forEach(element => {
          if (element.pre_estado_prestamo== 1) {
            this.prestamos.push(element);
          }
        });
      }
    );
  }

  aceptar(prestamo:Prestamo){
    const objetoString = JSON.stringify(prestamo);
    localStorage.setItem("AceptarSolicitud", objetoString);
    this.router.navigate(['/app-solicitud-libro']);
  }

}
