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

export interface AppErrorDetail {
  field?: string;
  message: string;
  code?: string;
}

export class AppError extends Error {
  constructor(
    public readonly status: ErrorCode,
    public override readonly message: string,
    public readonly details: AppErrorDetail[] = [],
    public readonly rawError?: unknown
  ) {
    super(message);
    this.name = 'AppError';
    Object.setPrototypeOf(this, AppError.prototype);
  }

  static fromHttp(status: number, message?: string, details?: AppErrorDetail[]): AppError {
    const errorCode = status in ErrorCode ? (status as ErrorCode) : ErrorCode.UNKNOWN;
    const defaultMsg = message || `HTTP Error ${status}`;
    return new AppError(errorCode, defaultMsg, details || []);
  }
}
