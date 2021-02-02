import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { Global } from 'src/app/services/global';
import { OrderService } from 'src/app/services/order.service';
import { Client } from 'src/app/_models/client.model';
import { Order, status } from 'src/app/_models/order.model';
import { ConfirmOrderComponent } from '../confirm-order/confirm-order.component';

@Component({
  selector: 'app-client-order',
  templateUrl: './client-order.component.html',
  styleUrls: ['./client-order.component.css'],
  providers: [ClientService, OrderService]
})
export class ClientOrderComponent implements OnInit {
  client_id = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);

  public clients: Client[] | undefined;
  public client: Client | undefined;
  public url: string;
  public order: Order | undefined;

  constructor(
    private _clientService: ClientService,
    // private _orderService: OrderService,
    public activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
  ) {
    this.url = Global.url;
  }

  onSubmit() {
  }

  ngOnInit(): void {
    let ord = localStorage.getItem("order");
    if (ord) {
      this.order = JSON.parse(ord);
    }
    this.getClients();

  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  getClients() {
    this._clientService.getClients().subscribe(
      response => {
        if (response.clients) {
          this.clients = response.clients;
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  getClient(id: string) {
    this._clientService.getClient(id).subscribe(
      response => {
        this.client = response.client;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  makeOrder() {
    let client_id = this.client_id.value;
    let address = this.address.value;
    let number = this.phone.value;

    if (this.order) {
      this.order.client_id = client_id;
      this.order.address = address.address;
      this.order.phone = number;

      // FECHA
      // var date = new Date(Date.now());
      // this.order.date = String(date);
      this.order.date = new Date(Date.now());

      // Status
      this.order.status = status.Nuevo;

      //User id
      let usr = localStorage.getItem("user_id");
      if (usr) {
        this.order.user_id = usr;
      }

    }

    this.openDialog();

  }

  openDialog() {
    this.dialog.open(ConfirmOrderComponent, {
      data: this.order
    });
  }

}
