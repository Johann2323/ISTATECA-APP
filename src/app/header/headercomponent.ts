import { Component } from "@angular/core";


@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent{
    title:string = "HOME";
    opcion1:string = "Clientes"
    opcion2:string = "Proveedores"
}