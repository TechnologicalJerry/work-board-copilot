import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs';
import { LoggerService } from '../../services/logger.service';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const logger = inject(LoggerService);
  const startTime = Date.now();

  logger.debug(`[HTTP Request] ${req.method} ${req.url}`);

  return next(req).pipe(
    tap({
      next: (event) => {
        if (event.type === HttpEventType.Response) {
          const elapsed = Date.now() - startTime;
          logger.debug(`[HTTP Response ${event.status}] ${req.method} ${req.url} (${elapsed}ms)`);
        }
      },
      error: (err: unknown) => {
        const elapsed = Date.now() - startTime;
        logger.warn(`[HTTP Error] ${req.method} ${req.url} failed after ${elapsed}ms`, err);
      },
    })
  );
};
