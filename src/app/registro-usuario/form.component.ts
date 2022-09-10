import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegistroUsuarioService } from './registro-usuario.service';
import { usuario } from './usuario';
import { persona } from '../persona';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public usuario: usuario = new usuario();
  persona: persona = {};

  public titulo: string = "Crear Cliente"

  constructor(private usuarioservice: RegistroUsuarioService, private router: Router) { }


  ngOnInit(): void {
  }



  public create(): void {
    
    console.log("ha realizado un clic")
    this.usuario.persona=this.persona
    this.persona.activo=true;
    console.log(this.persona.cedula)
    console.log(this.usuario.observaciones)

    //this.usuarioservice.createP(this.persona).subscribe(
      //response => { 
        //this.persona = response;
        this.usuarioservice.create(this.usuario).subscribe(
          response => { this.usuario }
          
        )
        
      //}
    //)
    


  }

}
