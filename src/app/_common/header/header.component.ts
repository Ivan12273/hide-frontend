import { Component, Input, OnInit } from '@angular/core';
import { Currency } from 'src/app/_models/currency.model';
import { CurrencyService } from 'src/app/services/currency.service';
import { Global } from 'src/app/services/global';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [CurrencyService, AuthService]
})
export class HeaderComponent implements OnInit {
  public currency!: Currency;

  @Input() route = '';

  constructor(
    private _currencyService: CurrencyService,
    private _authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getCurrency();
  }

  changeCurrentCoinToMXN() {
    Global.current_coin_value = this.currency.rates.MXN;
    Global.current_coin = "MXN";
    this.router.navigate(['stocks']);
  }

  changeCurrentCoinToUSD() {
    Global.current_coin_value = this.currency.rates.USD;
    Global.current_coin = "USD";
    this.router.navigate(['stocks']);
  }

  changeCurrentCoinToEUR() {
    Global.current_coin_value = this.currency.rates.EUR;
    Global.current_coin = "EUR";
    this.router.navigate(['stocks']);
  }

  getCurrency() {
    this._currencyService.getMXNRates().subscribe(
      response => {
        this.currency = response;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  logout() {
    this._authService.logout();
    this.router.navigate(['login']);
  }

}
