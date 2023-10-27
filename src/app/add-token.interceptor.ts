import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('Request orignal', request);
    if (request.method != 'GET') {
      let token = localStorage.getItem('access_token');
      if (token) {
        let cloneRequest = request.clone({
          headers: new HttpHeaders().set('Authorization', `bearer ${token}`),
        });
        console.log('Request clonee', cloneRequest);
        return next.handle(cloneRequest);
      }
    }

    return next.handle(request);
  }
}

export const ProvideInterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: AddTokenInterceptor,
  multi: true,
};
