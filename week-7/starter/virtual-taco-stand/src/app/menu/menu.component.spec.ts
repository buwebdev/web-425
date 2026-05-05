import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Created by default when the component is generated
   * Unit test 1
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Unit test 2
   */
  it('should correctly display a list of tacos', () => {
    const compiled = fixture.nativeElement as HTMLElement; // Get the compiled HTML of the component
    const menuItems = compiled.querySelectorAll('.menu-item'); // Get all the menu items
    expect(menuItems.length).toEqual(component.menu.length); // Check if the number of menu items is equal to the number of items in the menu array
  });
});
