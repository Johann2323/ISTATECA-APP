import { Injectable } from '@angular/core';
import { bibliotecarios } from './bibliotecarios';
import { Observable,of } from 'rxjs';
import { personaP } from '../personaP';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { bibliotecarioE } from '../bibliotecarioE';
@Injectable({
  providedIn: 'root'
})
export class RegistroBibliotecarioService {
  private urlendpoint:string='http://localhost:8080/api/crearbibliotecario';
  private urlendpoint1:string='http://localhost:8080/api/listarbibliotecario';
  private urlendpoint2:string='http://localhost:8080/api/bibliotecario_x_cedula';
  private urlendpoint4:string='http://localhost:8080/api/fenix_docente';
  private urlendpoint5:string='http://localhost:8080/api/editarbibliotecario';
  private urlendpoint6:string='http://localhost:8080/api/bibliotecario';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http:HttpClient) { }

  create(bibliotecario:bibliotecarios):Observable<bibliotecarios>{
    return this.http.post<bibliotecarios>(this.urlendpoint, bibliotecario, {headers: this.httpHeaders})
  }
  obtenerBibliotecarios(): Observable<bibliotecarios[]> {
    //return of(CLIENTES)
    return this.http.get<bibliotecarios[]>(this.urlendpoint1);
  }

  obtenerPersonasId(ced:string) : Observable<personaP>{
    //return of(CLIENTES)
    return this.http.get<personaP>(this.urlendpoint4+"?ced="+ced);
  }

  buscarBibliotecarios(cedula:String):Observable<bibliotecarios>{
    let res=this.urlendpoint2+"?ced="+cedula;
    return this.http.get<bibliotecarios>(res);
  }

  update(bibliotecario:bibliotecarios){
    return this.http.put<bibliotecarios>(this.urlendpoint5+"/"+bibliotecario.id_bibliotecario,bibliotecario);
      
  }

  obtenerBibliotecarioId(id:number){
    return this.http.get<bibliotecarioE>(this.urlendpoint6+"/"+id)
  }
}
