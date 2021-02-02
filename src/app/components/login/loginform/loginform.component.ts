import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Global } from 'src/app/services/global';
import { Login } from 'src/app/_models/login.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['../login.component.css'],
  providers: [AuthService]
})

export class LoginformComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  public url: string;

  constructor(
    private _authService: AuthService,
    private router: Router
  ) {
    this.url = Global.url;
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required'))
      return 'Debes ingresar un correo electrónico.';

    if (this.email.hasError('serverError'))
      return this.email.getError('serverError')

    return this.email.hasError('email') ? 'No es un correo electrónico válido.' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('serverError'))
      return this.password.getError('serverError')

    return this.password.hasError('required') ? 'Debes ingresar una contraseña.' : '';
  }

  login() {
    let user = new Login(this.email.value, this.password.value);
    this._authService.login(user).subscribe(
      (response) => {
        if (response.token) {
          localStorage.setItem("token", response.token);
          this.router.navigate(['/']);
        }

        if (response.user) {
          localStorage.setItem("user_id", response.user._id);
        }
      },
      error => {
        console.log("Error" + JSON.stringify(error));

        if (error.error.email)
          this.email.setErrors({ serverError: error.error.email.message })

        if (error.error.password)
          this.password.setErrors({ serverError: error.error.password.message })

        if (error.error.login)
          this.password.setErrors({ serverError: error.error.login.message })


      }
    );
  }


}
