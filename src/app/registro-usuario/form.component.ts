import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegistroUsuarioService } from './registro-usuario.service';
import { usuario } from './usuario';
import { persona } from '../persona';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';
import { RouterLink } from '@angular/router';
import { personaP } from '../personaP';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public usuario: usuario = new usuario();
  persona: persona = {};
  personaP:personaP={};

  public titulo: string = "Crear Cliente"
  public cedulaa?:string


  constructor(private usuarioservice: RegistroUsuarioService, private router: Router) { }


  ngOnInit(): void {
  }



  public create(): void {
    console.log("ha realizado un clic")
    this.usuario.persona=this.persona
    this.persona.activo=true;
    this.persona.rol=2;

    this.persona.nombres=this.personaP.nombres
    this.persona.correo=this.personaP.correo
    this.persona.celular=this.personaP.celular

    console.log(this.persona.cedula)
    console.log(this.usuario.observaciones)
    
    //this.usuarioservice.createP(this.persona).subscribe(
      //response => { 
        //this.persona = response;
        this.usuarioservice.create(this.usuario).subscribe(
          response => { this.usuario,this.router.navigate(['/app-inicio-sesion'])},
          
        )



        
      //}
    //)
    


  }

  

   buscarFenix(cedula:string){
   
   console.log(cedula)
    this.usuarioservice.obtenerPersonasId(cedula).subscribe(
      personaP=> this.personaP=personaP
      
    )
    if(personaP==null){
      console.log("vacio")
    }
    
    console.log("vacio")
  }

}
