export interface MenuItem {
  name: string;
  description: string;
  price: number;
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ CommonModule ],
  template: `
    <div>
      <h1>Our Menu</h1>
      <p>Explore our selection of handcrafted tacos, each filled with fresh ingredients and vibrant flavors to satisfy your cravings.</p>

      <ul class="menu-container">
        @for (item of menu; track item) {
          <li class="menu-item">
            <div class="card">
              <h3>{{ item.name }}</h3>
              <p>{{ item.description }}</p>
              <p>{{ item.price | currency }}</p>
            </div>
          </li>
        }
      </ul>
    </div>
  `,
  styles: [
    `
      .menu-container {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
      }

      .menu-item {
        flex: 0 1 calc(33.33% - 20px);
        margin: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      .card {
        padding: 20px;
        background-color: white;
      }
    `
  ]
})
export class MenuComponent {
  menu: MenuItem[];

  constructor() {
    this.menu = [
      {
        "name": "Carnitas Taco",
        "description": "Slow-cooked pork with fresh cilantro, onions, and salsa on a corn tortilla.",
        "price": 3.25
      },
      {
        "name": "Queso Birria Taco",
        "description": "Cheesy birria with cilantro, onions, and consomé for dipping.",
        "price": 3.50
      },
      {
        "name": "Al Pastor Taco",
        "description": "Marinated pork with pineapple, cilantro, and onions on a corn tortilla.",
        "price": 3.25
      },
      {
        "name": "Tacos de Lengua",
        "description": "Tender beef tongue with cilantro and onions on a corn tortilla.",
        "price": 3.50
      },
      {
        "name": "Chicken Taco",
        "description": "Grilled chicken with lettuce, tomatoes, and salsa on a corn tortilla.",
        "price": 3.25
      },
      {
        "name": "Fish Taco",
        "description": "Battered fish with cabbage slaw and creamy sauce on a flour tortilla.",
        "price": 3.25
      },
      {
        "name": "Veggie Taco",
        "description": "Grilled vegetables with black beans, cheese, and salsa on a corn tortilla.",
        "price": 3.25
      },
      {
        "name": "Chicharron Taco",
        "description": "Crispy pork rinds with salsa on a corn tortilla.",
        "price": 3.25
      },
      {
        "name": "Potato Taco",
        "description": "Fried potatoes with lettuce, cheese, and salsa on a corn tortilla.",
        "price": 3.25
      },
      {
        "name": "Chorizo Taco",
        "description": "Spicy sausage with onions and cilantro on a corn tortilla.",
        "price": 3.25
      },
    ];
  }
}
