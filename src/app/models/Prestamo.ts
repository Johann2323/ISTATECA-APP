import { Libro } from "./Libro";
import { Carrera } from "./Carrera";
import { Persona } from "./Persona";

export class Prestamo {
    id?: number;
    activo?: boolean;
    documento_habilitante?: string;
    escaneo_matriz?:string;
    estado_libro?: string;
    estado_prestamo?: number;
    fecha_entrega?: Date;
    fecha_maxima?: Date;
    fecha_devolucion?: Date;
    tipo_prestamo?:number;
    carrera?: Carrera;
    idEntrega?:Persona;
    idSolicitante?:Persona;
    libro?: Libro;
}
