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

  //Tablas
  pendientes?: boolean;
  prestados?: boolean;
  recibidos?: boolean;
  nodevuelto?: boolean;
  restituido?: boolean;
  buscar?: boolean;

  estadoPrestamo?:string;

  constructor(private prestamoService: prestamoService, private router: Router) { }

  ngOnInit(): void {
    this.pendientes = true;
    this.prestados = false;
    this.recibidos = false;
    this.nodevuelto = false;
    this.restituido = false;
    this.buscar = false;
    this.prestamoService.getPrestamos().subscribe(
      response => {
        /*response.forEach(element => {
          if (element.pre_estado_prestamo == 4) {
            this.prestamos.push(element)
          }
        });
        */
        this.listaprestamos = response;
        this.estadoPrestamo="Pendiente"
        console.log(response)
        console.log("Lista Prestamos: " + this.listaprestamos.length);
      }

    );
  }

  aceptarDomicilio(prestamo: Prestamo) {
    const objetoString = JSON.stringify(prestamo);
    localStorage.setItem("AceptarSolicitud", objetoString);
    this.router.navigate(['/app-solicitud-libro-domicilio']);
  }

  aceptar(prestamo: Prestamo) {
    const objetoString = JSON.stringify(prestamo);
    localStorage.setItem("AceptarSolicitud", objetoString);
    this.router.navigate(['/app-solicitud-libro']);
  }

  devolucion(prestamo: Prestamo) {
    const objetoString = JSON.stringify(prestamo);
    localStorage.setItem("AceptarSolicitud", objetoString);
    this.router.navigate(['/app-devolver-libro']);
  }

  listaPendientes():void{
    this.ngOnInit();
  }

  listaPrestados(): void {
    this.pendientes = false;
    this.prestados = true;
    this.recibidos = false;
    this.nodevuelto = false;
    this.restituido = false;
    this.buscar = false;

    this.estadoPrestamo="Prestado"
  }
  listaRecibidos(): void {
    this.pendientes = false;
    this.prestados = false;
    this.recibidos = true;
    this.nodevuelto = false;
    this.restituido = false;
    this.buscar = false;

    this.estadoPrestamo="Recibido"
  }
  listaNoDevueltos(): void {
    this.pendientes = false;
    this.prestados = false;
    this.recibidos = false;
    this.nodevuelto = true;
    this.restituido = false;
    this.buscar = false;

    this.estadoPrestamo="No Devuelto"
  }
  listaRestituidos(): void {
    this.pendientes = false;
    this.prestados = false;
    this.recibidos = false;
    this.nodevuelto = false;
    this.restituido = true;
    this.buscar = false;

    this.estadoPrestamo="Restituido"
  }

  onKeydownEvent(event: KeyboardEvent, buscar: String): void {
    this.pendientes = false;
    this.prestados = false;
    this.recibidos = false;
    this.nodevuelto = false;
    this.restituido = false;
    //buscar
    this.estadoPrestamo="Restituido"
    this.buscar = true;
    if (buscar == "") {
      this.ngOnInit();
    }else if(buscar.length==10){
      
    }
  }

}