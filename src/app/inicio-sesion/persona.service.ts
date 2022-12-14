import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpResponse, HttpUserEvent } from '@angular/common/http';
import { persona } from "../persona";
import { map, Observable } from 'rxjs';
import { usuario } from '../registro-usuario/usuario';
import { bibliotecarios } from '../registro-bibliotecario/bibliotecarios';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private urlendpoint: string = 'http://localhost:8080/api/validarLogin';
  private urlendpoint1: string = 'http://localhost:8080/api/num_rol';
  private urlendpoint2: string = 'http://localhost:8080/api/validarPersona';
  private urlendpoint3: string = 'http://localhost:8080/api/tipocliente';
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
  val_persona(usuario:String, clave:String):Observable<persona>{
    let res=this.urlendpoint2+"?usuario="+usuario+"&clave="+clave;
    return this.http.get<persona>(res);
  }
  tipo_usuario(id_persona:number, rol:number):Observable<usuario>{
    let res=this.urlendpoint3+"?id_persona="+id_persona+"&rol="+rol;
    return this.http.get<usuario>(res);
  }
  tipo_biblitecario(id_persona:number, rol:number):Observable<bibliotecarios>{
    let res=this.urlendpoint3+"?id_persona="+id_persona+"&rol="+rol;
    return this.http.get<bibliotecarios>(res);
  }
  
}
