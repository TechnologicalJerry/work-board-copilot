import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../../../features/auth/services/auth.service';
import { IS_PUBLIC_ENDPOINT } from '../http-context';

const IS_AUTH_ENDPOINT = (url: string): boolean =>
  url.includes('/auth/login') ||
  url.includes('/auth/register') ||
  url.includes('/auth/refresh') ||
  url.includes('/auth/logout');

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const isPublic = req.context.get(IS_PUBLIC_ENDPOINT);
  const isAuth = IS_AUTH_ENDPOINT(req.url);

  let authReq = req;
  const token = authService.accessToken();

  if (token && !isPublic && !isAuth) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(authReq).pipe(
    catchError((error: unknown) => {
      if (error instanceof HttpErrorResponse && error.status === 401 && !isAuth && !isPublic) {
        return authService.refresh().pipe(
          switchMap((newToken) => {
            const retriedReq = req.clone({
              setHeaders: {
                Authorization: `Bearer ${newToken}`,
              },
            });
            return next(retriedReq);
          }),
          catchError((refreshErr) => throwError(() => refreshErr))
        );
      }
      return throwError(() => error);
    })
  );
};
