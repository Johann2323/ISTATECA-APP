
import { bibliotecario } from "../registro-bibliotecario/bibliotecario";
export class libro{
    id: number=0;
    codigoDewey: string= '';
    titulo: string= '';
    tipo: number=0;
    adquisicion: string= '';
    anioPublicacion: number=0;
    editor: string= '';
    ciudad: string= '';
    numPaginas: number=0;
    area: string= '';
    codIsbn: string= '';
    idioma: string= '';
    descripcion: string= '';
    indiceUno: string= '';
    indiceDos: string= '';
    indiceTres: string= '';
    dimensiones: string= '';
    estadolibro: string= '';
    activo:boolean=true;
    imagen?: ByteLengthQueuingStrategy;
    urlDigital: string= '';
    bibliotecario?: bibliotecario;
    fechaCreacion?: Date;
    disponibilidad: boolean=true;
    nombreDonante: string= '';
    documentoDonacion?: ByteLengthQueuingStrategy;

}
