import { Component, OnInit } from '@angular/core';
import { bibliotecarios } from './bibliotecarios';
import { bibliotecarioE } from '../bibliotecarioE';
import { RegistroBibliotecarioService } from './registro-bibliotecario.service';
import { Router } from '@angular/router';
import { persona } from '../persona';
import { personaP } from '../personaP';

@Component({
  selector: 'app-form-editBibliotecario',
  templateUrl: './form-edit-b.component.html',
  styleUrls: ['./form-edit-b.component.css']
})
export class FormEditBComponent implements OnInit {
  reporteV:String="";
  public bibliotecarios: bibliotecarios = new bibliotecarios();
  persona: persona = {};
  personaP: personaP = {};
  bibliotecarioE:bibliotecarioE={};
  idb?:number;

  constructor(private bibliotecarioservice: RegistroBibliotecarioService, private router: Router) { }

  ngOnInit(): void {
    this.reporteV=localStorage.getItem('bibliotecario')+"";
        console.log("Bibliotecario: "+this.reporteV+"")
  }

  onKeydownEvent(event: KeyboardEvent, cedula:string): void {
    if(cedula==""){
     alert('INGRESE UN ID')
     window.location.reload();
    }

    if(cedula!==""){
      this.buscar(cedula);
    }

 }

 actualizarBibliotecario(bibliotecarios: bibliotecarios) {
  this.bibliotecarios.persona = this.persona
  this.bibliotecarios.id_bibliotecario = this.bibliotecarioE.id_bibliotecario
  this.persona.id_persona = this.bibliotecarioE.persona?.id_persona
  this.persona.activo = true;
  alert(this.bibliotecarioE.id_bibliotecario)
  this.bibliotecarioservice.update(bibliotecarios)
    .subscribe(data => {
      this.bibliotecarios = data;
      alert("Se actualizo con exito...!!")
      this.router.navigate(['app-pagina-inicio'])
    })

}

buscar(idss:string){
  
  this.idb=Number.parseInt(idss)
  //alert(this.id)
    this.bibliotecarioservice.obtenerBibliotecarioId(this.idb).subscribe(
      bibliotecarioE=> {this.bibliotecarioE=bibliotecarioE,this.persona.cedula=bibliotecarioE.persona?.cedula,this.persona.nombres=bibliotecarioE.persona?.nombres,this.persona.celular=bibliotecarioE.persona?.celular
        ,this.persona.correo=bibliotecarioE.persona?.correo,this.persona.usuario=bibliotecarioE.persona?.usuario,this.persona.clave=bibliotecarioE.persona?.clave
      //alert(this.usuarioE.id_usuario)}
      }
    )
 }

}
