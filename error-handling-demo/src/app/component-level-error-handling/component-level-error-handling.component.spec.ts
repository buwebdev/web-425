import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLevelErrorHandlingComponent } from './component-level-error-handling.component';

describe('ComponentLevelErrorHandlingComponent', () => {
  let component: ComponentLevelErrorHandlingComponent;
  let fixture: ComponentFixture<ComponentLevelErrorHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentLevelErrorHandlingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLevelErrorHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
