import { ErrorHandler, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private readonly logger: LoggerService) {}

  handleError(error: unknown): void {
    const normalizedError = error instanceof Error
      ? error
      : new Error(String(error));

    this.logger.error(
      `Global error handler: ${normalizedError.message}`,
      normalizedError.stack
    );
  }
}
