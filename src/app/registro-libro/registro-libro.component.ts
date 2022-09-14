import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Route, Router, Routes } from '@angular/router';
import { RegistroLibroService } from './registro-libro.service';
import { libro } from './libro';




@Component({
  selector: 'app-registro-libro',
  templateUrl: './registro-libro.component.html',
  styleUrls: ['./registro-libro.component.css']
})
export class RegistroLibroComponent implements OnInit {
  public previsualizacion?: string
  public archivos: any = []
  constructor(private sanitizer:DomSanitizer, private libroservice: RegistroLibroService,private rutas: Router) { }

  ngOnInit(): void {
  }


  capturarImagen(event: any): any {
    const archivocapturado = event.target.files[0]
    this.extraerBase64(archivocapturado).then((imagen : any)=>{
      this.previsualizacion=imagen.base;
      console.log(imagen)
    })
   // this.archivos.push(archivocapturado)
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
  public Libro: libro=new libro();
  public create ():void{

    this.libroservice.create(this.Libro).subscribe(
      Response=>this.rutas.navigate(['/clientes'])
    )
  }


}
