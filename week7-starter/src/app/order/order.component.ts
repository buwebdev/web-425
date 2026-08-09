export interface Taco {
  id: number;
  name: string;
  price: number;
  noOnions?: boolean;
  noCilantro?: boolean;
  quantity?: number;
}

export interface Order {
  tacos: Taco[];
  orderId: number;
}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderSummaryComponent } from '../order-summary/order-summary.component';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule, CommonModule, OrderSummaryComponent],
  template: `
    <section>
      <p class="w4-eyebrow">Made exactly your way</p>
      <h1>Build Your Order</h1>
      <p class="w4-page-intro">Choose a favorite, add your customizations, and watch your order come together.</p>

      <div class="w4-grid w4-grid-split">
        <form class="w4-panel w4-form" #tacoOrderForm="ngForm" (ngSubmit)="addToOrder()">
          <div class="w4-section-heading">
            <span class="w4-step">01</span>
            <div>
              <h2>Choose your taco</h2>
              <p>Complete the form below to place a new order.</p>
            </div>
          </div>

          <fieldset>
            <legend>My Order</legend>

            <div class="w4-field">
              <label for="tacoType">Taco Type</label>
              <select name="tacoType" id="tacoType" [(ngModel)]="selectedTacoId">
                @for (taco of tacos; track taco.id) {
                  <option [value]="taco.id">{{ taco.name }} — {{ taco.price | currency }}</option>
                }
              </select>
            </div>

            <div class="w4-field w4-field-compact">
              <label for="qty">Quantity</label>
              <input type="number" id="qty" name="qty" min="1" inputmode="numeric" [(ngModel)]="quantity" />
            </div>

            <div class="w4-form-section">
              <span class="w4-label">Customize</span>
              <p class="w4-field-hint">Prefer to skip an ingredient? Let us know.</p>

              <div class="w4-choice-grid">
                <label class="w4-choice-card" for="noOnions">
                  <input type="checkbox" id="noOnions" name="noOnions" [(ngModel)]="noOnions" />
                  <span><strong>No Onions</strong><small>Leave off the onions</small></span>
                </label>

                <label class="w4-choice-card" for="noCilantro">
                  <input type="checkbox" id="noCilantro" name="noCilantro" [(ngModel)]="noCilantro" />
                  <span><strong>No Cilantro</strong><small>Leave off the cilantro</small></span>
                </label>
              </div>
            </div>

            <input class="w4-btn w4-btn-primary w4-btn-block" type="submit" value="Add to Order" />
          </fieldset>
        </form>

        <div class="w4-panel w4-panel-sticky">
          <div class="w4-section-heading">
            <span class="w4-step">02</span>
            <div>
              <h2>Review your picks</h2>
              <p>Items and totals update as you build.</p>
            </div>
          </div>
          <app-order-summary [order]="order" />
        </div>
      </div>
    </section>
  `
})
export class OrderComponent {
  tacos: Taco[];
  order: Order;
  selectedTacoId: number;
  quantity: number;
  noOnions = false;
  noCilantro = false;
  orderTotal: number;

  @Output() orderUpdated = new EventEmitter<Order>();

  constructor() {
    this.tacos = [
      { id: 1, name: 'Carnitas Taco', price: 3.25 },
      { id: 2, name: 'Queso Birria Taco', price: 3.50 },
      { id: 3, name: 'Al Pastor Taco', price: 3.25 },
      { id: 4, name: 'Tacos de Lengua', price: 3.50 },
      { id: 5, name: 'Chicken Taco', price: 3.25 },
      { id: 6, name: 'Fish Taco', price: 3.25 },
      { id: 7, name: 'Veggie Taco', price: 3.25 },
      { id: 8, name: 'Chicharron Taco', price: 3.25 },
      { id: 9, name: 'Potato Taco', price: 3.25 },
      { id: 10, name: 'Chorizo Taco', price: 3.25 }
    ];

    this.order = { tacos: [], orderId: 0 };
    this.selectedTacoId = this.tacos[0].id;
    this.quantity = 1;
    this.orderTotal = 0;
  }

  addToOrder() {
    const selectedTacoNum = Number(this.selectedTacoId);
    const selectedTaco = this.tacos.find(taco => taco.id === selectedTacoNum);
    this.order.orderId = Math.floor(Math.random() * 1000) + 1;

    if (selectedTaco !== undefined) {
      const tacoToAdd: Taco = {
        id: selectedTaco.id,
        name: selectedTaco.name,
        price: selectedTaco.price,
        noOnions: this.noOnions,
        noCilantro: this.noCilantro,
        quantity: this.quantity
      };

      this.order = { ...this.order, tacos: [...this.order.tacos, tacoToAdd] };
      this.orderUpdated.emit(this.order);
      this.resetForm();
    } else {
      console.error('Taco not found in the list of available tacos.', this.selectedTacoId);
    }
  }

  resetForm() {
    if (this.tacos.length > 0) {
      this.selectedTacoId = this.tacos[0].id;
    }
    this.quantity = 1;
    this.noOnions = false;
    this.noCilantro = false;
  }
}
