import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
/**
 * Inicializa los metadatos de las dependencias
 */
@Injectable({
  providedIn: 'root',
})
/**
 * Clase
 */
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
/**
 * ...
 * @param next 
 * @param state 
 */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true | UrlTree {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  /**
   * Verificar login
   * @param url 
   */
  checkLogin(url: string): true | UrlTree {
    if (this.authService.isLoggedIn()) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Redirect to the login page
    return this.router.parseUrl('login');
  }
}