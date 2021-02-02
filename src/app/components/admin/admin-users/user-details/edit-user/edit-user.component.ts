import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Global } from 'src/app/services/global';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  providers: [UserService]
})
export class EditUserComponent implements OnInit {
  public user!: User;
  public url: string;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { 
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;

      this.getUser(id);
    })
  }

  getUser(id: string) {
    this._userService.getUser(id).subscribe(
      response => {
        this.user= response.user;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  onSubmit(form: any) {
    this._userService.updateUser(this.user).subscribe(
      response => {
        if(response.user) {
          /* Para mensajes de "Usuario editado" */
          //this.save_user = response.user;
          //this.status = 'success';
          this._router.navigate(['/admin/admin-users']);
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
