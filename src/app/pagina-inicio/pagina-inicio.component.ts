import { Component, OnInit } from '@angular/core';
import { PaginaInicioService } from './pagina-inicio.service';
import { PaginaInicio } from './pagina';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {
   
  public PaginaI: PaginaInicio = new PaginaInicio();
  paginas: PaginaInicio[]=[]
  constructor(
    private paginainicioService: PaginaInicioService
    ) { }

  ngOnInit(): void {
    this.paginainicioService.getLibros().subscribe(
      //response =>{this.PaginaI}
      pagina => this.paginas=pagina
    );
  }
 
}
