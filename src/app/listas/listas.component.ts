import { Component, OnInit } from '@angular/core';
import { ListasService } from '../services/listas.service';
import { Autor } from '../models/Autor';
import { Tipo } from '../models/Tipo';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {
  Autores:Autor[]=[];
  ttipos:Tipo[]=[];
  buscar?:boolean;

  constructor(private  listaservice: ListasService, private router: Router) { }

  ngOnInit(): void {
    this.buscar=false;
    this.listaservice.obtenerAutores().subscribe(
      Autores=> this.Autores=Autores
    );
    this.listaservice.obtenerTipos().subscribe(
      ttipos=>this.ttipos=ttipos
    );
  }

  registroAutor(){
    this.router.navigate(['/app-registro-autor']);
  }

  resgistroTipo(){
    this.router.navigate(['/app-registro-tipo']);
  }

  onKeydownEvent(event: KeyboardEvent, buscar2: string): void {
    this.buscar = true;

    if (buscar2 == "") {
      this.ngOnInit();
    }

     
    
  }

  buscarAutor(buscar2:string){
    this.listaservice.listarautoresxnombre(buscar2).subscribe(
      response => {
        console.log(response);
        if (response == null) {
          Swal.fire({
            title: '<strong>Autor no encontrado</strong>',
            confirmButtonText: 'error',
            confirmButtonColor: '#012844',
            icon: 'error',
          })
          this.ngOnInit();
        } else {

          this.Autores = response;
        }
      }
    );
  }
}
