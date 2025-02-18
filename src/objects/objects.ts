export const studentsID:number[] = [1, 2, 3, 4, 5]; //typeScript siempre infiere el tipo de dato

studentsID.push(+"12"); //Error: Argument of type '"Jhon Doe"' is not assignable to parameter of type 'number'.

// TypeScript no permite asignar un string a un array de números.
// Una interfaz es un contrato que define las propiedades y métodos que un objeto debe implementar.

// Un atributo abstracto es uno que no tiene un valor asignado, pero que debe ser implementado por las clases que lo heredan.

interface Student{
    id:number;
    name:string;
    age:number;
  }
  
  export const andres:Student = {
    id: 1,
    name: 'Pino',
    age: 20
  }
  
  //Principio de segregación de interfaz: Una clase no debería depender de métodos que no usa.

  export const students:Student[] = [];


  students.push(andres);