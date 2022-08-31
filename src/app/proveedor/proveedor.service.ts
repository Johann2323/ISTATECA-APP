import { Injectable } from '@angular/core';
import { Proveedor } from './proveedor';
import{PROVEEDOR} from './proveedor.json';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor() { }
  obtenerProveedor():Proveedor[]{
    return PROVEEDOR;
  }
}
