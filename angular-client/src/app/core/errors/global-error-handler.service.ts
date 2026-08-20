import { ErrorHandler, Injectable, inject } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { AppError } from './app-error.model';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  private readonly logger = inject(LoggerService);

  handleError(error: unknown): void {
    if (error instanceof AppError) {
      this.logger.error(`[AppError ${error.status}]: ${error.message}`, error.details);
    } else if (error instanceof Error) {
      this.logger.error(`[UnhandledError]: ${error.message}`, error.stack);
    } else {
      this.logger.error('[UnknownError]: An unexpected error occurred', error);
    }
  }
}
