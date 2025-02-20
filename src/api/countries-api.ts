import axios from "axios";
import { CountriesResponse } from "../interfaces/countries-response.interface";

export interface HttpAdapter {
    getAllCountries: () => {};
}

export class CountriesApiAxios implements HttpAdapter{

    public URL:string= "https://restcountries.com/v3.1/all";

    async getAllCountries(){
        const { data } = await axios.get<CountriesResponse[]>(this.URL);
        return data[0].capital;
    }
}

export class CountriesApiFetch implements HttpAdapter{

    public URL:string= "https://restcountries.com/v3.1/all";

    async getAllCountries(){
        const resp = await fetch('https://restcountries.com/v3.1/all');
        const data = resp.json();
        return data;
    }
}

//Que es express? 

// Express es un framework de Node.js que nos permite crear aplicaciones web de manera sencilla y rápida.
// Express nos proporciona una serie
// de herramientas y métodos que nos facilitan la creación de servidores y aplicaciones web.