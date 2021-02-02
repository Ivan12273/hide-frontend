import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
// import { SnackBar } from 'snack'
// import { SnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';

// import { MatSliderModule } from '@angular/material/slider';




@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['../login.component.css']
})
export class ResetpasswordComponent implements OnInit {
  // form: FormGroup = new FormGroup({});

  password = new FormControl('', [Validators.required]);
  confirm_password = new FormControl('', [Validators.required]);
  private user_id: string
  private token: string
  // constructor() { }

  constructor(
    private actRoute: ActivatedRoute,
    private _authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.user_id = this.actRoute.snapshot.params.user_id;
    this.token = this.actRoute.snapshot.params.token;
  }

  ngOnInit(): void {
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('serverError'))
      return this.password.getError('serverError')

    return this.password.hasError('required') ? 'Debes ingresar una contraseña.' : '';
  }

  resetPassword() {

    console.log(`El usuario es: ${this.user_id}`);
    console.log(`El token es: ${this.token}`);

    this._authService.update_password(this.password.value, this.user_id, this.token).subscribe(
      (response) => {
        console.log(response);
        let snackBarRef = this.snackBar.open('¡Contraseña restaurada!', '¡Gracias!');

        snackBarRef.afterDismissed().subscribe(() => {
          this.router.navigate(['/login']);
        });
      },
      error => {
        console.log(error);
        this.password.setErrors({ serverError: error.error.message })
      }
    );
  }

}
