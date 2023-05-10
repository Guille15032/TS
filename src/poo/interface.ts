interface IPersona{

    //Propiedades de la interfaz
    //La palabra reservada 'readonly' se usa para declarar que la propiedad de la interfaz no se puede modificar despues de su inicializacion
    readonly nombre: string;
    readonly apellido: string;
    edad: number;

    //Metodos de la interfaz
    nombrecompleto(): string;
}


class hombre implements IPersona{
    nombre: string;
    apellido: string;
    edad: number;

    
}