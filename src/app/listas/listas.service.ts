import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { autor } from './autor';
import { TiposLibros } from './tipos-libros';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListasService {
  private urlendpoint:string='http://localhost:8080/api/listarautor';
  private urlendpoint1:string='http://localhost:8080/api/listartipo';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http:HttpClient) { }

  obtenerAutores(): Observable<autor[]> {
    return this.http.get<autor[]>(this.urlendpoint);
  }
  obtenerTipos(): Observable<TiposLibros[]> {
    return this.http.get<TiposLibros[]>(this.urlendpoint1);
  }

}
