

import { Binary } from "@angular/compiler";
import { bibliotecarios } from "../registro-bibliotecario/bibliotecarios";
import { tipo } from "./tipo";

export class libro{
    idLibro?: number;
    codigo_dewey?: string;
    titulo?: string;
    tipo?:tipo;
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
    imagen?: [];
    url_digital?: string;
    bibliotecario?: bibliotecarios;
    fecha_creacion?: Date;
    disponibilidad?: boolean;
    nombre_donante?: string;
    documento_donacion?: ArrayBuffer;

}
