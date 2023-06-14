import { Component, OnInit, DoCheck } from '@angular/core';
import { PaginaInicioService } from 'src/app/services/pagina-inicio.service';
import { Router, RouterLink } from '@angular/router';
import { RegistroLibroComponent } from 'src/app/registro-libro/registro-libro.component';
import { Libro } from 'src/app/models/Libro';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import Swal from 'sweetalert2';
import { NgModel } from '@angular/forms';
import { Prestamo } from 'src/app/models/Prestamo';
import { prestamoService } from 'src/app/services/prestamo.service';
import { NotificacionesService } from 'src/app/services/notificaciones.service';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  reporteV: string = "";
  public PaginaI: Libro = new Libro();
  public usuarioe: Usuario = new Usuario();
  public prestamos: Prestamo = new Prestamo();
  paginas: Libro[] = [];
  public paginacrear: Libro = new Libro();
  mostrar: boolean = false;
  libros: Libro[] = [];
  libs: Libro[] = [];
  bus: boolean = true;
  buscarval: boolean = false;

  


  constructor(private prestamoService: prestamoService, private paginainicioService: PaginaInicioService, private router: Router, private router1: Router,private notificacionesService: NotificacionesService) { }

  downloadPDF() {
    // Extraemos el
    const DATA: any = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('https://firebasestorage.googleapis.com/v0/b/istateca.appspot.com/o/logos%2Flogo%20normal.png?alt=media&token=5c5a4b10-135a-4467-a1cf-3347bbe58df5');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_inventario.pdf`);
    });
  }

  ngDoCheck(): void {
    this.reporteV = JSON.parse(localStorage.getItem('rol') + "");
    console.log("Rol del Usuario: " + this.reporteV + "")
    if (parseInt(this.reporteV) == 0 || parseInt(this.reporteV) == 1) {
      
      this.mostrar = true;
    }
    
  }
  ngOnInit(): void {
    this.paginainicioService.getLibros().subscribe(
      pagina => this.paginas = pagina
      //libro => this.libros=libro
    );
    this.buscarval = false;
    this.bus = true;
    
    

    
  }
  


  onKeydownEvent(event: KeyboardEvent, titulo: String): void {
    if (titulo == "") {
      this.ngOnInit();
    }
  }

  // seleccionarElemento(lib: any) {
  //   // Haz algo con el elemento seleccionado, por ejemplo, muestra sus detalles o abre un formulario para editarlo.
  //   console.log('Elemento seleccionado:', lib);
  //   alert('Elemento seleccionado: '+lib.titulo)
  // }

  buscarLibxNomb(nombre: String) {
    this.bus = false;
    this.paginainicioService.buscarLibro(nombre).subscribe(
      pagina => {
        this.libs = pagina
        console.log(this.libs.length);
        this.buscarval = true;
      }
    )
  }
  SolicitarLibro(paginacrear:any) {
    
    if (parseInt(this.reporteV) == 9) {
      console.log('no ha entrado');
      Swal.fire({
        confirmButtonColor: '#012844',
        icon: 'warning',
        title: 'Ups...',
        text: '¡Parece que no has iniciado sesion!',
        footer: '<a href="/app-registro-usuario">¡Si no tienes cuenta registrate aqui!</a>'

      })
      this.router.navigate(['/']);
    } else {
      alert(paginacrear.titulo)
      var overlay = document.getElementById('overlay');
      overlay?.classList.add('active');
      this.createbibliotecario(paginacrear);
      


      

    }
  }
  cerrarpopup() {
    var overlay = document.getElementById('overlay');
    overlay?.classList.remove('active');
  }
 
  

  public createbibliotecario(paginacrear: any) {
    this.reporteV = localStorage.getItem('usuariopag') + "";
      console.log("Usuario: " + this.reporteV + "");

      let usuarioJSON = localStorage.getItem('usuariopag')+"";
      let persona = JSON.parse(usuarioJSON);
/*
    console.log("ha realizado un clic")
    this.prestamos.libro = paginacrear
    this.prestamos.usuario=persona

    console.log(this.prestamos.libro?.titulo)
    console.log(this.prestamos.usuario?.persona?.nombres)
    alert(this.prestamos.libro?.titulo)
    alert(this.prestamos.usuario?.persona?.nombres)

    this.prestamoService.create(this.prestamos).subscribe(
      response => { this.prestamos 
      Swal.fire({
        title: '<strong>Libro Solicitado!</strong>',
        confirmButtonText: 'OK',
        confirmButtonColor: '#012844',
        icon: 'success',
        html:
          '<b>'+this.prestamos.libro?.titulo+'</b><br>'+
          'Se ha solicitado con exito'
      })
      this.notificacionesService.actualizarConteo(1)
      
    }
    );*/
  }
}
