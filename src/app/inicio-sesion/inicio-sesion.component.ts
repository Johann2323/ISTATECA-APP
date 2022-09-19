import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from './persona.service';
import { persona } from '../persona';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']

})
export class InicioSesionComponent implements OnInit {
  respuesta: boolean = false;
  Persona: persona = new persona;
  public static rol: number=9;
  constructor(private personaservice: PersonaService, private router: Router) { }
  ngOnInit(): void {
  }
  notificacion(email: String, contra: String) {
    this.personaservice.validarLogin(email, contra).subscribe(data => {
      if (data == true) {
        this.personaservice.num_rol(email).subscribe(data => {
          InicioSesionComponent.rol=data;
          localStorage.setItem('rol', data+"");
          console.log("Inicio sesion: "+InicioSesionComponent.rol);
          alert("Inicio Sesion con exito");
          this.router.navigate(['/app-pagina-inicio']);
        })
      } else {
        alert("No registrado")
      }
    });
  }

}