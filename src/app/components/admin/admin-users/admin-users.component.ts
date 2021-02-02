import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/_models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Global } from 'src/app/services/global';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css',],
  providers: [UserService]
})
export class AdminUsersComponent implements OnInit {
  public users: User[] = [];
  public url: string;

  /*-----------Propiedades de tabla--------------*/
  displayedColumns: string[] = ['name', 'role'];
  totalData = 0;
  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  /*---------------------------------------------*/

  constructor(
    // tslint:disable-next-line:variable-name
    private _userService: UserService
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this._userService.getUsers().subscribe(
      response => {
        if (response.users) {
          this.users = response.users;
          this.totalData = this.users.length;
          this.dataSource = new MatTableDataSource<User>(this.users);
          this.dataSource.paginator = this.paginator;
        }
      },
      error => {
        console.log(error);
      }
    );
  }


}
