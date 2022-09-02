import { Component, OnInit } from '@angular/core';
import { Usuario } from './Usuario';
import { RegistroUsuarioService } from './registro-usuario.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
