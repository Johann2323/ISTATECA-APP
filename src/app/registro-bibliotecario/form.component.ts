import { Component, OnInit } from '@angular/core';
import { RegistroBibliotecarioService } from './registro-bibliotecario.service';
import { bibliotecarios } from './bibliotecarios';
import { persona } from '../persona';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { personaP } from '../personaP';
import { bibliotecarioE } from '../bibliotecarioE';

@Component({
  selector: 'app-form-bibliotecario',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponentb implements OnInit {
  public bibliotecarios: bibliotecarios = new bibliotecarios();
  persona: persona = {};
  personaP: personaP = {};
  bibliotecarioE:bibliotecarioE={};
  idb?:number;

  constructor(private bibliotecarioservice: RegistroBibliotecarioService, private router: Router) { }

  ngOnInit(): void {
  }

  public createbibliotecario(login: NgForm) {

    console.log("ha realizado un clic")
    this.bibliotecarios.persona = this.persona
    this.persona.activo = true;

    this.persona.cedula = this.personaP.cedula
    this.persona.nombres = this.personaP.nombres
    this.persona.correo = this.personaP.correo
    this.persona.celular = this.personaP.celular

    console.log(this.bibliotecarios.persona)
    console.log(this.persona.rol)
    this.bibliotecarioservice.create(this.bibliotecarios).subscribe(
      response => { this.bibliotecarios }


    ); login.reset();
  }

  buscarFenix(cedula: string, nombre: string) {
    if (cedula == "") {
      alert('INGRESE UNA CEDULA')
    } else {
      console.log(cedula)
      this.bibliotecarioservice.obtenerPersonasId(cedula).subscribe(
        personaP => this.personaP = personaP


      )
      console.log(this.personaP.cedula);
      if (this.personaP.cedula == undefined) {
        alert('Cedula no registrada')
        //this.router.navigate([''])
      }
    }







  }

}
