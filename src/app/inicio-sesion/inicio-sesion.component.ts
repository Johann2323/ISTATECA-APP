import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroUsuarioService } from '../registro-usuario/registro-usuario.service';
import { usuario } from '../registro-usuario/usuario';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']

})
export class InicioSesionComponent implements OnInit {
  
  respuesta: boolean = true;
  usuarios: usuario[] = [];
  email:String=document.getElementById('txtcorreo')+"";
  contra:String=document.getElementById('txtcontra')+"";

  constructor(private router: Router, private usuarioservice: RegistroUsuarioService) { }
  ngOnInit(): void {
    this.usuarioservice.obtenerUsuarios().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

  notificacion() {
  }

}