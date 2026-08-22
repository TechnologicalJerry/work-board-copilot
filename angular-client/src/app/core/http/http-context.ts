import { HttpContextToken } from '@angular/common/http';

/** Skip prepending the API Gateway base URL */
export const SKIP_API_PREFIX = new HttpContextToken<boolean>(() => false);

/** Skip attaching X-Correlation-ID header */
export const SKIP_CORRELATION_ID = new HttpContextToken<boolean>(() => false);

/** Skip automatic HttpErrorResponse -> ApiError normalization */
export const SKIP_ERROR_NORMALIZATION = new HttpContextToken<boolean>(() => false);

/** Suppress loading service indicator increment/decrement */
export const SUPPRESS_LOADING = new HttpContextToken<boolean>(() => false);

/** Extension point flag for public endpoints that skip authorization headers */
export const IS_PUBLIC_ENDPOINT = new HttpContextToken<boolean>(() => false);
