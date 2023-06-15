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
  listaprestamos: Prestamo[] = [];

  constructor(private prestamoService: prestamoService, private router: Router) { }

  ngOnInit(): void {
    this.prestamoService.getPrestamos().subscribe(
      response => {
        /*response.forEach(element => {
          if (element.pre_estado_prestamo == 4) {
            this.prestamos.push(element)
          }
        });
        */
       this.listaprestamos=response;
       console.log(response)
       console.log("Lista Prestamos: "+this.listaprestamos.length);
      }

    );
  }

  aceptarDomicilio(prestamo: Prestamo) {
    const objetoString = JSON.stringify(prestamo);
    localStorage.setItem("AceptarSolicitud", objetoString);
    this.router.navigate(['/app-solicitud-libro-domicilio']);
  }
  aceptar(prestamo: Prestamo){
    const objetoString = JSON.stringify(prestamo);
    localStorage.setItem("AceptarSolicitud", objetoString);
    this.router.navigate(['/app-solicitud-libro']);
  }

}
