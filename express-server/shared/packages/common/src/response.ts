import { v4 as uuidv4 } from 'uuid';
import { ApiResponse, PaginatedResult } from '@boardpilot/types';

export function successResponse<T>(
  data: T,
  requestId?: string
): ApiResponse<T> {
  return {
    success: true,
    data,
    requestId: requestId ?? uuidv4(),
    timestamp: new Date().toISOString(),
  };
}

export function paginatedResponse<T>(
  result: PaginatedResult<T>,
  requestId?: string
): ApiResponse<T[]> {
  return {
    success: true,
    data: result.data,
    meta: { pagination: result.meta },
    requestId: requestId ?? uuidv4(),
    timestamp: new Date().toISOString(),
  };
}

export function errorResponse(
  code: string,
  message: string,
  requestId?: string,
  details?: Record<string, unknown>
): ApiResponse<never> {
  return {
    success: false,
    error: { code, message, details },
    requestId: requestId ?? uuidv4(),
    timestamp: new Date().toISOString(),
  };
}
