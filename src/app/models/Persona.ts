import { PersonaP } from "./PersonaP";
export class Persona {
    id?: number;
    activo?: boolean;
    cedula?: string;
    celular?: string;
    correo?: string;
    nombres?: string;
    apellidos?:string;
    calificacion?:string;
    tipo?:number;
    password?: string;
    fenixId?: PersonaP;
}