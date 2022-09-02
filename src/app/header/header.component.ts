import { InvokeFunctionExpr } from "@angular/compiler";
import { Component } from "@angular/core";
import { PaginaInicioComponent } from "../pagina-inicio/pagina-inicio.component";

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent{
    //inicio: string = new PaginaInicioComponent();
    //const invoiceObject: pagina =new PaginaInicioComponent()

    title:string = "HOME";
    opcion1:string = "Clientes"
    opcion2:string = "Proveedores"
    opcion3:string = "Registro Usuario"

    setHabilitar(): void{
    
    }
}

