import { Component, OnInit, Inject } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css'],
  template: 'passed in {{ data.clientId }}',
  providers: [ClientService]
})
export class DeleteClientComponent implements OnInit {

  constructor(
    private _clientService: ClientService,
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) public data: { clientId: string }
  ) {
  }

  ngOnInit(): void {
  }

  deleteClient(id: string) {
    this._clientService.deleteClient(id).subscribe(
      () => {
        this._router.navigate(['/client/manage-clients']);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
