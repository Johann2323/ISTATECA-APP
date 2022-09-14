import { Component, OnInit } from '@angular/core';
import { RegistroBibliotecarioService } from './registro-bibliotecario.service';
import { bibliotecarios } from './bibliotecarios';
import { persona } from '../persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-bibliotecario',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponentb implements OnInit {
public bibliotecarios:bibliotecarios= new bibliotecarios();
persona:persona={};
/*roles =[
  {codigo: 1 ,nombre:"Administrador"},
  {codigo: 2 ,nombre:"Bibliotecario"},
]*/
  constructor(private bibliotecarioservice: RegistroBibliotecarioService, private router:Router) { }

  ngOnInit(): void {
  }

  public createbibliotecario(): void {
    
    console.log("ha realizado un clic")
    this.bibliotecarios.persona=this.persona
    this.persona.activo=true;
    console.log(this.bibliotecarios.persona)
    console.log(this.bibliotecarios.rol)
        this.bibliotecarioservice.create(this.bibliotecarios).subscribe(
          response => { this.bibliotecarios } 
        )
  }

}
