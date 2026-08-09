import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoggerService } from '../logger.service';
import { ComponentLoggerErrorHandlingComponent } from './component-logger-error-handling.component';

describe('ComponentLoggerErrorHandlingComponent', () => {
  let fixture: ComponentFixture<ComponentLoggerErrorHandlingComponent>;
  let component: ComponentLoggerErrorHandlingComponent;
  let logger: jasmine.SpyObj<LoggerService>;

  beforeEach(async () => {
    logger = jasmine.createSpyObj<LoggerService>('LoggerService', ['log', 'warn', 'error']);

    await TestBed.configureTestingModule({
      imports: [ComponentLoggerErrorHandlingComponent],
      providers: [{ provide: LoggerService, useValue: logger }]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentLoggerErrorHandlingComponent);
    component = fixture.componentInstance;
  });

  it('waits for the user before writing messages', () => {
    expect(logger.log).not.toHaveBeenCalled();
    expect(component.messagesWritten).toBeFalse();
  });

  it('writes all three message levels when triggered', () => {
    component.writeMessages();

    expect(logger.log).toHaveBeenCalledOnceWith('Logger demo: informational message.');
    expect(logger.warn).toHaveBeenCalledOnceWith('Logger demo: warning message.');
    expect(logger.error).toHaveBeenCalledOnceWith('Logger demo: error message.');
    expect(component.messagesWritten).toBeTrue();
  });
});
