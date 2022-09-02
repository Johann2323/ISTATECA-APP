import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',

  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']

})
export class InicioSesionComponent implements OnInit {
mensaje :String="";
respuesta:boolean=true;
  constructor() { }
  notificacion(){
    
    this.respuesta= confirm("Se a solicitado exitosamente este libro");
    if(this.respuesta == false){
      alert("F");
    }else{

    }
  }

  ngOnInit(): void {
  }

}
