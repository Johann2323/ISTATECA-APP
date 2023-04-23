import { libro } from "../registro-libro/libro";
import { usuario } from "../registro-usuario/usuario";


export class prestamo {
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
    libro?: libro;
    usuario?: usuario;
}
