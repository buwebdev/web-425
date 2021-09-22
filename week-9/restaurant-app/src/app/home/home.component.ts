/**
 * Title: home.component.ts
 * Author: Professor Krasso
 * Date: 22 September 2021
 * Description: Home component 
 */

import { OrderTotalDialogComponent } from './../order-total-dialog/order-total-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Beverage } from '../models/beverage.interface';
import { MainCourse } from '../models/main-course.interface';
import { Dessert } from '../models/dessert.interface';
import { Bill } from '../services/bill';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Component variables
  beverages: Beverage[];
  mainCourses: MainCourse[];
  desserts: Dessert[]; 
  bill: Bill;

  constructor(private dialog: MatDialog, private menuService: MenuService) { 
    this.beverages = menuService.getBeverages(); 
    this.mainCourses = menuService.getMainCourses();
    this.desserts = menuService.getDesserts();
    this.bill = new Bill();
  }

  ngOnInit(): void {

  }

  /**
   * Clears the bill. 
   * @returns {void}
   */
  clearBill(): void {
    /**
     * Iterate over the beverages array and set each objects checked property to false.
     */
    for (let item of this.beverages) {
      item.checked = false;
    }

    /**
     * Iterate over the mainCourses array and set each objects checked property to false.
     */
    for (let item of this.mainCourses) {
      item.checked = false;
    }

    /**
     * Iterate over the desserts array and set each objects checked property to false.
     */
    for (let item of this.desserts) {
      item.checked = false;
    }

    this.bill = new Bill(); // return a new instance of the Bill object.
  }

  /**
   * Handles the forms submission.
   * @returns {void}
   */
  submit(): void {
    // Output the contents of each array to the console window.
    console.log(this.beverages)
    console.log(this.mainCourses);
    console.log(this.desserts);

    /**
     * Iterate over the beverages array and if the checked property equals true, call the addMenuItem() function, 
     * and push the object to the menuItems array.
     */
    for (let item of this.beverages) {
      if (item.checked) {
        this.bill.addMenuItem(item);
      }
    }

    /**
     * Iterate over the mainCourses array and if the checked property equals true, call the addMenuItem() function, 
     * and push the object to the menuItems array.
     */
    for (let item of this.mainCourses) {
      if (item.checked) {
        this.bill.addMenuItem(item);
      }
    }

    /**
     * Iterate over the desserts array and if the checked property equals true, call the addMenuItem() function, 
     * and push the object to the menuItems array.
     */
    for (let item of this.desserts) {
      if (item.checked) {
        this.bill.addMenuItem(item);
      }
    }

    console.log(this.bill.menuItems);  // Display the contents of the menuItems array to console window.
    console.log(this.bill.getMenuTotal()); // Display the menu total to the console window.

    /**
     * Open the OrderTotalDialogComponent, passing-in the bill object, set the disableClose to true, 
     * and set the width to 800 pixels.
     */
    const dialogRef = this.dialog.open(OrderTotalDialogComponent, {
      data: {
        bill: this.bill
      },
      disableClose: true,
      width: '800px'
    })

    /**
     * Subscribe to the event triggered by the OrderTotalDialogComponent, display an alert message, 
     * and call the clearBill() function to reset the form. 
     */
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        alert('Your order has been processed!');
        this.clearBill();
      } else {
        alert('Your order has been canceled.');
        this.clearBill();
      }
    })
  }
}
