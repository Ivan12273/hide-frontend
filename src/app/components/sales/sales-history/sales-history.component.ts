import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/services/global';
import { OrderService } from 'src/app/services/order.service';
/**
 * Componente de historial de ventas
 */
@Component({
  selector: 'app-sales-history',
  templateUrl: './sales-history.component.html',
  styleUrls: ['./sales-history.component.css'],
  providers: [OrderService],
})
export class SalesHistoryComponent implements OnInit {
  private url: string = Global.url;

  /**
   * Constructor
   * @param _orderService identificador orden de servicio 
   */
  constructor(
    private _orderService: OrderService
  ) { }

  /**
   * Inicializa el componente
   */
  ngOnInit(): void {
  }

  /**
   * Obtiene el historial de ventas
   * @param format 
   */
  getHistory(format: string) {
    if(format === 'csv'){
      window.open(`${this.url}order-history`, '_blank');
    }else {
      window.open(`${this.url}order-history-pdf`, 'blank');
    }
  }

}
