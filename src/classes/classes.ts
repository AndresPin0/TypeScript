import { age } from '../types-basic/types-basic';
// Qué es una clase en una programación orientada a objetos? Una clase es una plantilla para crear objetos, proporciona inicialización de estado (atributos) 
// y comportamiento (métodos). En TypeScript, las clases se definen con la palabra clave class seguida del nombre de la clase. Las clases pueden tener atributos y métodos. 
// Los atributos son variables que almacenan datos y los métodos son funciones que realizan acciones. 

export class Student{
    id:number; //No está inicializado, la mejor practica es inicializarlo en el constructor de la clase, porque es un atributo obligatorio.
    name:string; //Lo recomendado es NUNCA inicializar las variables.
    //age:number; //SIEMPRE se debe inicializar en el constructor.

    get getAge():number{ //Esto reemplaza el atributo age, es un getter, es decir, reemplaza la asignación de la variable.
        return this.getAge;
    }


    set setAge(newAge:number){ //Esto reemplaza el atributo age, es un setter, es decir, reemplaza la asignación de la variable.
        this.SetAge = setAge;
    }

    constructor(id:number, name:string, age:number){
        this.id = id; //La palabra this hace referencia a la instancia de la clase, es decir, al objeto que se está creando.
        this.name = name; //Una instancia es un objeto que se crea a partir de una clase.
        //this.age = age; //El constructor es un método especial que se llama cuando se crea una instancia de la clase, se llama con la palabra clave new.
    }

    //Para restringir el acceso a los atributos de una clase, se pueden declarar como private, protected o public.
    //private: solo se puede acceder desde la misma clase.
    //protected: solo se puede acceder desde la misma clase y las clases que heredan de ella.
    //public: se puede acceder desde cualquier parte del código.
    
    //Cuando creo una instancia de una clase, estoy creando un objeto que tiene los atributos y métodos de la clase.

}

export const andres = new Student(1, 'Andrés Doe', 20); //El error se produce porque la clase Student no está exportada.
console.log(andres); //Student { id: 1, name: 'Andrés Doe', age: 20 }

//andres.age=40 //Error: Maximum call stack size exceeded, esto se produce porque el getter y el setter están mal implementados, se produce un bucle infinito.

andres.setAge = 40; //Error: Property 'SetAge' does not exist on type 'Student'. //Esto se produce porque el setter está mal implementado.

//Para solucionar el error anterior, se debe cambiar el nombre de la variable age en el getter y el setter.





