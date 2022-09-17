import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpResponse, HttpUserEvent } from '@angular/common/http';
import { persona } from "../persona";
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private urlendpoint: string = 'http://localhost:8080/api/validarLogin';
  private urlendpoint1: string = 'http://localhost:8080/api/num_rol';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(private http: HttpClient) { }
  validarLogin(usuario: String, clave: String):Observable<boolean>{
    let res=this.urlendpoint+"?usuario="+usuario+"&clave="+clave;
    return this.http.get<boolean>(res);
  }
  num_rol(usuario: String):Observable<number>{
    let res=this.urlendpoint1+"?usuario="+usuario;
    return this.http.get<number>(res);
  }
  
}
