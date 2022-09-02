import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventana-emergente',
  templateUrl: './ventana-emergente.component.html',
  styleUrls: ['./ventana-emergente.component.css']
})
export class VentanaEmergenteComponent implements OnInit {

  constructor() { }
overlay=document.getElementById('btn-cerrar-popup');
popup=document.getElementById('popup');
  ngOnInit(): void {
  }
  cerrar (){
    this.overlay?.classList.remove('active');
    this.popup?.classList.remove('active');
  }

}
