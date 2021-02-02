import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from './global';
/**
 * se marca para que el compilador genere los metadatos de las dependencias
 */
@Injectable()
/**
 * Clase
 */
export class CurrencyService {
    /**
     * url
     */
    public url: string;

    /**
     * Constructor
     * @param _http protocolo de comunicación
     */
    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.urlCurrency;
    }

    /**
     * obtiene la conversión a pesos mexicanos
     */
    getMXNRates(): Observable<any> {
        return this._http.get(this.url + 'MXN');
    }

}
