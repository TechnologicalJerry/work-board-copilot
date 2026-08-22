import { HttpErrorResponse } from '@angular/common/http';

export enum ErrorCode {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  UNPROCESSABLE = 422,
  TOO_MANY_REQUESTS = 429,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  UNKNOWN = 0,
}

export interface ApiErrorDetail {
  field?: string;
  message: string;
  code?: string;
}

export class ApiError extends Error {
  constructor(
    public readonly status: ErrorCode | number,
    public override readonly message: string,
    public readonly code?: string,
    public readonly details: ApiErrorDetail[] = [],
    public readonly correlationId?: string,
    public readonly timestamp?: string,
    public readonly rawError?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
    Object.setPrototypeOf(this, ApiError.prototype);
  }

  static fromHttpError(error: HttpErrorResponse): ApiError {
    const status = error.status in ErrorCode ? (error.status as ErrorCode) : error.status || ErrorCode.UNKNOWN;
    const correlationId = error.headers?.get('X-Correlation-ID') || error.headers?.get('x-correlation-id') || error.error?.correlationId;

    let message = error.statusText || 'An unexpected HTTP error occurred';
    let code: string | undefined = undefined;
    let details: ApiErrorDetail[] = [];
    let timestamp: string | undefined = undefined;

    if (error.error) {
      if (typeof error.error === 'string') {
        message = error.error;
      } else if (typeof error.error === 'object') {
        const payload = error.error.error || error.error;
        if (payload.message) {
          message = payload.message;
        }
        if (payload.code) {
          code = payload.code;
        }
        if (Array.isArray(payload.details)) {
          details = payload.details;
        }
        if (error.error.timestamp) {
          timestamp = error.error.timestamp;
        }
      }
    }

    return new ApiError(status, message, code, details, correlationId ?? undefined, timestamp, error);
  }
}
