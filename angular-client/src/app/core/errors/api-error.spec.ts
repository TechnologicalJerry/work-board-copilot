import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ApiError, ErrorCode } from './api-error';

describe('ApiError', () => {
  it('should instantiate ApiError with provided values', () => {
    const error = new ApiError(
      ErrorCode.BAD_REQUEST,
      'Invalid input parameters',
      'VALIDATION_FAILED',
      [{ field: 'title', message: 'Title is required' }],
      'corr-123',
      '2026-08-22T20:00:00Z'
    );

    expect(error.status).toBe(400);
    expect(error.message).toBe('Invalid input parameters');
    expect(error.code).toBe('VALIDATION_FAILED');
    expect(error.details.length).toBe(1);
    expect(error.correlationId).toBe('corr-123');
  });

  describe('fromHttpError', () => {
    it('should map 400 Bad Request accurately', () => {
      const httpError = new HttpErrorResponse({
        status: 400,
        statusText: 'Bad Request',
        error: {
          error: {
            message: 'Project name is missing',
            code: 'PROJECT_NAME_REQUIRED',
            details: [{ field: 'name', message: 'Name cannot be blank' }],
          },
        },
      });

      const apiErr = ApiError.fromHttpError(httpError);
      expect(apiErr.status).toBe(ErrorCode.BAD_REQUEST);
      expect(apiErr.message).toBe('Project name is missing');
      expect(apiErr.code).toBe('PROJECT_NAME_REQUIRED');
      expect(apiErr.details.length).toBe(1);
    });

    it('should map 401 Unauthorized', () => {
      const httpError = new HttpErrorResponse({
        status: 401,
        statusText: 'Unauthorized',
        error: { message: 'Authentication token expired' },
      });

      const apiErr = ApiError.fromHttpError(httpError);
      expect(apiErr.status).toBe(ErrorCode.UNAUTHORIZED);
      expect(apiErr.message).toBe('Authentication token expired');
    });

    it('should map 403 Forbidden', () => {
      const httpError = new HttpErrorResponse({
        status: 403,
        statusText: 'Forbidden',
      });

      const apiErr = ApiError.fromHttpError(httpError);
      expect(apiErr.status).toBe(ErrorCode.FORBIDDEN);
      expect(apiErr.message).toBe('Forbidden');
    });

    it('should map 404 Not Found', () => {
      const httpError = new HttpErrorResponse({
        status: 404,
        statusText: 'Not Found',
        error: 'Resource not found',
      });

      const apiErr = ApiError.fromHttpError(httpError);
      expect(apiErr.status).toBe(ErrorCode.NOT_FOUND);
      expect(apiErr.message).toBe('Resource not found');
    });

    it('should map 429 Too Many Requests', () => {
      const httpError = new HttpErrorResponse({
        status: 429,
        statusText: 'Too Many Requests',
        error: { message: 'Rate limit exceeded' },
      });

      const apiErr = ApiError.fromHttpError(httpError);
      expect(apiErr.status).toBe(ErrorCode.TOO_MANY_REQUESTS);
      expect(apiErr.message).toBe('Rate limit exceeded');
    });

    it('should map 500 Internal Server Error and extract X-Correlation-ID header', () => {
      const headers = new HttpHeaders().set('X-Correlation-ID', 'trace-999');
      const httpError = new HttpErrorResponse({
        status: 500,
        statusText: 'Internal Server Error',
        headers,
        error: { message: 'Database connection failed' },
      });

      const apiErr = ApiError.fromHttpError(httpError);
      expect(apiErr.status).toBe(ErrorCode.INTERNAL_SERVER_ERROR);
      expect(apiErr.message).toBe('Database connection failed');
      expect(apiErr.correlationId).toBe('trace-999');
    });
  });
});
