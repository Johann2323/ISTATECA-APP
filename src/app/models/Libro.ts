
import { Persona } from "./Persona";
import { Tipo } from "./Tipo";

export class Libro{
    lib_id?: number;
    lib_codigo_dewey?: string;
    lip_titulo?: string;
    tip_id?:Tipo;
    lib_adquisicion?: string;
    lib_anio_publicacion?: number;
    lib_editor?: string;
    lib_ciudad?: string;
    lib_num_paginas?: number;
    lib_area?: string;
    lib_cod_isbn?: string;
    lib_idioma?: string;
    lib_descripcion?: string;
    lib_indice_uno?: string;
    lib_indice_dos?: string;
    lib_indice_tres?: string;
    lib_dimenciones?: string;
    lib_estado_libro?: string;
    lib_activo?:boolean;
    lib_url_imagen?: string;
    lib_url_digital?: string;
    per_id_ingreso?: Persona;
    lib_fecha_creacion?: Date;
    lib_disponibilidad?: boolean;
    lib_nombre_donante?: string;
    lib_url_acta_donante?: ArrayBuffer;

}
