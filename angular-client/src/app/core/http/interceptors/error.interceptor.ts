import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ApiError } from '../../errors/api-error';
import { LoggerService } from '../../services/logger.service';
import { SKIP_ERROR_NORMALIZATION } from '../http-context';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const logger = inject(LoggerService);

  return next(req).pipe(
    catchError((error: unknown) => {
      if (req.context.get(SKIP_ERROR_NORMALIZATION)) {
        return throwError(() => error);
      }

      if (error instanceof HttpErrorResponse) {
        const apiError = ApiError.fromHttpError(error);
        logger.error(`[HTTP ${apiError.status}] ${req.method} ${req.url} failed: ${apiError.message}`, {
          code: apiError.code,
          details: apiError.details,
          correlationId: apiError.correlationId,
        });
        return throwError(() => apiError);
      }

      return throwError(() => error);
    })
  );
};
