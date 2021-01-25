import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // não é possível alterar os dados de um request diretamente
    // é preciso clona-lo primeiro

    // Exemplo que não funciona
    // request.url = request.url.replace('http://', 'https://');
    // request.body = request.body.name.trim();

    // Exemplo que funciona
    // const secureReq = request.clone({
    //   url: request.url.replace('http://', 'https://')
    // });

    // return next.handle(secureReq);

    // Exemplo body
    // const body: any = request.body;
    // const newBody = { ...body, name: body.name.trim() };
    // const req = request.clone({
    //   body: newBody
    // });

    // return next.handle(req);

    // Exemplo header
    // const req = request.clone({
    //   headers: request.headers.set('Authorization', `Bearer 123`)
    // });

    // return next.handle(req);

    return next.handle(request)
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error('Erro:' , error.error);

    return throwError(error);
  }
}
