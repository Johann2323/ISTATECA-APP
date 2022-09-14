import { Component, OnInit } from '@angular/core';
import { RegistroBibliotecarioService } from '../registro-bibliotecario/registro-bibliotecario.service';
import { bibliotecarios } from '../registro-bibliotecario/bibliotecarios';
import { persona } from '../persona';
@Component({
  selector: 'app-lista-bibliotecarios',
  templateUrl: './lista-bibliotecarios.component.html',
  styleUrls: ['./lista-bibliotecarios.component.css']
})
export class ListaBibliotecariosComponent implements OnInit {
  bibliotecarios:bibliotecarios[]=[];
  val:String="";

  constructor(private bibliotecarioservice: RegistroBibliotecarioService) { }

  ngOnInit(): void {
    this.bibliotecarioservice.obtenerBibliotecarios().subscribe(
      bibliotecarios=>this.bibliotecarios=bibliotecarios
    );
  }

}
