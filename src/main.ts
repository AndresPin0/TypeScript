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