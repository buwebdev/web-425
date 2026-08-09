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
    fixture.detectChanges();
  });

  it('creates the portfolio starter', () => {
    expect(component).toBeTruthy();
  });

  it('renders the replaceable student name', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent).toContain(component.studentName);
  });

  it('renders every skill from the component data', () => {
    const skillItems = fixture.nativeElement.querySelectorAll('.skill-list li');

    expect(skillItems.length).toBe(component.skills.length);
  });

  it('renders every project from the component data', () => {
    const projectCards = fixture.nativeElement.querySelectorAll('.project-card');

    expect(projectCards.length).toBe(component.projects.length);
  });
});
