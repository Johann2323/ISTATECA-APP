import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from '../registro-usuario/usuario';
import { prestamo } from './prestamo';
import { prestamoService } from './prestamo.service';

@Component({
  selector: 'app-lista-solicitudes-pendientes',
  templateUrl: './lista-solicitudes-pendientes.component.html',
  styleUrls: ['./lista-solicitudes-pendientes.component.css']
})
export class ListaSolicitudesPendientesComponent implements OnInit {
  prestamos: prestamo[] = [];
  public crearprestamo: prestamo = new prestamo();
  
  


  constructor(private prestamoService: prestamoService, private router: Router) { }

  ngOnInit(): void {
    this.prestamoService.getPrestamos().subscribe(
      prestamo => this.prestamos = prestamo
      //libro => this.libros=libro
    );
  }


}
