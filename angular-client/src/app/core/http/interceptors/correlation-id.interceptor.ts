import { HttpInterceptorFn } from '@angular/common/http';
import { SKIP_CORRELATION_ID } from '../http-context';

export const CORRELATION_ID_HEADER = 'X-Correlation-ID';

function generateCorrelationId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return 'corr-' + Math.random().toString(36).substring(2, 11) + '-' + Date.now().toString(36);
}

export const correlationIdInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.context.get(SKIP_CORRELATION_ID) || req.headers.has(CORRELATION_ID_HEADER)) {
    return next(req);
  }

  const correlationId = generateCorrelationId();
  const reqWithCorrelation = req.clone({
    headers: req.headers.set(CORRELATION_ID_HEADER, correlationId),
  });

  return next(reqWithCorrelation);
};
