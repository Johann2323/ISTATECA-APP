import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from './persona.service';
import { persona } from '../persona';
import { usuario } from '../registro-usuario/usuario';
import { bibliotecarios } from '../registro-bibliotecario/bibliotecarios';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']

})
export class InicioSesionComponent implements OnInit {
  respuesta: boolean = false;
  Persona: persona = new persona;
  usuarioo: usuario = new usuario;
  public static rol: number = 9;
  public static usu_id:usuario;
  public static bibli_id:bibliotecarios;
  id_persona:number=0;
  rol2:number=9;
  constructor(private personaservice: PersonaService, private router: Router) { }
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
              console.log("Llego mal");
            } else {
              console.log("Valido Persona");
              this.id_persona=parseInt(data.id_persona + "");
              this.rol2=parseInt(data.rol + "");
              console.log('Roljjj'+this.rol2);
              if(this.rol2==2){
                this.personaservice.tipo_usuario(this.id_persona,this.rol2).subscribe(
                  data=>{
                   console.log("Usuario"+data.id_usuario);
                   localStorage.setItem('usuario',data.id_usuario+"");
                    
                  }
                );
              }else if(this.rol2==1){
                this.personaservice.tipo_biblitecario(this.id_persona, this.rol2).subscribe(
                  data=>{
                    console.log("Bibliotecario");
                    localStorage.setItem('bibliotecario',data.id_bibliotecario+"");
                  }
                );
              }else{
                console.log("Rol"+this.rol2);
              }
            }
          }
          );
          console.log("Inicio sesion: " + InicioSesionComponent.rol);
          alert("Inicio Sesion con exito");
          this.router.navigate(['/app-pagina-inicio']);
        })
      } else {
        alert("No registrado")
      }
    });
  }

}