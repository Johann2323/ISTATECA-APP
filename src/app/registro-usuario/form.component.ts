import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegistroUsuarioService } from './registro-usuario.service';
import { Usuario } from './Usuario';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public usuario:Usuario = new Usuario()
  public titulo:string="Crear Cliente"

  constructor(private usuarioservice:RegistroUsuarioService, private router:Router) { }


  ngOnInit(): void {
  }

  public reste():void{
    
  }
  
  public create():void{
    console.log("ha realizado un clic")
    this.usuarioservice.create(this.usuario).subscribe(
      response => this.router.navigate(["app-registro-usuario"])
    )
  }

}
