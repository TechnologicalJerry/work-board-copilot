import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ConfigService } from '../services/config.service';

export const apiPrefixInterceptor: HttpInterceptorFn = (req, next) => {
  const config = inject(ConfigService);
  const apiBaseUrl = config.apiGatewayUrl();

  // If request is relative and starts with /api or endpoint path, append base gateway URL
  if (!req.url.startsWith('http://') && !req.url.startsWith('https://')) {
    const fullUrl = req.url.startsWith('/') ? `${apiBaseUrl}${req.url}` : `${apiBaseUrl}/${req.url}`;
    const apiReq = req.clone({ url: fullUrl });
    return next(apiReq);
  }

  return next(req);
};
