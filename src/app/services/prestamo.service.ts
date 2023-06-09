import { Injectable } from '@angular/core';
import { Prestamo } from '../models/Prestamo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../models/Libro'; 

@Injectable({
  providedIn: 'root'
})
export class prestamoService {

  private urlEndPoint: string='http://localhost:8080/api/listarprestamo'
  private urlBuscarLibro: string ='http://localhost:8080/api/listarprestamoxestado';
  private urlendpoint: string ='http://localhost:8080/api/crearPrestamo';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient ) { }

  getPrestamos(): Observable <Prestamo[]>{
    return this.http.get<Prestamo[]>(this.urlEndPoint);
  }

  buscarPrestamo (estado_prestamo:String)
  :Observable<Prestamo[]>{
    let res=this.urlBuscarLibro+'/'+estado_prestamo;
    return this.http.get<Prestamo[]>(res);
  }

  create(prestamos:Prestamo):Observable<Prestamo>{
    return this.http.post<Prestamo>(this.urlendpoint, prestamos, {headers: this.httpHeaders})
  }
  

  
}
