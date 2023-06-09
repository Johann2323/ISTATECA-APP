import { Injectable } from '@angular/core';
import { Proveedor } from '../models/Proveedor';
import{PROVEEDOR} from '../proveedor/proveedor.json';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor() { }
  obtenerProveedor():Proveedor[]{
    return PROVEEDOR;
  }
}
