import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';
import { Prestamo } from '../models/Prestamo';
import { prestamoService } from '../services/prestamo.service';

@Component({
  selector: 'app-lista-solicitudes-pendientes',
  templateUrl: './lista-solicitudes-pendientes.component.html',
  styleUrls: ['./lista-solicitudes-pendientes.component.css']
})
export class ListaSolicitudesPendientesComponent implements OnInit {
  prestamos: Prestamo[] = [];
  public crearprestamo: Prestamo = new Prestamo();
  
  


  constructor(private prestamoService: prestamoService, private router: Router) { }

  ngOnInit(): void {
    this.prestamoService.getPrestamos().subscribe(
      prestamo => this.prestamos = prestamo
      //libro => this.libros=libro
    );
  }


}
