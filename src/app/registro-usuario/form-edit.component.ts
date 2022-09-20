import { Component, OnInit } from '@angular/core';
import { RegistroUsuarioService } from './registro-usuario.service';
import { Router } from '@angular/router';
import { usuario } from './usuario';
import { persona } from '../persona';
import { personaP } from '../personaP';
import { ErrorHandler } from '@angular/core';
import { usuarioE } from '../usuarioE';

@Component({
  selector: 'app-form-editUsuario',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  public usuario: usuario = new usuario();
  persona: persona = {};
  personaP:personaP={};
  usuarioE:usuarioE={};
id?:number;
  
  

  constructor(private usuarioservice: RegistroUsuarioService, private router: Router) { }

  ngOnInit(): void {
    
  }

  


  
  actualizarUsuario(usuario:usuario){
    this.usuario.persona=this.persona
    this.usuario.idUsuario=this.usuarioE.id_usuario
    this.persona.id_persona=this.usuarioE.persona?.id_persona
    this.persona.activo=true;
    this.persona.rol=2;
alert(this.usuarioE.id_usuario)
    this.usuarioservice.update(usuario)
    .subscribe(data=>{
      this.usuario=data;
      alert("Se actualizo con exito...!!")
      this.router.navigate(['app-pagina-inicio'])
    })
  }



  buscar(idss:string){
    
    this.id=Number.parseInt(idss)
    //alert(this.id)
      this.usuarioservice.obtenerUsuariosId(this.id).subscribe(
        usuarioE=> {this.usuarioE=usuarioE,this.persona.cedula=usuarioE.persona?.cedula,this.persona.nombres=usuarioE.persona?.nombres,this.persona.celular=usuarioE.persona?.celular
          ,this.persona.correo=usuarioE.persona?.correo,this.persona.usuario=usuarioE.persona?.usuario,this.persona.clave=usuarioE.persona?.clave
        //alert(this.usuarioE.id_usuario)}
        }
      )
     
    

    
    

    /*if(nombre==""){
      alert('Cedula no registrada')
      //this.router.navigate([''])
      window.location.reload();
    }*/

    
      

   

   
    
   }

}
