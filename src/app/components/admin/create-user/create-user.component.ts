import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [UserService, MatDatepickerModule]
  // imports: [MatDatepickerModule, MatNativeDateModule],
})
export class CreateUserComponent implements OnInit {
  public user: User;

  constructor(
    private _userService: UserService,
    private _router: Router
  ) {
    this.user = new User('', '', '', '', '');
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    this._userService.saveUser(this.user).subscribe(
      response => {
        if (response.user) {
          this._router.navigate(['/admin/admin-users']);
          /* Para mensajes de "Usuario creado" */
          //this.save_user = response.user;
          //this.status = 'success';
        } else {
          //this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
