import { Component, OnInit } from '@angular/core';
import { ListasService } from './listas.service';
import { autor } from './autor';
import { TiposLibros } from './tipos-libros';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {
  Autores:autor[]=[];
  ttipos:TiposLibros[]=[];

  constructor(private  listaservice: ListasService) { }

  ngOnInit(): void {
    this.listaservice.obtenerAutores().subscribe(
      Autores=> this.Autores=Autores
    );
    this.listaservice.obtenerTipos().subscribe(
      ttipos=>this.ttipos=ttipos
    );
  }

}
