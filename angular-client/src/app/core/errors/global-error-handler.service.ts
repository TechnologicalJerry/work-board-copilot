import { ErrorHandler, Injectable, inject } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  private readonly errorHandler = inject(ErrorHandlerService);

  handleError(error: unknown): void {
    this.errorHandler.handleError(error);
  }
}
