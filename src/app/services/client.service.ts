import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../_models/client.model';
import { Global } from './global';
/**
 * se marca para que el compilador genere los metadatos de las dependencias
 */
@Injectable()
export class ClientService {
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
        this.url = Global.url;
    }

    
    /**
     * Guarda los datos del cliente al crear 
     * @param client usuario del sistema
     */
    saveClient(client: Client): Observable<any> {
        return this._http.post(this.url + 'client', client);
    }

    /**
     * Obtiene la lista de clientes
     */
    getClients(): Observable<any> {
        return this._http.get(this.url + 'clients');
    }
    
    /**
     * Obtiene un cliente por su id
     * @param id identificador unico de un cliente
     */
    getClient(id: string): Observable<any> {
        return this._http.get(this.url + 'client/' + id);
    }

    /**
     * Borra un cliente especifico
     * @param id identificador unico de un cliente
     */
    deleteClient(id: string): Observable<any> {
        return this._http.delete(this.url + 'client/' + id);
    }

    /**
     * Actualiza cambios en los datos de un cliente
     * @param client usuario del sistema
     */
    updateClient(client: Client): Observable<any> {
        let params = JSON.stringify(client);
        return this._http.put(this.url + 'client/' + client._id, params);
    }

}
