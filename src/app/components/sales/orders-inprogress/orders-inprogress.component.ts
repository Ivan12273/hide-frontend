import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/_models/order.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-orders-inprogress',
  templateUrl: './orders-inprogress.component.html',
  styleUrls: ['./orders-inprogress.component.css'],
  providers: [OrderService]
})
export class OrdersInprogressComponent implements OnInit {
  public orders: Order[] = [];
  public sortedData: Order[] = [];
  url = '';

  /*-----------Propiedades de tabla--------------*/
  displayedColumns: string[] = ['date', 'status'];
  totalData = 0;
  dataSource!: MatTableDataSource<Order>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  /*---------------------------------------------*/

  constructor(
    private _orderService: OrderService,
    private router: Router
  ) { 
    this.router.events.subscribe((value) => {

      if (value instanceof NavigationEnd) {
        this.url = this.getParentUrl(this.router.url);
      }
    });
   }

  ngOnInit(): void {
    this.getOrders();
    this.sortedData = this.orders.slice();
  }

  getParentUrl(url: string) {
    const index = url.split('/', 2).join('/').length;
    const suburl = url.substring(0, index);
    return suburl;
  }

  getOrders() {
    this._orderService.getOrders().subscribe(
      response => {
        if (response.orders) {

          let orders = response.orders;
          let done = ['Cancelado', 'Entregado']

          /* Solo agrego a la lista los elementos que no
           tienen status Cancelado o Entregado */
          orders.forEach((element: Order) => {
            if (!done.includes(element.status)) {
              this.orders.push(element);
            }
          });

          // this.orders = response.orders;
          this.orders.forEach(item => {
            item.date = new Date(item.date);
          });
          this.totalData = this.orders.length;
          this.dataSource = new MatTableDataSource<Order>(this.orders);
          this.dataSource.paginator = this.paginator;
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  sortData(sort: Sort) {
    const data = this.orders.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'date': {
          const aTime: number = a.date.getTime();
          const bTime: number = b.date.getTime();
          return compare(aTime, bTime, isAsc);
        }
        case 'status': return compare(a.status, b.status, isAsc);
        default: return 0;
      }
    });
  }

}

/**
 * ....
 * @param a 
 * @param b 
 * @param isAsc 
 */
function compare(a: number | string, b: number | string, isAsc: boolean) {
  /**
   * Regresa el resultado de la comparación
   */
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
