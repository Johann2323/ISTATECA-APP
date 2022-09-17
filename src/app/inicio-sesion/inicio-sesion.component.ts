import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { PersonaService} from './persona.service';
import { persona } from '../persona';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']

})
export class InicioSesionComponent implements OnInit {
  respuesta:boolean=false;
  Persona: persona= new persona;
  public static rol:number=9;
  constructor(private personaservice: PersonaService, private router: Router, private router1:Router) {}
  ngOnInit(): void {
  }
  notificacion(email:String, contra:String) {
    console.log(email,contra);
    this.personaservice.validarLogin(email, contra).subscribe(data=>{
      if(data==true){
        this.personaservice.num_rol(email).subscribe(data=>{
          InicioSesionComponent.rol=data;
          alert("Inicio Sesion con exito"+InicioSesionComponent.rol)
          this.router1.navigate(['/app-header'])
        })
        this.router.navigate(['/app-pagina-inicio'])
      }else{
        alert("No registrado")
      }
    });
  }

}