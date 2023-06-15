import { Injectable } from '@angular/core';
import { Carrera } from '../models/Carrera';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {
    private urlEndPoint: string='http://localhost:8080/carrera/listar';
  constructor(private http: HttpClient) { }
  getCarreras(): Observable <Carrera[]>{
    return this.http.get<Carrera[]>(this.urlEndPoint);
  }
  
}