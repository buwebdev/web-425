import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentToTestGlobalErrorHandlerComponent } from './component-to-test-global-error-handler.component';

describe('ComponentToTestGlobalErrorHandlerComponent', () => {
  let component: ComponentToTestGlobalErrorHandlerComponent;
  let fixture: ComponentFixture<ComponentToTestGlobalErrorHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentToTestGlobalErrorHandlerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentToTestGlobalErrorHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
