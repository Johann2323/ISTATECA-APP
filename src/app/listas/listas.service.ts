import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { autor } from './autor';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListasService {
  private urlendpoint:string='http://localhost:8080/api/listarautor';
  private urlendpoint1:string='http://localhost:8080/api/listarbibliotecario';
  private urlendpoint2:string='http://localhost:8080/api/bibliotecario_x_cedula';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http:HttpClient) { }

  obtenerAutores(): Observable<autor[]> {
    return this.http.get<autor[]>(this.urlendpoint1);
  }

}
