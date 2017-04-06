export interface Animal {
    id:number;
    tipo:Tipo;
    raza:string;
    nombre:string;
    edad:number;
    sexo:Sexo;
    chip:boolean;
    chipNo:number;
    fechaEntrada: Date;
    fechaSalida:Date;
}

export enum Sexo {
    M,
    F
}

export enum Tipo {
    Perro,
    Caballo,
    Gato,
    Reptil,
    Otros
}

export class DatosUsuario {
  user?: string;
  token?: string;
  isLogged?: boolean;
}