import { IPersona } from "./interface_IPersona";

class Hombre implements IPersona{

    constructor(public nombre?: string, public apellido?: string, public edad: number){}

    nombreCompleto(): string {
        const mensaje = `Tu nombre completo es ${this.nombre} y tu apellido es ${this.apellido} y eres hombre`;
        console.log(mensaje)
        return mensaje
    }



}

class Mujer implements IPersona{

    constructor(public nombre: string, public apellido: string, public edad: number){}

    nombreCompleto(): string {
        const mensaje = `Tu nombre completo es ${this.nombre} y tu apellido es ${this.apellido} y eres mujer`;
        console.log(mensaje)
        return mensaje
    }

}