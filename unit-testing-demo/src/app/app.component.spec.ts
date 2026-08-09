import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('creates the application', () => {
    expect(component).toBeTruthy();
  });

  it('uses the Unit Testing Demo title', () => {
    expect(component.title).toBe('Unit Testing Demo');
  });

  it('renders the title and welcome message', () => {
    fixture.detectChanges();
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent).toContain(component.title);
    expect(page.textContent).toContain(component.welcome);
  });

  it('adds two numbers using application code', () => {
    expect(component.add(5, 3)).toBe(8);
  });

  it('subtracts two numbers using application code', () => {
    expect(component.subtract(10, 4)).toBe(6);
  });

  it('calls announce with the expected message', () => {
    const announceSpy = spyOn(component, 'announce').and.callThrough();

    component.runAnnouncement();

    expect(announceSpy).toHaveBeenCalledOnceWith(
      'The component method was called successfully.'
    );
    expect(component.announcement).toBe('The component method was called successfully.');
  });

  it('updates the rendered availability after a button click', () => {
    fixture.detectChanges();
    const page = fixture.nativeElement as HTMLElement;
    const button = page.querySelector<HTMLButtonElement>('[data-testid="availability-button"]');

    button?.click();
    fixture.detectChanges();

    expect(component.isAvailable).toBeFalse();
    expect(page.querySelector('[data-testid="availability-status"]')?.textContent)
      .toContain('Unavailable');
  });
});
