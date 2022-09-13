import { Component, OnInit } from '@angular/core';
import { RegistroBibliotecarioService } from '../registro-bibliotecario/registro-bibliotecario.service';
import { bibliotecario } from '../registro-bibliotecario/bibliotecario';
import { persona } from '../persona';
@Component({
  selector: 'app-lista-bibliotecarios',
  templateUrl: './lista-bibliotecarios.component.html',
  styleUrls: ['./lista-bibliotecarios.component.css']
})
export class ListaBibliotecariosComponent implements OnInit {
  bibliotecarios:bibliotecario[]=[];
  val:String="";

  constructor(private bibliotecarioservice: RegistroBibliotecarioService) { }

  ngOnInit(): void {
    this.bibliotecarioservice.obtenerBibliotecarios().subscribe(
      bibliotecarios=>this.bibliotecarios=bibliotecarios
    );
  }

}
