import { Injectable, inject } from '@angular/core';
import { APP_ENVIRONMENT, defaultEnvironment } from '../config/app-environment.interface';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private readonly env = inject(APP_ENVIRONMENT, { optional: true }) ?? defaultEnvironment;

  debug(message: string, ...optionalParams: unknown[]): void {
    if (this.env.logging.enableConsole && this.env.logging.level === 'debug') {
      console.debug(`[DEBUG] ${message}`, ...optionalParams);
    }
  }

  info(message: string, ...optionalParams: unknown[]): void {
    if (this.env.logging.enableConsole) {
      console.info(`[INFO] ${message}`, ...optionalParams);
    }
  }

  warn(message: string, ...optionalParams: unknown[]): void {
    if (this.env.logging.enableConsole) {
      console.warn(`[WARN] ${message}`, ...optionalParams);
    }
  }

  error(message: string, ...optionalParams: unknown[]): void {
    if (this.env.logging.enableConsole) {
      console.error(`[ERROR] ${message}`, ...optionalParams);
    }
  }
}
