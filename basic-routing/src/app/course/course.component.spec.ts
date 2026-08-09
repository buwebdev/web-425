import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { CourseComponent } from './course.component';

describe('CourseComponent', () => {
  let fixture: ComponentFixture<CourseComponent>;
  let component: CourseComponent;

  const routeData = {
    courseCode: 'WEB 425',
    heading: 'Passing TypeScript data to a routed page',
    description: 'Route data test description',
    concepts: ['Routes.data', 'ActivatedRoute']
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { data: routeData } }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('reads data supplied by the route configuration', () => {
    expect(component.routeData).toEqual(routeData);
  });

  it('renders route data in the page', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent).toContain(routeData.heading);
    expect(page.textContent).toContain(routeData.courseCode);
  });
});
