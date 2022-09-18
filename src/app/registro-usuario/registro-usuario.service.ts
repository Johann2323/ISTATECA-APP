import { Injectable } from '@angular/core';
import { usuario } from './usuario';
import { persona } from '../persona';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { bibliotecarios } from '../registro-bibliotecario/bibliotecarios';
import { personaP } from '../personaP';
@Injectable({
  providedIn: 'root'
})
export class RegistroUsuarioService {
  private urlendpoint:string='http://localhost:8080/api/crearusuario';
  private urlendpoint2:string='http://localhost:8080/api/fenix_alumno';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http:HttpClient) { }
  
  create(usuario:usuario):Observable<usuario>{
    return this.http.post<usuario>(this.urlendpoint, usuario, {headers: this.httpHeaders})
  }
  obtenerPersonasId(ced:string) : Observable<personaP>{
    //return of(CLIENTES)
    return this.http.get<personaP>(this.urlendpoint2+"?ced="+ced);
  }
  /*actualizarPersonas(bibliotecario:bibliotecarios){
    //return of(CLIENTES)
    return this.http.put<bibliotecarios>(this.urlendpoint2+"/"+bibliotecario.persona?.cedula);
  }*/
  obtenerUsuarios(): Observable<usuario[]> {
    //return of(CLIENTES)
    return this.http.get<usuario[]>(this.urlendpoint);
  }
}
