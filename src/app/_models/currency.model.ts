import { Rates } from './rates.model';

export class Currency {
    public rates: Rates;
    public base: string;
    public data: string;

    constructor(rates: Rates, base: string, data: string){
        this.rates = rates;
        this.base = base;
        this.data = data;
    }
}