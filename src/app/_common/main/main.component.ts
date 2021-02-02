import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  url = '';
  public clickedRoute = '';

  constructor(
    private router: Router
  ) { 
    this.router.events.subscribe((value) => {

      if (value instanceof NavigationEnd) {
        this.url = this.getParentUrl(this.router.url);
      }
    });
  }

  ngOnInit(): void {
  }

  getParentUrl(url: string) {
    const index = url.split('/', 2).join('/').length;
    const suburl = url.substring(0, index);
    return suburl;
  }

  childRouteClicked(route: string) {
    this.clickedRoute = route;
  }

}
