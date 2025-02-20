import { CountriesApi } from '../api/countries-api';




export class Student{
    constructor(
        public readonly id:number, 
        public readonly name:string, 
        public readonly age:number,
        private http: CountriesApi){

    }

    async getCountries(){
        const c

    }

}

export const andres = new Student(1, 'Andrés', 20);

console.log(andres.name)


