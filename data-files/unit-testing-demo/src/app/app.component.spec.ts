import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Unit Testing Demo' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Unit Testing Demo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Unit Testing Demo');
  });

  // Simple addition test
  it('should add two numbers correctly', () => {
    const a = 5;
    const b = 3;
    const result = a + b;
    expect(result).toBe(8);
  });

  // Simple subtraction test
  it('should subtract two numbers correctly', () => {
    const a = 10;
    const b = 4;
    const result = a - b;
    expect(result).toEqual(6);
  });

  // Check if a function has been called (using a spy)
  it('should check if a method has been called', () => {
    const spyObj = jasmine.createSpyObj('AppComponent', ['dummyMethod']);
    spyObj.dummyMethod();
    expect(spyObj.dummyMethod).toHaveBeenCalled();
  });

  // Check if a value is truthy
  it('should check if a value is truthy', () => {
    const isAvailable = true;
    expect(isAvailable).toBeTruthy();
  });
});
