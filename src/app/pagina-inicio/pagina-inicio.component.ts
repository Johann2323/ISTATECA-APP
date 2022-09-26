import { Component, OnInit, DoCheck } from '@angular/core';
import { PaginaInicioService } from './pagina-inicio.service';
import { PaginaInicio } from './pagina';
import { Router, RouterLink } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {
  reporteV:string="";
  public PaginaI: PaginaInicio = new PaginaInicio();
  paginas: PaginaInicio[]=[];
  mostrar:boolean=false;

  
  constructor(private paginainicioService: PaginaInicioService, private router: Router, private router1: Router) { }
  ngDoCheck(): void {
    this.reporteV=JSON.parse(localStorage.getItem('rol')+"");
    console.log("Rol del Usuario: "+this.reporteV+"")
  }
  ngOnInit(): void {
    this.paginainicioService.getLibros().subscribe(
      pagina => this.paginas=pagina
    );
  }
  SolicitarLibro(){
    if(parseInt(this.reporteV)==9){
      console.log('no ha entrado');
      Swal.fire({
        confirmButtonColor: '#012844',
        icon: 'warning',
        title: 'Ups...',
        text: '¡Parece que no has iniciado sesion!',
        footer: '<a href="/app-registro-usuario">¡Si no tienes cuenta registrate aqui!</a>'
        
      })
      this.router.navigate(['/']);
    }else{
      var overlay=document.getElementById('overlay'); 
      overlay?.classList.add('active');

    }
  }
  cerrarpopup(){
    var overlay=document.getElementById('overlay'); 
      overlay?.classList.remove('active');
  }
 
}
