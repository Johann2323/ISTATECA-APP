import { Injectable } from '@angular/core';
import { Prestamo } from '../models/Prestamo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../models/Libro';

@Injectable({
  providedIn: 'root'
})
export class prestamoService {

  private urlEndPoint: string = 'http://localhost:8080/prestamo/listar'
  private urlEditar: string = 'http://localhost:8080/prestamo/editar';
  private urlEndPointCrearPrestamo: string = 'http://localhost:8080/prestamo/crear';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(private http: HttpClient) { }

  getPrestamos(): Observable<Prestamo[]> {
    return this.http.get<Prestamo[]>(this.urlEndPoint);
  }

  /*buscarPrestamo(estado_prestamo: String)
    : Observable<Prestamo[]> {
    let res = this.urlBuscarLibro + '/' + estado_prestamo;
    return this.http.get<Prestamo[]>(res);
  }*/

  create(prestamos: Prestamo): Observable<Prestamo> {
    return this.http.post<Prestamo>(this.urlEndPointCrearPrestamo, prestamos, { headers: this.httpHeaders })
  }

  update(prestamo:Prestamo){
    return this.http.put<Prestamo>(this.urlEditar+"/"+prestamo.id, prestamo);
      
  }



}
