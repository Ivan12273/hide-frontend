import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user.model';
import { Global } from './global';
/**
 * se marca para que el compilador genere los metadatos de las dependencias
 */
@Injectable()
export class UserService {
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
     * Guarda los datos del usuario al crear 
     * @param user usuario del sistema
     */
    saveUser(user: User): Observable<any> {
        let params = JSON.stringify(user);
        return this._http.post(this.url + 'user', params);
    }

    /**
     * Obtiene la lista de usuarios
     */
    getUsers(): Observable<any> {       
        return this._http.get(this.url + 'users')
    }

    /**
     * Obtiene un usuario por su id
     * @param id identificador unico de un usuario
     */
    getUser(id: string): Observable<any> {
        return this._http.get(this.url + 'user/' + id);
    }

    /**
     * Borra un usuario especifico
     * @param id identificador unico de un usuario
     */
    deleteUser(id: string): Observable<any> {
        return this._http.delete(this.url + 'user/' + id);
    }

    /**
     * Actualiza cambios en los datos de un usuario
     * @param user usuario del sistema
     */
    updateUser(user: User): Observable<any> {
        let params = JSON.stringify(user);
        return this._http.put(this.url + 'user/' + user._id, params);
    }

}