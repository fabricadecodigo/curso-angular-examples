
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogInterceptor } from './log/log.interceptor';

// os interceptors seguem a ordem de inclusão
// vão executar de cima pra baixo
// vão ter a responsta de baixo pra cima
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true },
];
