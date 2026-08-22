import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AppConfigService } from '../../config/app-config.service';
import { SKIP_API_PREFIX } from '../http-context';

export const apiPrefixInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.context.get(SKIP_API_PREFIX)) {
    return next(req);
  }

  const config = inject(AppConfigService);
  const apiBaseUrl = config.apiGatewayUrl();

  // Prepend API Gateway URL if relative path
  if (!req.url.startsWith('http://') && !req.url.startsWith('https://')) {
    const sanitizedBase = apiBaseUrl.endsWith('/') ? apiBaseUrl.slice(0, -1) : apiBaseUrl;
    const sanitizedPath = req.url.startsWith('/') ? req.url : `/${req.url}`;
    const fullUrl = `${sanitizedBase}${sanitizedPath}`;
    return next(req.clone({ url: fullUrl }));
  }

  return next(req);
};
