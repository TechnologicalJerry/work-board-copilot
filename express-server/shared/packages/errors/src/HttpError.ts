import { AppError } from './AppError';
import { ErrorCode } from './error-codes';

export class BadRequestError extends AppError {
  constructor(message = 'Bad Request', details?: Record<string, unknown>) {
    super(message, ErrorCode.BAD_REQUEST, 400, true, details);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = 'Unauthorized') {
    super(message, ErrorCode.UNAUTHORIZED, 401);
  }
}

export class ForbiddenError extends AppError {
  constructor(message = 'Forbidden') {
    super(message, ErrorCode.FORBIDDEN, 403);
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string, id?: string) {
    const message = id ? `${resource} with id '${id}' not found` : `${resource} not found`;
    super(message, ErrorCode.NOT_FOUND, 404);
  }
}

export class ConflictError extends AppError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, ErrorCode.CONFLICT, 409, true, details);
  }
}

export class UnprocessableEntityError extends AppError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, ErrorCode.UNPROCESSABLE_ENTITY, 422, true, details);
  }
}

export class TooManyRequestsError extends AppError {
  constructor(message = 'Too many requests') {
    super(message, ErrorCode.TOO_MANY_REQUESTS, 429);
  }
}

export class InternalServerError extends AppError {
  constructor(message = 'Internal Server Error') {
    super(message, ErrorCode.INTERNAL_SERVER_ERROR, 500, false);
  }
}

export class ServiceUnavailableError extends AppError {
  constructor(service: string) {
    super(`Service '${service}' is unavailable`, ErrorCode.SERVICE_UNAVAILABLE, 503);
  }
}

export class ValidationError extends AppError {
  constructor(message: string, details: Record<string, unknown>) {
    super(message, ErrorCode.VALIDATION_ERROR, 422, true, details);
  }
}

export class TokenExpiredError extends AppError {
  constructor() {
    super('Token has expired', ErrorCode.TOKEN_EXPIRED, 401);
  }
}

export class TokenInvalidError extends AppError {
  constructor() {
    super('Token is invalid', ErrorCode.TOKEN_INVALID, 401);
  }
}
