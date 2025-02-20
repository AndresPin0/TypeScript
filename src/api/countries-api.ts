import axios from 'axios';
import { CountriesResponse } from '../interfaces/countries-response.interface';}

export class CountriesApi{
    public const URL:string = '';

    constructor(){
    }

    async getAllCountries(){
        const {data} = await axios.get<CountriesResponse[]>('https://restcountries.com/v3.1/all')
        return data[0].capital;
    }


}