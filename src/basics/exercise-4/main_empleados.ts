import { EmpleadoPorHora } from './empleado_hora';
import { Empleado } from "./empleado";
import { EmpleadoTiempoCompleto } from "./empleado_tiempo_completo";
import { tipoEmpleado } from './tipo_empleado.enum';

const empleadoTiempoCompleto: Empleado = new EmpleadoTiempoCompleto('Guillermo Pérez', 
1503, 
200000
);
empleadoTiempoCompleto.mostrarInfo();
console.log(`Salario: ${empleadoTiempoCompleto.calcularSalario()}`);

//Cast
console.log('Cast 1', (empleadoTiempoCompleto as EmpleadoTiempoCompleto).salarioMensual);

console.log('Cast 2', (<EmpleadoTiempoCompleto>empleadoTiempoCompleto).salarioMensual);
///////////////////////////

if (empleadoTiempoCompleto instanceof EmpleadoTiempoCompleto){
    console.log(empleadoTiempoCompleto.salarioMensual);
}

console.log('===========================================================');

const empleadoPorHora: Empleado = new EmpleadoPorHora('Juan Pérez', 
456, 
tipoEmpleado.POR_HORA, 
20000, 
5
); 
empleadoPorHora.mostrarInfo();
console.log(`Salario ${empleadoPorHora.calcularSalario()}`);
console.log('')