import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { Order } from '../order/order.component';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 class="w4-sr-only">Order Summary</h1>
    @if (order.tacos.length > 0) {
      <ul class="w4-summary-list">
        @for (taco of order.tacos; track $index) {
          <li>
            <div class="w4-item-heading">
              <strong>{{ taco.quantity }}x {{ taco.name }}</strong>
            </div>
            <div class="w4-detail-list">
              <p>Price per taco: <span>{{ taco.price | currency:'USD':'symbol':'1.2-2' }}</span></p>
              @if (taco.noOnions) {
                <p>No onions</p>
              }
              @if (taco.noCilantro) {
                <p>No cilantro</p>
              }
            </div>
          </li>
        }
      </ul>
      <div class="w4-summary-total">
        <span>Total:</span>
        <strong>{{ getTotal() | currency:'USD':'symbol':'1.2-2' }}</strong>
      </div>
    } @else {
      <div class="w4-empty-state">
        <p>No tacos added to the order yet.</p>
      </div>
    }
  `
})
export class OrderSummaryComponent {
  private readonly orderState = signal<Order>({ orderId: 0, tacos: [] });

  @Input()
  set order(value: Order) {
    this.orderState.set(value);
  }

  get order() {
    return this.orderState();
  }

  getTotal() {
    return this.order.tacos.reduce((acc, taco) => acc + (taco.price * (taco.quantity ?? 1)), 0);
  }
}
