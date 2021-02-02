import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/_models/client.model';
import { Location } from 'src/app/_models/location.model';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css'],
  providers: [ClientService]
})
export class RegisterClientComponent implements OnInit {
  public client: Client;
  public location: Location;
  public error: String;
  public errorValue: String;

  constructor(
    private _clientService: ClientService,
    private _router: Router
  ) {
    this.location = new Location('', '', '');
    this.client = new Client('', '', [''], [this.location]);
    this.errorValue = '';
    this.error = '';
  }

  ngOnInit(): void {
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
    this.client.addPhoneNumber('');
  }

  deleteAPhoneNumber() {
    this.client.deletePhoneNumber();
  }

  addAnotherLocation() {
    this.client.addLocation(new Location('', '', ''));
  }

  deleteALocation() {
    this.client.deleteLocation();
  }

  onSubmit(form: any) {
    console.log(this.client);
    this._clientService.saveClient(this.client).subscribe(
      response => {
        if (response.client) {
          this._router.navigate(['/client/manage-clients']);
          //this.save_user = response.user;
          //this.status = 'success';
        }
      },
      error => {
        console.log(<any>error);
        if(error.error.message.keyValue.phone != '') {
          this.error = 'phone';
          this.errorValue = error.error.message.keyValue.phone;

          console.log(this.errorValue);
          console.log(<any>error);
        } else {
          console.log(<any>error);
        }
      }
    );
  }

}
