/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Date: 24 April 2020
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = "Assignment 5.4 - Dialogs";
  }
}
