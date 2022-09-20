import { Component, OnInit } from '@angular/core';
import { ListasService } from './listas.service';
import { autor } from './autor';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {
  Autores:autor[]=[];

  constructor(private  listaservice: ListasService) { }

  ngOnInit(): void {
    this.listaservice.obtenerAutores().subscribe(
      Autores=> this.Autores=Autores
    );
  }

}
