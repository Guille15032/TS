import { Empleado } from "./empleado";

export class EmpleadoPorHora extends Empleado {
    constructor(nombre: string, id: number, public tipoEmpleado: string, public tarifaPorHor: number, public horasTrabajadas: number){ //Las que tienen public estan siendo marcadas como propiedades de la clase
        super(nombre, id);
    }
    public calcularSalario(): number {
        return this.tarifaPorHor * this.horasTrabajadas;
    }   
}
