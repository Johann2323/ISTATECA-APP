import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from './persona.service';
import { persona } from '../persona';
import { usuario } from '../registro-usuario/usuario';
import { bibliotecarios } from '../registro-bibliotecario/bibliotecarios';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { RegistroBibliotecarioService } from '../registro-bibliotecario/registro-bibliotecario.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']

})
export class InicioSesionComponent implements OnInit {
  public reporteVN?:string
  respuesta: boolean = false;
  Persona: persona = new persona;
  usuarioo: usuario = new usuario;
  public static rol: number = 9;
  public static usu_id:usuario;
  public static bibli_id:bibliotecarios;
  public static nomb:string;
  id_persona:number=0;
  rol2:number=9;
  constructor(private personaservice: PersonaService, private router: Router,private bibliotecarioservice2: RegistroBibliotecarioService) { }
  ngOnInit(): void {
  }
  notificacion(email: String, contra: String) {

    this.personaservice.validarLogin(email, contra).subscribe(data => {
      if (data == true) {
        this.personaservice.num_rol(email).subscribe(data => {
          InicioSesionComponent.rol = data;
          localStorage.setItem('rol', data + "");
          this.personaservice.val_persona(email, contra).subscribe(data => {
            if (data == null) {
              console.log("Sin Validar Persona");
            } else {
              console.log("Valido Persona");
              this.id_persona=parseInt(data.id_persona + "");
              this.rol2=parseInt(data.rol + "");
              if(this.rol2==2){
                this.personaservice.tipo_usuario(this.id_persona,this.rol2).subscribe(
                  data=>{
                   console.log("Usuario"+data.id_usuario);
                   localStorage.setItem('usuario',data.id_usuario+"");
                   localStorage.setItem('nombrebibliotecario',data.persona?.nombres+"");
                   InicioSesionComponent.nomb = localStorage.getItem('nombrebibliotecario') + "";

                   Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: '<strong>'+ data.persona?.nombres +'</strong><br>  BIENVENIDO A LA BIBLIOTECA VIRTUAL "ISTATECA"',
                    showConfirmButton: false,
                    timer: 3000
                  })
                    
                  }
                );
              }else if(this.rol2==1 || this.rol2==0){
                this.personaservice.tipo_biblitecario(this.id_persona, this.rol2).subscribe(
                  data=>{
                    console.log("Bibliotecario");
                    localStorage.setItem('bibliotecario',data.id_bibliotecario+"");
                    localStorage.setItem('nombrebibliotecario',data.persona?.nombres+"");

                    InicioSesionComponent.nomb = localStorage.getItem('nombrebibliotecario') + "";
                   
                    
                    Swal.fire({
                      position: 'center',
                      icon: 'success',
                      title: '<strong>'+ data.persona?.nombres +'</strong><br>  BIENVENIDO A LA BIBLIOTECA VIRTUAL "ISTATECA"',
                      showConfirmButton: false,
                      timer: 3000
                    })



                  }
                );
              }else{
                console.log("Rol"+this.rol2);
              }
            }
          }
          );
          console.log("Inicio sesion: " + InicioSesionComponent.rol);
          this.reporteVN = localStorage.getItem('nombrebibliotecario') + "";

          
          this.router.navigate(['/app-pagina-inicio']);
         
        })
      } else {
        Swal.fire({
          confirmButtonColor: '#012844',
          icon: 'warning',
          title: 'Ups...',
          text: '??No estas registrado!',
          footer: '<a href="/app-registro-usuario">??Registrate primero!</a>'
          
        })
        

        
        
      }
    });
  }

}