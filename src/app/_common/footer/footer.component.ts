import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/_models/user.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  // private user: User | undefined;
  private role: string | undefined;
  url = '';
  @Output() routeClicked = new EventEmitter<string>();

  constructor(
    private _authService: AuthService,
    private router: Router
  ) {
    this.router.events.subscribe((value) => {

      if (value instanceof NavigationEnd) {
        this.url = this.getParentUrl(this.router.url);
      }
    });
   }

  ngOnInit(): void {
    this.getAuthUser();
  }

  getParentUrl(url: string) {
    const index = url.split('/', 2).join('/').length;
    const suburl = url.substring(0, index);
    return suburl;
  }

  onClick(route: string): void {
    this.routeClicked.emit(route);
  }

  getAuthUser() {
    this._authService.auth_user().subscribe(
      (response) => {
        this.role = response.user.role;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  doIHavePermission(roles: (string | undefined)[]) {
    return (roles.includes(this.role));
  }
}
