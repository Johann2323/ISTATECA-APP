import { bibliotecarios } from "../registro-bibliotecario/bibliotecarios";
import { TiposLibros } from '../listas/tipos-libros';

export class PaginaInicio {
    id_libro?: number;
    codigo_dewey?: string;
    titulo?: string;
    tipo?:TiposLibros;
    adquisicion?: string;
    anio_publicacion?: number;
    editor?: string;
    ciudad?: string;
    num_paginas?: number;
    area?: string;
    cod_ISBN?: string;
    idioma?: string;
    descripcion?: string;
    indice_uno?: string;
    indice_dos?: string;
    indice_tres?: string;
    dimensiones?: string;
    estado_libro?: string;
    activo?:boolean;
    imagen?: string;
    url_digital?: string;
    bibliotecario?: bibliotecarios;
    fecha_creacion?: Date;
    disponibilidad?: boolean;
    nombre_donante?: string;
    documento_donacion?: ArrayBuffer;
}
