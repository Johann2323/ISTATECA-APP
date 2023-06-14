import { Libro } from "./Libro";
import { Carrera } from "./Carrera";
import { Persona } from "./Persona";

export class Prestamo {
    pre_id?: number;
    pre_activo?: boolean;
    pre_documento_habilitante?: string;
    pre_escaneo_matriz?:string;
    pre_estado_libro?: string;
    pre_estado_prestamo?: string;
    pre_fecha_entrega?: Date;
    pre_fecha_maxima?: Date;
    pre_fecha_devolucion?: Date;
    pre_tipo_prestamo?:number;
    car_id?: Carrera;
    per_id_entrega?:Persona;
    per_id_solicitante?:Persona;
    lib_id?: Libro;
}
