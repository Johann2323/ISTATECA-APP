import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { persona } from "../persona";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private urlendpoint:string='http://localhost:8080/api/validarLogin';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http:HttpClient) { }
  
  validarLogin(usuario:String, clave:String):Observable<persona>{
    return this.http.get<persona>(this.urlendpoint);
  }
  
}
