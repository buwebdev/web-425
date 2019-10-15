import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'product-detail',
  template: `
    <h1 class="product">Product Detail Component</h1>
    <input placeholder="Enter your name" type="text" [formControl]="name">
  `,
  styles: [ `
    .product { backgorund-color: cyan;}
  `]
})
export class ProductDetailComponent implements OnInit {

  name: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
