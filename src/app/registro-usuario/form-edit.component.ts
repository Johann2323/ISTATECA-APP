import { Component, OnInit } from '@angular/core';
import { RegistroUsuarioService } from './registro-usuario.service';
import { Router } from '@angular/router';
import { usuario } from './usuario';
import { persona } from '../persona';
import { personaP } from '../personaP';

@Component({
  selector: 'app-form-editUsuario',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  public usuario: usuario = new usuario();
  persona: persona = {};
  personaP:personaP={};

  constructor(private usuarioservice: RegistroUsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  buscarFenix(cedula:string){
    if(cedula==""){
      alert('INGRESE UNA CEDULA')
    }else{
      console.log(cedula)
      this.usuarioservice.obtenerPersonasId(cedula).subscribe(
        personaP=> this.personaP=personaP
        
      )
    }
   
    
   }

}
