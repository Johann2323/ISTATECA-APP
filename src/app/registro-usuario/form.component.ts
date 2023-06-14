import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegistroUsuarioService } from '../services/registro-usuario.service';
import { Usuario } from '../models/Usuario';
import { Persona } from '../models/Persona';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';
import { RouterLink } from '@angular/router';
import { PersonaP } from '../models/PersonaP';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  persona: Persona = {};
  personaP:PersonaP={};


  constructor(private usuarioservice: RegistroUsuarioService, private router: Router) { }


  ngOnInit(): void {
  }
  public validar(): void {
    const clave1 = document.getElementById('clave1') as HTMLInputElement;
    const clave2 = document.getElementById('clave2') as HTMLInputElement;
    const alertaClave1 = document.getElementById('alertaClave1') as HTMLSpanElement;
    const alertaClave2 = document.getElementById('alertaClave2') as HTMLSpanElement;
    const botonEnviar = document.getElementById('botonEnviar') as HTMLButtonElement;
    if (clave1.value === clave2.value) {
      alertaClave1.innerText = '';
      alertaClave2.innerText = '';
      botonEnviar.disabled = false;
    } else {
      alertaClave1.innerText = 'Las contraseñas no coinciden';
      alertaClave2.innerText = 'Las contraseñas no coinciden';
      botonEnviar.disabled = true;
    }
  }



  public create(): void {
    console.log("ha realizado un clic")
    this.usuario=this.persona
    this.persona.per_activo=true;
    this.persona.per_tipo=2;

    this.persona.per_nombres=this.personaP.nombres
    this.persona.per_correo=this.personaP.correo
    this.persona.per_celular=this.personaP.celular


    

        this.usuarioservice.createPersona(this.persona).subscribe(
          response => { this.persona/*,this.router.navigate([''])*/ 
          //Swal.fire('Usuario Guardado','Te damos la bienvenida "'+this.usuario.persona?.nombres+'" te has registrado con exito','success')
          Swal.fire({
            title: '<strong>¡Usuario Guardado!</strong>',
            confirmButtonText: 'OK',
            confirmButtonColor: '#012844',
            icon: 'success',
            html:
              '<b>'+this.persona?.per_nombres+'</b><br>'+
              'te has registrado con exito'
          })
          this.router.navigate([''])
        }
          )

        
  }

  

  

   buscarFenix(cedula:string){
    

    if(cedula==""){
      alert('INGRESE UNA CEDULA')
    }else{
      console.log(cedula)
      this.usuarioservice.obtenerPersonasId(cedula).subscribe(
        personaP=> this.personaP=personaP
        
        
      )
      console.log(this.personaP.cedula);
      if(this.personaP.cedula==undefined){

        //this.router.navigate([''])
      }
    }
    
   
   
  }

}
