import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { PersonaService} from './persona.service';
import { persona } from '../persona';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']

})
export class InicioSesionComponent implements OnInit {
  Persona: persona= new persona;
  email:String=document.getElementById('txtcorreo')+"";
  contra:String=document.getElementById('txtcontra')+"";

  constructor(private personaservice: PersonaService) {}
  ngOnInit(): void {
    
  }

  notificacion() {
    console.error("errooooor4");
    this.personaservice.validarLogin(this.email, this.contra).subscribe(
      (personaApi: persona)=>{
        this.Persona=personaApi;
      });
     alert(this.Persona.usuario);
  }

}