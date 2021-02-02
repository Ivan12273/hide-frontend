import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
  template: 'passed in {{ data.userId }}',
  providers: [UserService]
})
export class DeleteUserComponent implements OnInit {

  constructor(
    private _userService: UserService,
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) public data: { userId: string }
  ) { 
  }

  ngOnInit(): void {
  }

  deleteUser(id: string) {
    this._userService.deleteUser(id).subscribe(
      () => {
        this._router.navigate(['/admin/admin-users']);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
