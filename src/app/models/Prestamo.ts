import { Libro } from "./Libro";
import { Usuario } from "./Usuario";


export class Prestamo {
    id_prestamo?: number;
    activo?: boolean;
    documento_habilitante?: string;
    escaneo_matriz?:string;
    estado_libro?: string;
    estado_prestamo?: string;
    fecha_entrega?: Date;
    fecha_maxima?: Date;
    fecha_recibido?: Date;
    id_bibliotecario_entrega?: number;
    id_bibliotecario_recibido?: number;
    libro?: Libro;
    usuario?: Usuario;
}
