import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ResolveEnd, Route, Router, Routes } from '@angular/router';
import { RegistroLibroService } from './registro-libro.service';
import { libro } from './libro';
import { bibliotecarios } from '../registro-bibliotecario/bibliotecarios';
import { tipo } from './tipo';
import { registerLocaleData } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Binary } from '@angular/compiler';




@Component({
  selector: 'app-registro-libro',
  templateUrl: './registro-libro.component.html',
  styleUrls: ['./registro-libro.component.css']
})
export class RegistroLibroComponent implements OnInit {
  bibliotecarios: bibliotecarios = {};
  tipo: tipo = {};
  file: any;
  reporteV:String="";
  reporteV2:String="";
 

  public previsualizacion?: string
  public PDF?: string
  public archivos: any = []
  constructor(private sanitizer: DomSanitizer, private libroservice: RegistroLibroService, private rutas: Router) { }

  ngOnInit(): void {
    this.reporteV=localStorage.getItem('bibliotecario')+"";
    this.reporteV2=localStorage.getItem('nombrebibliotecario')+"";
    console.log("Bibliotecario: "+this.reporteV+" Nombre:"+ this.reporteV2);

  }


  capturarArchivo(event: any): any {
    const archivocapturado = event.target.files[0]
    this.extraerBase64(archivocapturado).then((image: any) => {

      console.log(image)
    })


  }

  capturarImagen(event: any): any {
    const archivocapturado = event.target.files[0]
    this.extraerBase64(archivocapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      //console.log(imagen.base);

      this.Libro.imagen=imagen.base
      console.log(imagen.base);
      

      const data = imagen.base
      const libre = atob(data.split(",")[1]);

      this.file = libre;
      
      this.Libro.imagen = this.file
      console.log(this.Libro.imagen);

    })   
    //this.archivos.push(archivocapturado)
    //console.log(event.target.files)
  }

  

 


  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result

        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      console.log("Error al Subir Imagen")
    }
  })

  //Guardar Libro


  public Libro: libro = new libro();

  disponible?: boolean = this.Libro.disponibilidad;
  public crearLibro(reg: NgForm): void {
    console.log("Se ha realizado un click")
    this.Libro.tipo = this.tipo
    this.Libro.bibliotecario = this.bibliotecarios

    console.log(this.Libro.bibliotecario)

    

   

    this.libroservice.create(this.Libro).subscribe(
      Response => { this.Libro }

    );
    

  }


}


