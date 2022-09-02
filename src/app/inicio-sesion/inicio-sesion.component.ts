import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']

})
export class InicioSesionComponent implements OnInit {
respuesta:boolean=true;
  constructor(private router: Router) { }
  notificacion(){
    this.router.navigate(['/', 'app-ventana-emergente']);
    this.respuesta= confirm("Se a solicitado exitosamente este libro");
    if(this.respuesta == false){
      alert("F");
    }else{

    }
  }

  ngOnInit(): void {
  }

}
