import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  url: string = "/credentials";

  constructor(private http: HttpClient) { }

  validateLoginDetails(user: Persona) {
    window.sessionStorage.setItem("userdetails",JSON.stringify(user));
    return this.http.get(environment.rooturl + this.url, { observe: 'response', withCredentials: true });
  }

}
