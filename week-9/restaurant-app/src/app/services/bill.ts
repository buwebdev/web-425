/**
 * Title: bill.ts
 * Author: Professor Krasso
 * Date: 22 September 2021
 * Description: Bill class
 */

import { MenuItem } from "../models/menu-item.interface";

export class Bill {
  // Class variables. 
  menuItems: MenuItem[]; // Variable for storing MenuItem objects.
  tipAmount: number; // variable for the bill's tip amount.

  constructor() {
    this.menuItems = []; // Set the menuItems variable to an empty array.
    this.tipAmount = 0; // Set the tipAmount variable to 0.
  }

  /**
   * Add menu item
   * @param {MenuItem} menuItem 
   */
  addMenuItem(menuItem: MenuItem): void {
    this.menuItems.push(menuItem);
  }

  /**
   * Get menu total.
   * @returns {number} total - Sum of the menu item totals.
   */
  getMenuTotal(): number {
    let total: number = 0; 

    /**
     * Iterate over the menuItems array and create a running total of 
     * the stored menuItem amount.
     */
    for (let menuItem of this.menuItems) {
      total += menuItem.amount; // Create a running total of the menuItem.amount.
    }

    return total;
  }

  /**
   * Get bill amount.
   * @returns {number} total - Sum of the menu item totals and tip amount.
   */
  getBillTotal(): number {
    const menuTotal: number = this.getMenuTotal(); // Set the menu item's total. 
    const tip: number = this.getTipAmount(); // Set the tip amount. 
    const total: number = Number(menuTotal) + Number(tip); // Calculate the bill's total by adding the menu item total and tip amount.

    return total;
  }

  /**
   * Get tip amount.
   * @returns {number} tipAmount - The tipAmount value.
   */
  getTipAmount(): number {
    return this.tipAmount;
  }
}