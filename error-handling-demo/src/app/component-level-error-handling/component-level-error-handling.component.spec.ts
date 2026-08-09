import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentLevelErrorHandlingComponent } from './component-level-error-handling.component';

describe('ComponentLevelErrorHandlingComponent', () => {
  let fixture: ComponentFixture<ComponentLevelErrorHandlingComponent>;
  let component: ComponentLevelErrorHandlingComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentLevelErrorHandlingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentLevelErrorHandlingComponent);
    component = fixture.componentInstance;
  });

  it('starts without an error message', () => {
    expect(component.errorMessage).toBe('');
  });

  it('catches the simulated failure and exposes a user-facing message', async () => {
    await component.triggerHandledError();

    expect(component.errorMessage).toBe('The simulated request could not be completed.');
    expect(component.isRunning).toBeFalse();
  });
});
