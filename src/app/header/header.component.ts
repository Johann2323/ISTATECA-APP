import { InvokeFunctionExpr } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { PaginaInicioComponent } from "../pagina-inicio/pagina-inicio.component";
import { InicioSesionComponent } from "../inicio-sesion/inicio-sesion.component";
import { Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent implements OnInit{
    reporteV:String="";
    mostrar:boolean=false;
    constructor(private router1:Router){}
    ngOnInit(): void {
        this.reporteV = JSON.parse(localStorage.getItem("idProducto")+"");
        if(parseInt(this.reporteV+"")==9){
            this.mostrar=false;
            console.log(InicioSesionComponent.rol+"Holaaaaaaaaa2")
        }else if(parseInt(this.reporteV+"")==2){
            this.mostrar=true;
            console.log("Llego");
        }
    }
    cerrarSesion(){
        this.router1.navigate(['']);
        InicioSesionComponent.rol=9;
    }
}

