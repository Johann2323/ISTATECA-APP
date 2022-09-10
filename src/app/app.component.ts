import { Component } from '@angular/core';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Mi primera aplicacion en Angular';
  curso: string="TDS N4A";
  profesor: string="Ing. Carmen Tacuri";



 
  
}
