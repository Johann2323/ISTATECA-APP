import { Component, OnInit, DoCheck, Input } from "@angular/core";
import { PaginaInicioComponent } from "../pagina-inicio/pagina-inicio.component";
import { InicioSesionComponent } from "../inicio-sesion/inicio-sesion.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements DoCheck {
    reporteV: String = "";
    mostrar: boolean = false;
    mostrarr: boolean = false;
    mostrar1: boolean = false;
    mostrar2: boolean = false;
    mostrar3: boolean = false;
    constructor(private router1: Router) { }
    ngDoCheck(): void {
        InicioSesionComponent.rol;
        console.log("Cambio en rol a:" + InicioSesionComponent.rol)
        if (InicioSesionComponent.rol == 0) {
            this.mostrar = true;
            this.mostrarr = true;
            this.mostrar2 = true;
        } else if (InicioSesionComponent.rol == 9) {
            this.mostrar = false
        } else if (InicioSesionComponent.rol == 2) {
            this.mostrar = true;
            this.mostrar2 = false;
            this.mostrarr = false;
        } else if (InicioSesionComponent.rol == 1) {
            this.mostrar = true;
            this.mostrar2 = true;
            this.mostrarr = false;
        }
    }

    ngOnInit(): void {
        console.log("Rol inicia en header con:" + InicioSesionComponent.rol)
        if (InicioSesionComponent.rol == 9) {
            this.mostrar = false
        }
    }

    cerrarSesion() {
        this.router1.navigate(['']);
        InicioSesionComponent.rol = 9;
        this.ngOnInit;
        console.log("Cerrar Sesion")
    }


}



