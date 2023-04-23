import { Injectable } from '@angular/core';
import { prestamo } from './prestamo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { libro } from '../registro-libro/libro'; 

@Injectable({
  providedIn: 'root'
})
export class prestamoService {

  private urlEndPoint: string='http://localhost:8080/api/listarprestamo'
  private urlBuscarLibro: string ='http://localhost:8080/api/listarprestamoxestado';
  private urlendpoint: string ='http://localhost:8080/api/crearPrestamo';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient ) { }

  getPrestamos(): Observable <prestamo[]>{
    return this.http.get<prestamo[]>(this.urlEndPoint);
  }

  buscarPrestamo (estado_prestamo:String)
  :Observable<prestamo[]>{
    let res=this.urlBuscarLibro+'/'+estado_prestamo;
    return this.http.get<prestamo[]>(res);
  }

  create(prestamos:prestamo):Observable<prestamo>{
    return this.http.post<prestamo>(this.urlendpoint, prestamos, {headers: this.httpHeaders})
  }
  

  
}
