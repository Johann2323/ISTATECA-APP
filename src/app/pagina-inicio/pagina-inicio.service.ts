import { Injectable } from '@angular/core';
import { PaginaInicio } from './pagina';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { libro } from '../registro-libro/libro'; 

@Injectable({
  providedIn: 'root'
})
export class PaginaInicioService {

  private urlEndPoint: string='http://localhost:8080/api/listarlibros'
  private urlBuscarLibro: string ='http://localhost:8080/api/listarlibrosxnombre';
  constructor(private http: HttpClient ) { }

  getLibros(): Observable <PaginaInicio[]>{
    return this.http.get<PaginaInicio[]>(this.urlEndPoint);
  }

  buscarLibro (nombre:String)
  :Observable<PaginaInicio[]>{
    let res=this.urlBuscarLibro+'/'+nombre;
    return this.http.get<PaginaInicio[]>(res);
  }

  
}
