import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/_models/client.model';
import { Location } from 'src/app/_models/location.model';
import { ClientService } from 'src/app/services/client.service';
import { Global } from 'src/app/services/global';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css'],
  providers: [ClientService]
})
export class EditClientComponent implements OnInit {
  public client: Client;
  public location: Location;
  public url: string;

  constructor(
    private _clientService: ClientService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.url = Global.url;
    this.location = new Location('', '', '');
    this.client = new Client('', '', [''], [this.location]);
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;
      this.getClient(id);
    })
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  addGeolocation(inputNumber: number) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        let coordinates = position.coords.latitude.toString() + ', ' + position.coords.longitude.toString();
        this.client.location[inputNumber].coordinates = coordinates;
      });
    } else { 
      console.log("Geolocalización no está soportada en su navegador.");
    }
  }

  addAnotherPhoneNumber() {
    this.client.phone.push('');
  }

  deleteAPhoneNumber() {
    this.client.phone.pop();
  }

  addAnotherLocation() {
    this.client.location.push(new Location('', '', ''));
  }

  deleteALocation() {
    this.client.location.pop();
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

  onSubmit(form: any) {
    this._clientService.updateClient(this.client).subscribe(
      response => {
        if(response.client) {
          this._router.navigate(['/client/manage-clients']);
          /* Para mensajes de "Cliente editado" */
          //this.save_client = response.client;
          //this.status = 'success';
        }else {
          //this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
