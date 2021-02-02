import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../_models/product.model';
import { Global } from './global';
import { Order } from '../_models/order.model';

/**
 * se marca para que el compilador genere los metadatos de las dependencias
 */
@Injectable()
/**
 * Clase
 */
export class OrderService {
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
     * Guarda los datos de una orden al crearse
     * @param order articulo del inventario
     */
  saveOrder(order: Order): Observable<any> {
    const params = JSON.stringify(order);
    return this._http.post(this.url + 'order', params);
  }

  /**
     * Obtiene la lista de ordenes
     */
  getOrders(): Observable<any> {
    return this._http.get(this.url + 'orders');
  }

  /**
     * Obtiene una orden por su id
     * @param id identificador unico de una orden
     */
  getOrder(id: string): Observable<any> {
    return this._http.get(this.url + 'order/' + id);
  }

  /**
     * Borra una orden  especifica
     * @param id identificador unico de una orden
     */
  deleteOrder(id: string): Observable<any> {
    return this._http.delete(this.url + 'order/' + id);
  }

  /**
     * Actualiza cambios en los datos de un usuario
     * @param order usuario del sistema
     */
  updateOrder(order: Order): Observable<any> {
    const params = JSON.stringify(order);
    return this._http.put(this.url + 'order/' + order._id, params);
  }

  /**
   * Obtiene el historial
   */
  getOrderHistory(): Observable<any> {
    return this._http.get(this.url + 'order-history');
  }

}
