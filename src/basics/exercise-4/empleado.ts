/**
Una clase abstracta en TypeScript es una clase que de la que no se puede crear instancias y que puede contener propiedades o metodos
abstractos que deben ser implementados en la subclase. Tambien puede tener metodos, que tengan ya una implementacion en la subclase (Interface) y los cuales
seran heredados por la subclase (Herencia). Tambien se puede sobreescribir los metodos y se pueden marcar con la palabra reservada 'override'. Permite el uso
de modificadores de acceso.
 */


export abstract class Empleado{

    abstract tipoEmpleado: string;

    constructor(public nombre: string, public id: number){
    }

    public mostrarInfo(): void {
        console.log(`Nombre del empleado: ${this.nombre}`);
        console.log(`ID del empleado: ${this.id}`);
        console.log(`Tipo de contrato: ${this.tipoEmpleado}`);
    }

    //Firma de un metodo. Quien use la clase base debe implementar
    public abstract calcularSalario(): number;
}
