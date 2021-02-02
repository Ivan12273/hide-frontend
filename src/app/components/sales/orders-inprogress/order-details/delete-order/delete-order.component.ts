import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order, status } from 'src/app/_models/order.model';

@Component({
  selector: 'app-delete-order',
  templateUrl: './delete-order.component.html',
  styleUrls: ['./delete-order.component.css'],
  template: 'passed in {{ data.orderId }}',
  providers: [OrderService]
})
export class DeleteOrderComponent implements OnInit {
  public order: any;

  constructor(
    private _orderService: OrderService,
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) public data: { ord: any }
  ) { }

  ngOnInit(): void {
    console.log(this.data.ord);
    this.order = this.data.ord;

  }

  deleteOrder() {
    this.order.status = status.Cancelado;
    this._orderService.updateOrder(this.order).subscribe(
      res => {
        console.log(res);
        this._router.navigate(['/sales/orders-inprogress']);
      },
      err => {
        console.log(err);
      }
    )
  }

}
