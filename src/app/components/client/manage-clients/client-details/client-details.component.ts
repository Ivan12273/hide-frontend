import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/_models/client.model';
import { ClientService } from 'src/app/services/client.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DeleteClientComponent } from 'src/app/components/client/manage-clients/client-details/delete-client/delete-client.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css'],
  providers: [ClientService]
})
export class ClientDetailsComponent implements OnInit {
  public url: string;
  public client: Client | undefined;
  public confirm: boolean;

  constructor(
    public dialog: MatDialog,
    private _clientService: ClientService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url;
    this.confirm = false;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;
      this.getClient(id);
    });
  }

  setConfirm(confirm: boolean) {
    this.confirm = confirm;
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

  openDialog(id: string) {
    this.dialog.open(DeleteClientComponent, {
      data: { clientId: id },
    });
  }

  deleteClient(id: string) {
    this._clientService.deleteClient(id).subscribe(
      response => {
        if(response.client) {
          this._router.navigate(['/client/manage-clients']);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
