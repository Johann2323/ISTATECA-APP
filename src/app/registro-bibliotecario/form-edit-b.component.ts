import { Component, OnInit } from '@angular/core';
import { bibliotecarios } from './bibliotecarios';
import { bibliotecarioE } from '../bibliotecarioE';
import { RegistroBibliotecarioService } from './registro-bibliotecario.service';
import { Router } from '@angular/router';
import { persona } from '../persona';
import { personaP } from '../personaP';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-editBibliotecario',
  templateUrl: './form-edit-b.component.html',
  styleUrls: ['./form-edit-b.component.css']
})
export class FormEditBComponent implements OnInit {
  public reporteV: String = "";
  public bibliotecarios: bibliotecarios = new bibliotecarios();
  persona: persona = {};
  personaP: personaP = {};
  bibliotecarioE: bibliotecarioE = {};
  idb?: number;
  public  estado?:string;
  rols?:number;
  public tipob?:string;
  RadioAdmin: any = document.getElementById('admin');
  RadioBibliotecario: any = document.getElementById('biblioteca');


  constructor(public bibliotecarioservice: RegistroBibliotecarioService, private router: Router) { }

  ngOnInit(): void {
    this.reporteV = localStorage.getItem('bibliotecario') + "";
    console.log("Bibliotecario: " + this.reporteV + "")
    this.buscar(this.reporteV + "");

  }

  onKeydownEvent(event: KeyboardEvent, cedula: string): void {
    if (cedula == "") {
      alert('INGRESE UN ID')
      window.location.reload();
    }

    if (cedula !== "") {
      this.buscar(this.reporteV + "");
    }

  }

  actualizarBibliotecario(bibliotecarios: bibliotecarios) {
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
        this.bibliotecarios.persona = this.persona
        this.bibliotecarios.id_bibliotecario = this.bibliotecarioE.id_bibliotecario
        this.persona.id_persona = this.bibliotecarioE.persona?.id_persona
        this.persona.activo = true;


        this.bibliotecarioservice.update(bibliotecarios)
          .subscribe(data => {
            this.bibliotecarios = data;
          })
          Swal.fire({
            title: '<strong>¡Bibliotecario Actualizado!</strong>',
              confirmButtonText: 'OK',
              confirmButtonColor: '#012844',
              icon: 'success',
              html:
              
                'El bibliotecario<br><b>'+this.bibliotecarios.persona?.nombres+'</b><br>'+
                'ha sido actualizado correctamente'
            
           }
           
          )
          this.router.navigate(['app-pagina-inicio'])



      }
    })
    


  

}

  buscar(idss: string) {

    this.idb = Number.parseInt(idss)

    this.bibliotecarioservice.obtenerBibliotecarioId(this.idb).subscribe(
      bibliotecarioE => {
        this.bibliotecarioE = bibliotecarioE, this.persona.cedula = bibliotecarioE.persona?.cedula, this.persona.nombres = bibliotecarioE.persona?.nombres, this.persona.celular = bibliotecarioE.persona?.celular
        , this.persona.correo = bibliotecarioE.persona?.correo, this.persona.usuario = bibliotecarioE.persona?.usuario, this.persona.clave = bibliotecarioE.persona?.clave, this.persona.rol = bibliotecarioE.persona?.rol
        if(bibliotecarioE.activo_bibliotecario==true){
          this.estado="Activo"


        }else if(bibliotecarioE.activo_bibliotecario==false){
          this.estado="Inactivo"

        }

        if(bibliotecarioE.persona?.rol==1){
          this.tipob="Bibliotecario"
          
        }else if(bibliotecarioE.persona?.rol==0){
          this.tipob="Administrador"
          
        }
      }
    )
  }
  tipoBibliotecario(rol:string){
    this.rols=Number.parseInt(rol)
    if(this.rols==0){
      alert("Admin")
    }else if(this.rols==1){
      alert("bibliotecario")
    }
  }

}
