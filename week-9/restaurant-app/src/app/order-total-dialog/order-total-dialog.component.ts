/**
 * Title: order-total-dialog.component.ts
 * Author: Professor Krasso
 * Date: 22 September 2021
 * Description: Order dialog component
 */

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { Bill } from '../services/bill';

@Component({
  selector: 'app-order-total-dialog',
  templateUrl: './order-total-dialog.component.html',
  styleUrls: ['./order-total-dialog.component.css']
})
export class OrderTotalDialogComponent implements OnInit {
  // Component variables. 
  bill: Bill;

  constructor(private dialogRef: MatDialogRef<OrderTotalDialogComponent>, @Inject(MAT_DIALOG_DATA) data: any) { 
    this.bill = data.bill; // set the passed-in data object's bill property to the local bill variable. 
    console.log(this.bill); // Display the contents of the bill object to the console window. 
  }

  ngOnInit(): void {
  }

}
