import { Component, OnInit } from '@angular/core';
import { RegistroUsuarioService } from './registro-usuario.service';
import { Router } from '@angular/router';
import { usuario } from './usuario';
import { persona } from '../persona';
import { personaP } from '../personaP';
import { ErrorHandler } from '@angular/core';
import { usuarioE } from '../usuarioE';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-editUsuario',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {
  reporteV: String = "";
  public usuario: usuario = new usuario();
  persona: persona = {};
  personaP: personaP = {};
  usuarioE: usuarioE = {};
  id?: number;



  constructor(private usuarioservice: RegistroUsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.reporteV = localStorage.getItem('usuario') + "";
    console.log("Usuario: " + this.reporteV + "");
    this.buscar(this.reporteV + "")
  }





  actualizarUsuario(usuario: usuario) {

    Swal.fire({
      title: '¿Esta seguro de modificar?',
      text: "No puede revertir los datos!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#012844',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, modificalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuario.persona = this.persona
        this.usuario.id_usuario = this.usuarioE.id_usuario
        this.persona.id_persona = this.usuarioE.persona?.id_persona
        this.persona.activo = true;
        this.persona.rol = 2;
        this.usuarioservice.update(usuario)
          .subscribe(data => {
            this.usuario = data
          })
        Swal.fire({
          title: '<strong>Usuario Actualizado</strong>',
            confirmButtonText: 'OK',
            confirmButtonColor: '#012844',
            icon: 'success',
            html:
            
              'El usuario<br><b>'+this.usuario.persona?.nombres+'</b><br>'+
              'ha sido actualizado correctamente'
          
         }
         
        )
        this.router.navigate(['app-pagina-inicio'])
      }
    })

  }



  buscar(idss: string) {

    this.id = Number.parseInt(idss)

    this.usuarioservice.obtenerUsuariosId(this.id).subscribe(
      usuarioE => {
        this.usuarioE = usuarioE, this.persona.cedula = usuarioE.persona?.cedula, this.persona.nombres = usuarioE.persona?.nombres, this.persona.celular = usuarioE.persona?.celular
        , this.persona.correo = usuarioE.persona?.correo, this.persona.usuario = usuarioE.persona?.usuario, this.persona.clave = usuarioE.persona?.clave

      }
    )
  }

}
