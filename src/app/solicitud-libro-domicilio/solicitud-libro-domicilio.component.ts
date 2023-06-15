import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Prestamo } from '../models/Prestamo';
import Swal from 'sweetalert2';
import { doch } from '../solicitud-libro/doch';


@Component({
  selector: 'app-solicitud-libro-domicilio',
  templateUrl: './solicitud-libro-domicilio.component.html',
  styleUrls: ['./solicitud-libro-domicilio.component.css']
})
export class SolicitudLibroDomicilioComponent implements OnInit {
  prestamo: Prestamo = new Prestamo();
  mostrar: boolean = false;
  doch: doch[] = []
  variable?: number

  documentos: doch = new doch;
  names?: string[] = [];

  step = 1;
  totalSteps = 2;

  ngOnInit(): void {
    var solicitudJSONGET = localStorage.getItem("AceptarSolicitud");
    var solicitud = JSON.parse(solicitudJSONGET + "");
    this.prestamo = solicitud;
    console.log(this.prestamo);
  }

  avanzar1() {
    if (this.step < this.totalSteps) {
      this.step++;
    }
  }
  retroceder1() {
    if (this.step > 1) {
      this.step--;
    }
  }


  crear() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '<strong>Guardado correctamente</strong>',
      showConfirmButton: false,
      timer: 1500
    })
    setTimeout(() => {
      location.reload();
    }, 1000);
  }


  constructor() { }
  activarDoc() {
    this.mostrar = true
  }
  desactivarDoc() {
    this.mostrar = false
  }
  guardarDoc(doc: string, reg: NgForm) {
    if (doc == "") {
      alert("Ingrese un tipo de documento")
    } else {
      this.variable = this.doch.length + 1;


      this.names?.push(doc)
      console.log(this.names)




    }


    reg.reset();


  }
}
