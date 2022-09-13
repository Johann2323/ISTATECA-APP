import { Injectable } from '@angular/core';
import { bibliotecario } from './bibliotecario';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistroBibliotecarioService {
  private urlendpoint:string='http://localhost:8080/api/crearbibliotecario';
  private urlendpoint1:string='http://localhost:8080/api/listarbibliotecario';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http:HttpClient) { }

  create(bibliotecario:bibliotecario):Observable<bibliotecario>{
    return this.http.post<bibliotecario>(this.urlendpoint, bibliotecario, {headers: this.httpHeaders})
  }
  obtenerBibliotecarios(): Observable<bibliotecario[]> {
    //return of(CLIENTES)
    return this.http.get<bibliotecario[]>(this.urlendpoint1);
  }
}
