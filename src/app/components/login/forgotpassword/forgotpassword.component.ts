import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['../login.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private _authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required'))
      return 'Debes ingresar un correo electrónico.';

    if (this.email.hasError('serverError'))
      return this.email.getError('serverError')

    return this.email.hasError('email') ? 'No es un correo electrónico válido.' : '';
  }

  resset_password() {
    let email = this.email.value
    this._authService.password_reset(email).subscribe(
      (response) => {
        let snackBarRef = this.snackBar.open(`¡Email de restauración enviado a ${email}!`, '¡Gracias!');

        snackBarRef.afterDismissed().subscribe(() => {
          this.router.navigate(['/login']);
        });

      },
      error => {
        console.log(error.error.message);
        this.email.setErrors({ serverError: error.error.message })
      }
    );
  }
}
