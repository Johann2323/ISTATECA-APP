import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bibliotecario } from '../models/Bibliotecario_Cargo';
import { PersonaP } from '../models/PersonaP';;
@Injectable({
  providedIn: 'root'
})
export class RegistroUsuarioService {
  private urlendpoint:string='http://localhost:8080/api/crearusuario';
  private urlendpoint2:string='http://localhost:8080/api/fenix_alumno';
  private urlendpoint3:string='http://localhost:8080/api/editarusuario';
  private urlendpoint4:string='http://localhost:8080/api/usuario';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http:HttpClient) { }
  /*
  create(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.urlendpoint, usuario, {headers: this.httpHeaders})
  }
  obtenerPersonasId(ced:string) : Observable<PersonaP>{
    //return of(CLIENTES)
    return this.http.get<PersonaP>(this.urlendpoint2+"?ced="+ced);

  }
  obtenerUsuarios(): Observable<Usuario[]> {
    //return of(CLIENTES)
    return this.http.get<Usuario[]>(this.urlendpoint);
  }

  update(usuario:Usuario){
return this.http.put<Usuario>(this.urlendpoint3+"/"+usuario.id_usuario,usuario);
  }
  obtenerUsuariosId(id:number){
    return this.http.get<Usuario>(this.urlendpoint4+"/"+id)
  }*/
}
