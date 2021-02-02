import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

/**
 * Pass untouched request through to the next request handler. 
 * */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  /**
   * constructor
   * @param auth 
   */
  constructor(private auth: AuthService) { }

  /**
   * intercepta las peticiones para comprobar token
   * @param req 
   * @param next 
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.auth.getAuthorizationToken();
    const authReq = req.clone({
      headers: req.headers
        .set('Authorization', authToken)
        .set('Content-Type', 'application/json')
    });

    return next.handle(authReq);
  }
}