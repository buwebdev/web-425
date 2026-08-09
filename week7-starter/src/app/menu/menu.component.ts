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
  imports: [CommonModule],
  template: `
    <section>
      <p class="w4-eyebrow">Made fresh to order</p>
      <h1>Our Menu</h1>
      <p class="w4-page-intro">
        Explore our selection of handcrafted tacos, each filled with fresh
        ingredients and vibrant flavors to satisfy your cravings.
      </p>

      <ul class="w4-grid w4-grid-3">
        @for (item of menu; track item.name; let i = $index) {
          <li class="menu-item">
            <article class="w4-card w4-card-tall">
              <div class="w4-card-header">
                <span class="w4-kicker">{{ (i + 1).toString().padStart(2, '0') }}</span>
                <span class="w4-badge">{{ item.price | currency }}</span>
              </div>
              <h3>{{ item.name }}</h3>
              <p class="w4-card-text">{{ item.description }}</p>
            </article>
          </li>
        }
      </ul>

      <div class="w4-callout w4-mt-4">
        <div>
          <h2>Found your favorite?</h2>
          <p>Customize it exactly how you like and add it to your order.</p>
        </div>
        <a href="/order" class="w4-btn w4-btn-primary">Order Now</a>
      </div>
    </section>
  `
})
export class MenuComponent {
  menu: MenuItem[];

  constructor() {
    this.menu = [
      { name: 'Carnitas Taco', description: 'Slow-cooked pork with fresh cilantro, onions, and salsa on a corn tortilla.', price: 3.25 },
      { name: 'Queso Birria Taco', description: 'Cheesy birria with cilantro, onions, and consomé for dipping.', price: 3.50 },
      { name: 'Al Pastor Taco', description: 'Marinated pork with pineapple, cilantro, and onions on a corn tortilla.', price: 3.25 },
      { name: 'Tacos de Lengua', description: 'Tender beef tongue with cilantro and onions on a corn tortilla.', price: 3.50 },
      { name: 'Chicken Taco', description: 'Grilled chicken with lettuce, tomatoes, and salsa on a corn tortilla.', price: 3.25 },
      { name: 'Fish Taco', description: 'Battered fish with cabbage slaw and creamy sauce on a flour tortilla.', price: 3.25 },
      { name: 'Veggie Taco', description: 'Grilled vegetables with black beans, cheese, and salsa on a corn tortilla.', price: 3.25 },
      { name: 'Chicharron Taco', description: 'Crispy pork rinds with salsa on a corn tortilla.', price: 3.25 },
      { name: 'Potato Taco', description: 'Fried potatoes with lettuce, cheese, and salsa on a corn tortilla.', price: 3.25 },
      { name: 'Chorizo Taco', description: 'Spicy sausage with onions and cilantro on a corn tortilla.', price: 3.25 }
    ];
  }
}
