/**
 * Standard API Gateway response contract
 */
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  timestamp?: string;
  correlationId?: string;
}

/**
 * Standard paginated response envelope
 */
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

/**
 * Standard API error payload returned from backend
 */
export interface ApiErrorPayload {
  code?: string;
  message: string;
  details?: Array<{ field?: string; message: string; code?: string }>;
  correlationId?: string;
}

/**
 * Generic API error envelope
 */
export interface ApiErrorResponse {
  success: false;
  error: ApiErrorPayload;
  timestamp?: string;
}
