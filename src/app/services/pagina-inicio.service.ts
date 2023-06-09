import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../models/Libro'; 

import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class PaginaInicioService {

  private urlEndPoint: string='http://localhost:8080/api/listarlibros'
  private urlBuscarLibro: string ='http://localhost:8080/api/listarlibrosxnombre';
  private urlBuscarUsuario: string ='http://localhost:8080/api/usuario';
  constructor(private http: HttpClient ) { }

  getLibros(): Observable <Libro[]>{
    return this.http.get<Libro[]>(this.urlEndPoint);
  }

  buscarLibro (nombre:String)
  :Observable<Libro[]>{
    let res=this.urlBuscarLibro+'/'+nombre;
    return this.http.get<Libro[]>(res);
  }
  obtenerUsuariosId(id:number){
    return this.http.get<Usuario>(this.urlBuscarUsuario+"/"+id)
  }

  
}
