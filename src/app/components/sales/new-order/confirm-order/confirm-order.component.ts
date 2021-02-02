import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/_models/order.model';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css'],
  providers: [OrderService]
})
export class ConfirmOrderComponent implements OnInit {

  constructor(
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _orderService: OrderService
  ) { }

  ngOnInit(): void {
    console.log("data " + JSON.stringify(this.data));
  }

  sendOrder() {
    let order: Order = this.data;

    if (order) {
      this._orderService.saveOrder(order).subscribe(
        (response) => {
          console.log(response);
          localStorage.removeItem("order");
          this._router.navigate(['/sales/orders-inprogress/']);
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }

}
