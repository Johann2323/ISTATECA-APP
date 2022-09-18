import { InvokeFunctionExpr } from "@angular/compiler";
import { Component } from "@angular/core";
import { PaginaInicioComponent } from "../pagina-inicio/pagina-inicio.component";
import { InicioSesionComponent } from "../inicio-sesion/inicio-sesion.component";
import { Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent{
    
    mostrar:boolean=false;
    constructor(private router1:Router){}
    ngOnInit(): void {
        console.log(InicioSesionComponent.rol+"Holaaaaaaaaa")
        if(InicioSesionComponent.rol==9){
            this.mostrar=false;
            
        }else if(InicioSesionComponent.rol==0 || InicioSesionComponent.rol==1 || InicioSesionComponent.rol==2){
            this.mostrar=true;
            console.log("Llego");
        }
    }
    cerrarSesion(){
        this.router1.navigate(['']);
        InicioSesionComponent.rol=9;
    }
}

