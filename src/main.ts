//import { studentsID } from './objects/objects';
import './style.css'
//import { age, id, name, isValid } from './types-basic/types-basic';
//import { andres } from './classes/classes';
import { andres } from './classes/classes-minify';

//types-basic.ts
//document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//  <h1>Hello I'm ${name}, I'm ${age} years old, and my id is ${id}!</h1> 
//`
// String multilinea con template literals (backticks)s


//objects.ts
//document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//  <h1>Hello! ${studentsID.join('*')}</h1> 
//`;


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Háblame ${andres.name} tenés ${andres.age} y tu ID es ${andres.id}</h1> `;

// Qué son los getter y setter? Son métodos especiales que se utilizan para acceder y modificar los atributos de una clase.


// cuantos parametros se pueden invocar en un método con una buena practica? 3 parametros, si se necesita más de 3 parametros, 
// se debe crear un objeto que contenga los parametros.


//  Qué son métodos asincronos? Son métodos que se ejecutan de manera asincrona, es decir, que no se ejecutan en el orden en que se escriben.

// cuantos hilos de procesador usa javascript? 1 hilo de procesador.

// Qué es una promesa? Es un objeto que representa la terminación o el fracaso de una operación asincrona.

// Qué es una función callback? Es una función que se pasa como argumento a otra función.

// Qué es una función anonima? Es una función que no tiene nombre.

// Qué es una función flecha? Es una forma más corta de escribir una función.