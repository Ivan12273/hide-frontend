import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../_models/product.model';
import { Global } from './global';
/**
 * se marca para que el compilador genere los metadatos de las dependencias
 */
@Injectable()
/**
 * Clase
 */
export class ProductService {
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
     * Guarda los datos del producto al crearse
     * @param product articulo del inventario
     */
    saveProduct(product: Product): Observable<any> {
        let params = JSON.stringify(product);
        return this._http.post(this.url + 'product', params);
    }

    /**
     * Obtiene la lista de productos
     */
    getProducts(): Observable<any> {
        return this._http.get(this.url + 'products');
    }

    /**
     * Obtiene un producto por su id
     * @param id identificador unico de un producto
     */
    getProduct(id: string): Observable<any> {
        return this._http.get(this.url + 'product/' + id);
    }


    /**
     * Borra un producto especifico
     * @param id identificador unico de un producto
     */
    deleteProduct(id: string): Observable<any> {
        return this._http.delete(this.url + 'product/' + id);
    }

    /**
     * Actualiza cambios en los datos de un usuario
     * @param product usuario del sistema
     */
    updateProduct(product: Product): Observable<any> {
        let params = JSON.stringify(product);
        return this._http.put(this.url + 'product/' + product._id, params);
    }

}