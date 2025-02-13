import './style.css'
import { name } from './types-basic/types-basic'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello ${name}!</h1>
`

