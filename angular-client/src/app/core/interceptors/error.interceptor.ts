import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { AppError } from '../errors/app-error.model';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: unknown) => {
      if (error instanceof HttpErrorResponse) {
        const appError = AppError.fromHttp(
          error.status,
          error.error?.message || error.statusText,
          error.error?.details
        );
        return throwError(() => appError);
      }
      return throwError(() => error);
    })
  );
};
