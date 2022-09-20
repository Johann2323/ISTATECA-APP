import { Component, OnInit, DoCheck } from '@angular/core';
import { PaginaInicioService } from './pagina-inicio.service';
import { PaginaInicio } from './pagina';
import { Router, RouterLink } from '@angular/router';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';

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
      alert("Inicie Sesión Primero");
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
