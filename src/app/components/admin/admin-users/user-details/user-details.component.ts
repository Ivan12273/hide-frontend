import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DeleteUserComponent } from 'src/app/components/admin/admin-users/user-details/delete-user/delete-user.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers: [UserService]
})
export class UserDetailsComponent implements OnInit {
  public url: string;
  public user: User | undefined;
  public confirm: boolean;

  constructor(
    public dialog: MatDialog,
    private _userService: UserService,
    private _route: ActivatedRoute
  ) { 
    this.url = Global.url;
    this.confirm = false;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;
      this.getUser(id);
    })
  }  

  setConfirm(confirm: boolean): void {
    this.confirm = confirm;
  }

  getUser(id: string): void {
    this._userService.getUser(id).subscribe(
      response => {
        this.user = response.user;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  openDialog(id: string): void {
    this.dialog.open(DeleteUserComponent, {
      data: { userId: id },
    });
  }

}
