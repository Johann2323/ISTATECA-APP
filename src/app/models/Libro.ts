
import { Bibliotecario } from "./Bibliotecario";
import { Tipo } from "./Tipo";

export class Libro{
    idLibro?: number;
    codigo_dewey?: string;
    titulo?: string;
    tipo?:Tipo;
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
    bibliotecario?: Bibliotecario;
    fecha_creacion?: Date;
    disponibilidad?: boolean;
    nombre_donante?: string;
    documento_donacion?: ArrayBuffer;

}
