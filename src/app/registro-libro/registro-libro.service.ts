import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class RegistroLibroService {
  private urlendpoint:string='http://localhost:8080/api/crearlibro';
  private urlendpoint1:string='http://localhost:8080/api/listarlibros';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http:HttpClient) { }

  create(libro:libro):Observable<libro>{
    return this.http.post<libro>(this.urlendpoint, libro, {headers: this.httpHeaders})
  }
  // obtenerLibro(): Observable<libro[]> {
  //   return this.http.get<libro[]>(this.urlendpoint1);
  // }
}

