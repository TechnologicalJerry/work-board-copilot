export class HttpError extends Error {
  public readonly statusCode: number;
  public readonly code: string;
  public readonly details?: any;

  constructor(statusCode: number, code: string, message: string, details?: any) {
    super(message);
    this.name = 'HttpError';
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class BadRequestError extends HttpError {
  constructor(message = 'Bad Request', details?: any) {
    super(400, 'BAD_REQUEST', message, details);
  }
}

export class UnauthorizedError extends HttpError {
  constructor(message = 'Unauthorized access', details?: any) {
    super(401, 'UNAUTHORIZED', message, details);
  }
}

export class ForbiddenError extends HttpError {
  constructor(message = 'Forbidden access', details?: any) {
    super(403, 'FORBIDDEN', message, details);
  }
}

export class NotFoundError extends HttpError {
  constructor(message = 'Resource not found', details?: any) {
    super(404, 'NOT_FOUND', message, details);
  }
}

export class ConflictError extends HttpError {
  constructor(message = 'Resource conflict', details?: any) {
    super(409, 'CONFLICT', message, details);
  }
}
