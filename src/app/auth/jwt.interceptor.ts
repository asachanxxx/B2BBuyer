import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './_services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('APIKey');
        console.log("token ", token);
        let clone: HttpRequest<any>;
        if (token) {

            //   if (token.expired) {
            //       // renew token
            //       this.authService.refreshToken().subscribe(result => {
            //       token = result.token
            //   })
            //   }
            clone = request.clone({
                setHeaders: {
                    Accept: `application/json`,
                    'Content-Type': `application/json`,
                    Authorization: `Bearer ${token}`
                }
            });
            console.log("request  ", clone);
        } else {
            clone = request.clone({
                setHeaders: {
                    Accept: `application/json`,
                    'Content-Type': `application/json`
                }
            });
        }
        return next.handle(clone);

    }
}