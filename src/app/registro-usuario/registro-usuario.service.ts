import { Injectable } from '@angular/core';
import { usuario } from './usuario';
import { persona } from '../persona';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistroUsuarioService {
  private urlendpoint:string='http://localhost:8080/api/crearusuario';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http:HttpClient) { }
  
  create(usuario:usuario):Observable<usuario>{
    return this.http.post<usuario>(this.urlendpoint, usuario, {headers: this.httpHeaders})
  }
  obtenerUsuarios(): Observable<usuario[]> {
    //return of(CLIENTES)
    return this.http.get<usuario[]>(this.urlendpoint);
  }

  //createP(persona:persona):Observable<persona[]>{
    //return this.http.post<persona[]>(this.urlendpoint, persona, {headers: this.httpHeaders})
  //}
}
