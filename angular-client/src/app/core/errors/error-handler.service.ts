import { ErrorHandler, Injectable, inject } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { ApiError } from './api-error';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService implements ErrorHandler {
  private readonly logger = inject(LoggerService);

  handleError(error: unknown): void {
    if (error instanceof ApiError) {
      this.logger.error(`[ApiError ${error.status}] ${error.message}`, {
        code: error.code,
        details: error.details,
        correlationId: error.correlationId,
      });
    } else if (error instanceof Error) {
      this.logger.error(`[UnhandledError] ${error.message}`, error.stack);
    } else {
      this.logger.error('[UnknownError] An unexpected runtime error occurred', error);
    }
  }
}
