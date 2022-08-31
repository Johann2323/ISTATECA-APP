import { Component, OnInit } from '@angular/core';
import { Proveedor } from './proveedor';
import { ProveedorService } from './proveedor.service';
@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html'
})
export class ProveedorComponent implements OnInit {
  proveedor:Proveedor[]=[];
  constructor(
    private proveedorService: ProveedorService
    ) {}

  ngOnInit(): void {
    this.proveedor=this.proveedorService.obtenerProveedor();
  }

}
