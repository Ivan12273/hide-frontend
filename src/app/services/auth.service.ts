import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../_models/login.model';
import { Global } from './global';

/**
 * se marca para que el compilador genere los metadatos de las dependencias
 */
@Injectable({
    providedIn: 'root'
})
/**
 * Clase
 */
export class AuthService {
    /**
     * url
     */
    public url: string;
    /**
     * inicializacion de variable
     */
    redirectUrl = ''

    /**
     * Constructor
     * @param _http protocolo de comunicación
     */
    constructor(
        private _http: HttpClient,
    ) {
        this.url = Global.url;
    }

    /**
     * inicio de sesión
     * @param login 
     */
    login(login: Login): Observable<any> {
        return this._http.post(`${this.url}login`, login);
    }

    /**
     * autenticación de usuario
     */
    auth_user(): Observable<any> {
        return this._http.get(`${this.url}auth-user`)
    }

    /**
     * Servicio de reestablecimiento en caso de perder sus credenciales
     * @param email Requerido para identificar al usuario
     */
    password_reset(email: string) {
        return this._http.post(`${this.url}reset-password`, { email: email })
    }

    /**
     * Actualiza la contraseña
     * @param new_password 
     * @param user_id 
     * @param token 
     */   
    update_password(new_password: string, user_id: string, token: string) {
        let pass_update = { password: new_password, userId: user_id, token: token }
        return this._http.post(`${this.url}update-password`, pass_update)
    }

    /**
     * elimina el token al usuario para que pierda el acceso
     */
    logout() {
        localStorage.removeItem("token");
    }

    /**
     * verifica si el token ha caducado
     * @param token variable de autenticación
     */
    isTokenExpired(token: string) {
        const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;

        let e = new Date(0)
        
        let seccs = e.setUTCSeconds(expiry)
        
        let rainau = Math.floor((new Date).getTime());

        return (rainau) >= seccs;
    }

    /**
     * Ha iniciado sesión?
     */
    isLoggedIn() {
        let token = localStorage.getItem("token");


        if (token)
            return !this.isTokenExpired(token);


        return false;
    }

    /**
     * Obtiene el token 
     */
    getAuthorizationToken() {
        let token = localStorage.getItem("token");
        return (token) ? token : '';
    }

}
