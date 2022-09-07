import { Injectable } from '@angular/core';
import { PaginaInicio } from './pagina-inicio';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginaInicioService {

  private urlEndPoint: string='http://localhost:4200/listalibros'
  constructor(private http: HttpClient ) { }

  getLibros(): Observable <PaginaInicio[]>{
    return this.http.get<PaginaInicio[]>(this.urlEndPoint);
  }
}
