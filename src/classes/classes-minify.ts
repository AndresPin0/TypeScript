import axios from 'axios';

export class Student{
    constructor(
        public readonly id:number, 
        public readonly name:string, 
        public readonly age:number){

    }

    async getAllCountries(){
        const {data} = await axios.get('https://restcountries.com/v3.1/all')
        return data;
    }

}

export const andres = new Student(1, 'Andrés', 20);

console.log(andres.name)

console.log(await andres.getAllCountries())

