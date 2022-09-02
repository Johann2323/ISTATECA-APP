import { Injectable } from '@angular/core';
import { Usuario } from './Usuario';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistroUsuarioService {
  private urlendpoint:string='http://localhost:8080/api/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http:HttpClient) { }
  
  create(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.urlendpoint, usuario, {headers: this.httpHeaders})
  }
}
