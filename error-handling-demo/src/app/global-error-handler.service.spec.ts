import { TestBed } from '@angular/core/testing';
import { LoggerService } from './logger.service';
import { GlobalErrorHandlerService } from './global-error-handler.service';

describe('GlobalErrorHandlerService', () => {
  let handler: GlobalErrorHandlerService;
  let logger: jasmine.SpyObj<LoggerService>;

  beforeEach(() => {
    logger = jasmine.createSpyObj<LoggerService>('LoggerService', ['error']);
    TestBed.configureTestingModule({
      providers: [
        GlobalErrorHandlerService,
        { provide: LoggerService, useValue: logger }
      ]
    });
    handler = TestBed.inject(GlobalErrorHandlerService);
  });

  it('sends normalized errors to the logger service', () => {
    const error = new Error('Test failure');

    handler.handleError(error);

    expect(logger.error).toHaveBeenCalledWith(
      'Global error handler: Test failure',
      error.stack
    );
  });
});
