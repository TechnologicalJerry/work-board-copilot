import { Context } from 'hono';
import { ApiResponse } from '../types/index.js';

export function successResponse<T>(
  c: Context,
  data: T,
  message?: string,
  statusCode = 200,
  meta?: Record<string, any>
) {
  const payload: ApiResponse<T> = {
    success: true,
    ...(message && { message }),
    data,
    meta: {
      timestamp: new Date().toISOString(),
      requestId: c.get('requestId'),
      ...meta,
    },
  };
  return c.json(payload, statusCode as any);
}

export function errorResponse(
  c: Context,
  message: string,
  code = 'INTERNAL_SERVER_ERROR',
  statusCode = 500,
  details?: any
) {
  const payload: ApiResponse = {
    success: false,
    message,
    error: {
      code,
      ...(details && { details }),
    },
    meta: {
      timestamp: new Date().toISOString(),
      requestId: c.get('requestId'),
    },
  };
  return c.json(payload, statusCode as any);
}
