import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from 'src/app/_models/client.model';
import { ClientService } from 'src/app/services/client.service';
import { Global } from 'src/app/services/global';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-manage-clients',
  templateUrl: './manage-clients.component.html',
  styleUrls: ['./manage-clients.component.css'],
  providers: [ClientService]
})
export class ManageClientsComponent implements OnInit {
  public clients: Client[] = [];
  public url: string;

  /*-----------Propiedades de tabla--------------*/
  displayedColumns: string[] = ['name', 'phone'];
  totalData = 0;
  dataSource!: MatTableDataSource<Client>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  /*---------------------------------------------*/

  constructor(
    private _clientService: ClientService
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this._clientService.getClients().subscribe(
      response => {
        if (response.clients) {
          this.clients = response.clients;
          this.totalData = this.clients.length;
          this.dataSource = new MatTableDataSource<Client>(this.clients);
          this.dataSource.paginator = this.paginator;
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }


}
