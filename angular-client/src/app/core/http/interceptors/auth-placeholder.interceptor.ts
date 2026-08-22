import { HttpInterceptorFn } from '@angular/common/http';
import { IS_PUBLIC_ENDPOINT } from '../http-context';

/**
 * Extension point for Stage 3 Authentication.
 * In Stage 3, this interceptor will inject the auth token into the Authorization header
 * for non-public requests. In Stage 2, it acts as a transparent placeholder.
 */
export const authPlaceholderInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.context.get(IS_PUBLIC_ENDPOINT)) {
    return next(req);
  }

  // Extension point for Stage 3 Bearer Token insertion:
  // e.g., req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });

  return next(req);
};
