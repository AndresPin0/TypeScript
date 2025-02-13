import './style.css'
import { age, id, name } from './types-basic/types-basic'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello I'm ${name}, I'm ${age} years old, and my id is ${id}!</h1> 
`
// String multilinea con template literals (backticks)s

