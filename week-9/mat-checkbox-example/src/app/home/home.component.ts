/**
 * Title: home.component.ts
 * Author: Professor Krasso
 * Date: 9 September 2020
 * Description: Home component 
 */

import { Component, OnInit } from '@angular/core';
import { IFruit } from '../fruit.interface';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fruits: Array<IFruit>; // variable to hold an array of fruit objects
  selectedFruits: Array<IFruit>; // variable to hold the selected fruit objects
  fruitForm: FormGroup; // variable to build the Angular form

  constructor(private fb: FormBuilder) { 

    /**
     * Creates a new array of fruit objects
     */
    this.fruits = [
      { 
        id: 100, 
        name: 'Apple',
      },
      {
        id: 101,
        name: 'Pear'
      },
      {
        id: 102,
        name: 'Orange'
      },
      {
        id: 103,
        name: 'Grade'
      }
    ]
  }

  /**
   * Returns the FormArray; this is needed to access the fruitOptions field 
   */
  get fruitFormArray(): FormArray {
    return this.fruitForm.controls.fruitOptions as FormArray;
  }

  /**
   * Dynamically adds form controls to the FormArray. Setting the control to false, sets the checkboxes to unselected.
   */
  private addFruitCheckboxes(): void {
    this.fruits.forEach(() => this.fruitFormArray.push(new FormControl(false)));
  }

  ngOnInit(): void {
    /**
     * Creates a new Angular Reactive Form
     */
    this.fruitForm = this.fb.group({
      fruitOptions: new FormArray([])
    })

    /**
     * Adds the checkboxes to the Fruit Form. 
     */
    this.addFruitCheckboxes();
  }

  onSubmit() {

    /**
     * Loops over the Form and builds a new array of only the selected Fruit objects. We are looking for the "checked status" and using 
     * the filter() function to remove the non-selected fruit objects. 
     */
    this.selectedFruits = this.fruitForm.value.fruitOptions
      .map((checked, index) => checked ? this.fruits[index] : null)
      .filter(v => v !== null); 

      /**
       * Writes the selected objects to the browsers console window.
       */
      console.log(this.selectedFruits);
  }
}
