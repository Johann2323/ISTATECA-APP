import { Component, OnInit, OnChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RegistroLibroService } from '../services/registro-libro.service';
import { Libro } from '../models/Libro';
import { Bibliotecario} from '../models/Bibliotecario_Cargo';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl, NgModel } from '@angular/forms';
import { ListasService } from '../services/listas.service';
import { Tipo } from '../models/Tipo';
import { Autor } from '../models/Autor';
import { RegistroBibliotecarioService } from '../services/registro-bibliotecario.service';
import { Persona } from '../models/Persona';
import Swal from 'sweetalert2';
import { registerLocaleData } from '@angular/common';
import { Observable } from 'rxjs';
import { ActaDonacionService } from '../services/acta-donacion.service';






@Component({
  selector: 'app-registro-libro',
  templateUrl: './registro-libro.component.html',
  styleUrls: ['./registro-libro.component.css']
})
export class RegistroLibroComponent implements OnInit {
  bibliotecarios: Bibliotecario = {};
  tipo: Tipo = {};
  file: any;
  reporteV: String = "";
  reporteV2: String = "";
  bibliotecarioE: Bibliotecario = {};
  persona: Persona = {};
  Tipoe: Tipo[] = []
  guardar: boolean = true;
  form!: FormGroup;

  opcionSeleccionado: string = '0';
  verSeleccion: string = '';

  idb?: number;
  idT?: number;


  libros: Libro[] = [];
  lib: Libro = new Libro;
  bus: boolean = true;
  buscarval: boolean = false;

  public keyword = 'nombre';




  public previsualizacion?: string
  public PDF?: string
  public archivos: any = []
  constructor(
    private sanitizer: DomSanitizer,
    private libroservice: RegistroLibroService,
    private rutas: Router,
    private bibliotecarioservice: RegistroBibliotecarioService,
    private ListaT: ListasService,
    private ActaDonacionService: ActaDonacionService
  ) { //this.buildForm(); 
  }

  ngOnInit(): void {
    this.reporteV = localStorage.getItem('bibliotecario') + "";
    this.reporteV2 = localStorage.getItem('nombrebibliotecario') + "";
    console.log("Bibliotecario: " + this.reporteV + " Nombre:" + this.reporteV2);

    this.buscar(this.reporteV + '')
    this.ListaT.obtenerTipos().subscribe(
      TipoS => this.Tipoe = TipoS


    );

    this.obtenerAutor()


  }
  public dato!: Observable<any['']>;


  obtenerAutor(): void {
    this.dato = this.libroservice.obtenerAutores();
    console.log(this.dato + "Holii");


  }

  OnImprimir(tit: NgModel, publi: NgModel, pag: NgModel, des: NgModel, est: NgModel, edi: NgModel, area: NgModel) {
    const encabezado = ["Titulo", "N° Pag", "Descripcion", "Editor", "Publcacion", "Tipo", "Estado"]

    console.log(tit.value);

    const cuerpo = [
      tit.value,
      pag.value,
      des.value,
      edi.value,
      publi.value,
      area.value,
      est.value
    ]



    this.ActaDonacionService.imprimir(encabezado, cuerpo, "Acta de Donacion", false)
  }


  //Validar URL

  // private buildForm() {
  //   const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  //   this.form = this.formBuilder.group({
  //     codigo_dewey: ['',  [Validators.required]],
  //     titulo: ['', [Validators.required]],
  //     cod_ISBN: ['', [Validators.required]],
  //     email: ['', [Validators.required, Validators.email]],
  //     anio_publicacion: ['', [Validators.required, Validators.maxLength(4)]],
  //     url_digital: ['', [Validators.required]],
  //     gender: ['', [Validators.required]],
  //   });

  //   this.form.valueChanges
  //   .subscribe(value => {
  //     console.log(value);

  //   });
  // }


  onKeydownEvent(event: KeyboardEvent, titulo: String): void {
    if (titulo == "") {
      this.ngOnInit();
    }
  }

  buscarLibxNomb(nombre: String) {
    this.libroservice.obtenerLibro(nombre).subscribe(
      data => {
        this.libros = data;
      }
    )
  }

  //Conseguir capturar tipo de Libro
  seleccionT(e: any) {
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






      

    })
    
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
  buscar(idss: string) {

    this.idb = Number.parseInt(idss)

    this.bibliotecarioservice.obtenerBibliotecarioId(this.idb).subscribe(
      bibliotecarioE => {
       /* this.bibliotecarioE = bibliotecarioE, this.persona.cedula = bibliotecarioE.persona?.cedula, this.persona.nombres = bibliotecarioE.persona?.nombres, this.persona.celular = bibliotecarioE.persona?.celular
        , this.persona.correo = bibliotecarioE.persona?.correo, this.persona.usuario = bibliotecarioE.persona?.usuario, this.persona.clave = bibliotecarioE.persona?.clave, this.persona.rol = bibliotecarioE.persona?.rol
*/
      }
    )
  }



  // Getter for easy access
  get s_url() {
    return this.form.get('s_url');
  }

  //Guardar Libro


  public Libro: Libro = new Libro();

  disponible?: boolean = this.Libro.lib_disponibilidad;

  public crearLibro(reg: NgForm): void {

    console.log("Se ha realizado un click")
    /*this.Libro.tipo = this.tipo
    this.Libro.bibliotecario = this.bibliotecarios
    this.Libro.bibliotecario = this.bibliotecarioE

    console.log(this.Libro.bibliotecario)

    this.bibliotecarioE.id_bibliotecario = this.Libro.bibliotecario.id_bibliotecario
    this.Libro.tipo.id_tipo = this.idT
    //this.Libro.imagen= this.previsualizacion
    this.Libro.activo = true;



    this.libroservice.create(this.Libro).subscribe(
      Response => {

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
*/
  }


}


