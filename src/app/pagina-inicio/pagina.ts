export class PaginaInicio {
    id_libro?:number;
    codigo_dewey?:string;
    titulo?: string="";
    id_tipo ?:number;
    adquisicion?:string;
    anio_publicacion?: number=0;
    editor?:string;
    ciudad?:string;
    num_paginas?: string;
    area?: string="";
    cod_isbn?: string="";
    idioma?: string;
    descripcion?: string="";
    dimensiones?:string;
    estado_libro?:string;
    activo?:boolean;
    imagen?: [];
    url_digital?:string;
    id_bibliotecario?:number;
    fecha_creacion?: Date;
    disponibilidad?: boolean=true;
    indice_uno?:string;
    indice_dos?: string;
    indice_tres?:string;
    nombre_donante?:string; 
    documento_donacion?:[];    
}
