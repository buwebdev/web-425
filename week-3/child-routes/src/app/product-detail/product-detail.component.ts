import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  template: `
    <div class="product">
      <h1>Product Detail for Product: {{productId}}</h1>
      <router-outlet></router-outlet>
      <p><a [routerLink]="['./seller', sellerId]">Seller Info</a></p>
    </div>
  `,
  styles: [ `
    .product {
      background-color: cyan;
    }
  `
  ]
})
export class ProductDetailComponent implements OnInit {
  productId: string;
  sellerId = 5678;

  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
