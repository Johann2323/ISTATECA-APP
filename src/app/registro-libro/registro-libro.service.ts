import { Injectable } from '@angular/core';
import { map, Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { libro } from './libro';
import { autor } from '../listas/autor';

@Injectable({
  providedIn: 'root'
})
export class RegistroLibroService {
  private urlendpoint:string='http://localhost:8080/api/crearlibro';
  private urlendpoint1:string='http://localhost:8080/api/listarlibros';
  private urlBuscarLibro: string ='http://localhost:8080/api/listarlibrosxnombre';
  private urlListarAutor: string = 'http://localhost:8080/api/listarautor';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http:HttpClient) { }

  create(libro:libro):Observable<libro>{
    return this.http.post<libro>(this.urlendpoint, libro, {headers: this.httpHeaders})
  }

  obtenerAutores(): Observable<autor[]> {
    return this.http.get<autor[]>(this.urlListarAutor);
  }
  obtenerLibro(nombre: String): Observable<libro[]> {
   return this.http.get<libro[]>(this.urlendpoint1);
  }

  buscarLibro (nombre:String)
  :Observable<libro>{
    let res=this.urlBuscarLibro+'/'+nombre;
    return this.http.get<libro>(res);
  }
}

