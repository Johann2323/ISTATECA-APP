export class PaginaInicio {
    id_libro?:number;
    activo?:boolean;
    adquisicion?:string;
    anio_publicacion?: number=0;
    area?: string="";
    ciudad?:string;
    cod_isbn?: string="";
    codigo_dewey?:string;
    descripcion?: string="";
    dimensiones?:string;
    disponibilidad?: boolean=true;
    documento_donacion?:[];
    editor?:string;
    estado_libro?:string;
    fecha_creacion?: Date;
    idioma?: string;
    imagen?: [];
    indice_dos?: string;
    indice_tres?:string;
    indice_uno?:string;
    nombre_donante?:string;
    num_paginas?: string;
    titulo?: string="";
    url_digital?:string;
    id_bibliotecario?:number;
    id_tipo ?:number;
}
