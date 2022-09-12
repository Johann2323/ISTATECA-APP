import { Injectable } from '@angular/core';
import { PaginaInicio } from './pagina';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginaInicioService {

  private urlEndPoint: string='http://localhost:8080/api/listalibros'
  constructor(private http: HttpClient ) { }

  getLibros(): Observable <PaginaInicio[]>{
    return this.http.get<PaginaInicio[]>(this.urlEndPoint);
  }
}
