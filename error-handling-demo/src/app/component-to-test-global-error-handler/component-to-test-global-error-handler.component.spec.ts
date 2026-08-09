import { TestBed } from '@angular/core/testing';
import { ComponentToTestGlobalErrorHandlerComponent } from './component-to-test-global-error-handler.component';

describe('ComponentToTestGlobalErrorHandlerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentToTestGlobalErrorHandlerComponent]
    }).compileComponents();
  });

  it('throws the intentional demonstration error when triggered', () => {
    const fixture = TestBed.createComponent(ComponentToTestGlobalErrorHandlerComponent);

    expect(() => fixture.componentInstance.triggerGlobalError())
      .toThrowError(/unexpected error was triggered intentionally/);
  });
});
