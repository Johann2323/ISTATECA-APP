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
  bibliotecarios: bibliotecarios[] = [];
  bibli: bibliotecarios = new bibliotecarios;
  val: String = "";
  bus: boolean = true;
  buscarval: boolean = false;

  constructor(private bibliotecarioservice: RegistroBibliotecarioService) { }

  ngOnInit(): void {
    this.bibliotecarioservice.obtenerBibliotecarios().subscribe(
      bibliotecarios => this.bibliotecarios = bibliotecarios
    );
    this.buscarval = false;
    this.bus = true;
  }
  onKeydownEvent(event: KeyboardEvent, cedula:String): void {
    if(cedula==""){
     this.ngOnInit();
    }

 }

  buscar(cedula: String) {
    console.log("Cedula: "+cedula);
    this.bus = false;
      this.bibliotecarioservice.buscarBibliotecarios(cedula).subscribe(data => {
        this.bibli = data;
        this.buscarval = true;
      });
  }

  click(cedula:String="", rol:number=9,fechainicio?:Date, fechafin:Date=?, activo:boolean=false  ) {
    console.log("click Event");
}

}
