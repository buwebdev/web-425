import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySpecialsComponent } from './daily-specials.component';

describe('DailySpecialsComponent', () => {
  let component: DailySpecialsComponent;
  let fixture: ComponentFixture<DailySpecialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailySpecialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailySpecialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
