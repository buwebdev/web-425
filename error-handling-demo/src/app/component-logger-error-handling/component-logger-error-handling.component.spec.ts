import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLoggerErrorHandlingComponent } from './component-logger-error-handling.component';

describe('ComponentLoggerErrorHandlingComponent', () => {
  let component: ComponentLoggerErrorHandlingComponent;
  let fixture: ComponentFixture<ComponentLoggerErrorHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentLoggerErrorHandlingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLoggerErrorHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
