import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { AuthService } from '../../modules/pre-auth/services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.authService.getToken();

    console.log("tokenzz", token);
    

    if(token != null) {
      request = request.clone({
        setHeaders: {Authorization: `Bearer ${token}`} 
      })
      // this.router.navigate(['/pre-auth/sign-in']);
    }

    

    return next.handle(request).pipe(
      tap(event => {
        if(event instanceof HttpResponse){
          console.log("Response from auth interceptor ", event);
          console.log("Res URL ", request.url);
        }
      }),
      catchError((err: HttpErrorResponse) => {
        if(err.status == 401){

        }

        return throwError(() => err)
      })
    );
  }
}
