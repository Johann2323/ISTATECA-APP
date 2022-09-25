import { Component, OnInit, OnChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ResolveEnd, Route, Router, Routes } from '@angular/router';
import { RegistroLibroService } from './registro-libro.service';
import { libro } from './libro';
import { bibliotecarios } from '../registro-bibliotecario/bibliotecarios';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ListasService } from '../listas/listas.service';
import { TiposLibros } from '../listas/tipos-libros';

import { RegistroBibliotecarioService } from '../registro-bibliotecario/registro-bibliotecario.service';
import { bibliotecarioE } from '../bibliotecarioE';
import { persona } from '../persona';
import Swal from 'sweetalert2';






@Component({
  selector: 'app-registro-libro',
  templateUrl: './registro-libro.component.html',
  styleUrls: ['./registro-libro.component.css']
})
export class RegistroLibroComponent implements OnInit {
  bibliotecarios: bibliotecarios = {};
  tipo: TiposLibros={};
  file: any;
  reporteV:String="";
  reporteV2:String="";
  bibliotecarioE:bibliotecarioE={};
  persona:persona={};
  Tipoe: TiposLibros[]=[]
  guardar:boolean=true;
  form!: FormGroup;

  opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';

  idb?:number;
  idT?:number;
 

  public previsualizacion?: string
  public PDF?: string
  public archivos: any = []
  constructor(private sanitizer: DomSanitizer, private libroservice: RegistroLibroService, private rutas: Router, private bibliotecarioservice: RegistroBibliotecarioService
    , private ListaT: ListasService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.reporteV=localStorage.getItem('bibliotecario')+"";
    this.reporteV2=localStorage.getItem('nombrebibliotecario')+"";
    console.log("Bibliotecario: "+this.reporteV+" Nombre:"+ this.reporteV2);

    this.buscar(this.reporteV+'')
    this.ListaT.obtenerTipos().subscribe(
      TipoS=>this.Tipoe=TipoS
    );



  }
//Conseguir capturar tipo de Libro
  seleccionT(e : any){
    console.log(e.target.value);
     this.idT = e.target.value;
 
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
      

      
      
      

      // const data = imagen.base
      // const libre = atob(data.split(",")[1]);

      // this.file = libre;
      
      // this.Libro.imagen = this.file
      // console.log(this.Libro.imagen);

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
//Fin de capturar archivos


//Capturar Persona
  buscar(idss:string){
 
    this.idb=Number.parseInt(idss)
   
      this.bibliotecarioservice.obtenerBibliotecarioId(this.idb).subscribe(
        bibliotecarioE=> {this.bibliotecarioE=bibliotecarioE,this.persona.cedula=bibliotecarioE.persona?.cedula,this.persona.nombres=bibliotecarioE.persona?.nombres,this.persona.celular=bibliotecarioE.persona?.celular
          ,this.persona.correo=bibliotecarioE.persona?.correo,this.persona.usuario=bibliotecarioE.persona?.usuario,this.persona.clave=bibliotecarioE.persona?.clave, this.persona.rol=bibliotecarioE.persona?.rol
       
        }
      )
   }

   //Validar URL

   Validar() {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.form = this.fb.group({
      s_url: ['', [Validators.required, Validators.pattern(reg)]],
    });
  }

  // Getter for easy access
  get s_url() {
    return this.form.get('s_url');
  }

  //Guardar Libro


  public Libro: libro = new libro();

  disponible?: boolean = this.Libro.disponibilidad;

  public crearLibro(reg: NgForm): void {
    
    console.log("Se ha realizado un click")
    this.Libro.tipo = this.tipo
    this.Libro.bibliotecario = this.bibliotecarios
    this.Libro.bibliotecario = this.bibliotecarioE

    console.log(this.Libro.bibliotecario)

    this.bibliotecarioE.id_bibliotecario = this.Libro.bibliotecario.id_bibliotecario
    this.Libro.tipo.id_tipo = this.idT
    this.Libro.imagen= this.previsualizacion
    this.Libro.activo = true;
    

   
    this.libroservice.create(this.Libro).subscribe(
      Response => { 
        this.guardar=true
          this.Libro
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '<strong>Has registrado un Libro</strong>',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(this.libroservice);
          
        }
       
        
    ); reg.reset();

  }


}


