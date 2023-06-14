import { Component, OnInit } from '@angular/core';
import { RegistroUsuarioService } from '../services/registro-usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';
import { Persona } from '../models/Persona';
import { PersonaP } from '../models/PersonaP';
import { ErrorHandler } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-editUsuario',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {
  reporteV: String = "";
  public usuario: Usuario = new Usuario();
  persona: Persona = {};
  personaP: PersonaP = {};
  usuarioE: Usuario = {};
  id?: number;



  constructor(private usuarioservice: RegistroUsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.reporteV = localStorage.getItem('usuario') + "";
    console.log("Usuario: " + this.reporteV + "");
    this.buscar(this.reporteV + "")
  }





  actualizarUsuario(usuario: Usuario) {

    Swal.fire({
      title: '¿Quieres guardar los cambios?',
      text: "¡No puede revertir los datos!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#012844',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, modificalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuario = this.persona
        this.usuario.per_id 
        this.persona.per_id 
        this.persona.per_activo = true;
        this.persona.per_tipo = 2;
        /*this.usuarioservice.update(usuario)
          .subscribe(data => {
            this.usuario = data
          })*/
        Swal.fire({
          title: '<strong>¡Usuario Actualizado!</strong>',
            confirmButtonText: 'OK',
            confirmButtonColor: '#012844',
            icon: 'success',
            html:
            
              'El usuario<br><b>'+this.usuario.per_nombres+'</b><br>'+
              'ha sido actualizado correctamente'
          
         }
         
        )
        this.router.navigate(['app-pagina-inicio'])
      }
    })

  }



  buscar(idss: string) {

    this.id = Number.parseInt(idss)

    // this.usuarioservice.obtenerUsuariosId(this.id).subscribe(
    //   usuarioE => {
    //     this.usuarioE = usuarioE, this.persona.per_cedula = usuarioE.persona?.cedula, this.persona.nombres = usuarioE.persona?.nombres, this.persona.celular = usuarioE.persona?.celular
    //     , this.persona.per_correo = usuarioE.persona?.correo, this.persona.usuario = usuarioE.persona?.usuario, this.persona.clave = usuarioE.persona?.clave

    //   }
    // )
  }

}
