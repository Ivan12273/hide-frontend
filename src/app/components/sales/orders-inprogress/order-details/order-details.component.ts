import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Global } from 'src/app/services/global';
import { OrderService } from 'src/app/services/order.service';
import { Detail } from 'src/app/_models/detail.model';
import { Order } from 'src/app/_models/order.model';
import { DeleteOrderComponent } from './delete-order/delete-order.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
  providers: [OrderService, AuthService]
})
export class OrderDetailsComponent implements OnInit {
  public url: string;
  public parentUrl: string | undefined;
  public order!: Order;
  public orderStatus: string | undefined;
  public role: string | undefined;

  public confirm: boolean;

  constructor(
    public dialog: MatDialog,
    private _orderService: OrderService,
    private _authService: AuthService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this._router.events.subscribe((value) => {

      if (value instanceof NavigationEnd) {
        this.parentUrl = this.getParentUrl(this._router.url);
      }
    });
    this.url = Global.url;
    this.confirm = false;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;
      this.getOrder(id);
    });
    this.getAuthUser();

  }

  getParentUrl(url: string) {
    const index = url.split('/', 2).join('/').length;
    const suburl = url.substring(0, index);
    return suburl;
  }

  setConfirm(confirm: boolean): void {
    this.confirm = confirm;
  }

  getOrder(id: string): void {
    this._orderService.getOrder(id).subscribe(
      response => {
        if (response.order) {
          this.order = response.order;
          this.orderStatus = this.order.status;

          // Obtener monto total de cada detalle
          let details = this.order.details;
          details.forEach((el, index) => {
            let det: Detail = new Detail(el.product_id._id, el.product_id.name, el.product_id.price, el.quantity)
            details[index] = det;
          });

          // let order: Order = new Order(this.order._id, this.order.user_id, this.order.client_id,
          //   this.order.status, this.order.date, details, this.order.address, this.order.phone);

          this.order = new Order(this.order._id, this.order.user_id, this.order.client_id,
            this.order.status, this.order.date, details, this.order.address, this.order.phone);

        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  getAuthUser(): void {
    this._authService.auth_user().subscribe(
      (response) => {
        this.role = response.user.role;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit(form: any): void {
    this._orderService.updateOrder(this.order).subscribe(
      response => {
        if (response.order) {
          if (this.parentUrl === '/orders') {
            this._router.navigate(['/orders']);
          } else {
            this._router.navigate(['/sales/orders-inprogress']);
          }

        } else {

        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  openDialog(order: Order): void {

    this.dialog.open(DeleteOrderComponent, {
      data: { ord: this.order },
    });
  }

}
