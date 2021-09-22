/**
 * Title: menu.service.ts
 * Author: Professor Krasso
 * Date: 22 September 2021
 * Description: Menu service.
 */

import { Injectable } from '@angular/core';
import { Beverage } from '../models/beverage.interface';
import { MainCourse } from '../models/main-course.interface';
import { Dessert } from '../models/dessert.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor() { }

  /**
   * Get beverages.
   * @returns {Beverage[]} beverages - Array of Beverage objects.
   */
  getBeverages(): Beverage[] {
    const beverages: Beverage[] = [
      {
        title: 'Soda',
        amount: 3.30,
        checked: false
      },
      {
        title: 'Sweet Tea',
        amount: 3.30,
        checked: false
      },
      {
        title: 'Iced Coffee',
        amount: 2.49,
        checked: false
      },
      {
        title: 'Bottled Water',
        amount: 2.15,
        checked: false
      }
    ];
    
    return beverages;
  }

  /**
   * Get main courses.
   * @returns {MainCourse[]} mainCourses - Array of MainCourse objects.
   */
  getMainCourses(): MainCourse[] {
    const mainCourses: MainCourse[] = [
      {
        title: 'Street Tacos',
        amount: 9.70,
        checked: false
      },
      {
        title: 'Boneless Wings',
        amount: 12.80,
        checked: false
      },
      {
        title: 'Cheese Burger with Fries',
        amount: 12.65,
        checked: false
      },
      {
        title: 'Chicken Wrap with Salad',
        amount: 12.65,
        checked: false
      }
    ];

    return mainCourses;
  }

  /**
   * Get desserts.
   * @returns {Dessert[]} desserts - Array of Dessert objects.
   */
  getDesserts(): Dessert[] {
    const desserts: Dessert[] = [
      {
        title: 'Ice Cream',
        amount: 4.30,
        checked: false
      },
      {
        title: 'Chocolate Cake',
        amount: 5.40,
        checked: false
      },
      {
        title: 'Apple Pie',
        amount: 5.40,
        checked: false
      }
    ];

    return desserts;
  }
}
