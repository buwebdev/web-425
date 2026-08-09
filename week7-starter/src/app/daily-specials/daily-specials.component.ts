import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

export interface DailySpecial {
  day: string;
  shortDay: string;
  dayIndex: number;
  name: string;
  description: string;
  price: number;
  availability: string;
  includes: string[];
}

@Component({
  selector: 'app-daily-specials',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <section aria-labelledby="daily-specials-heading">
      <p class="w4-eyebrow">A little something extra</p>
      <h1 id="daily-specials-heading">Daily Specials</h1>
      <p class="w4-page-intro">
        Seven days, seven reasons to stop by. Select a day to explore our
        rotating offers, prepared in limited quantities throughout the day.
      </p>

      <div class="w4-panel">
        <div class="w4-heading-row">
          <div>
            <p class="w4-eyebrow">Plan your visit</p>
            <h2>Weekly lineup</h2>
          </div>
          <span class="w4-badge">7 rotating offers</span>
        </div>

        <div class="w4-choice-group" role="group" aria-label="Choose a day of the week">
          @for (special of specials; track special.day) {
            <button
              type="button"
              class="w4-choice"
              [class.w4-choice-active]="selectedSpecial.day === special.day"
              [attr.aria-pressed]="selectedSpecial.day === special.day"
              (click)="selectSpecial(special)"
            >
              {{ special.shortDay }}
            </button>
          }
        </div>
      </div>

      <div class="w4-grid w4-grid-split w4-mt-4" aria-live="polite">
        <article class="w4-panel w4-panel-feature">
          <div class="w4-card-header">
            <span class="w4-kicker">{{ selectedSpecial.day }} special</span>
            @if (selectedSpecial.dayIndex === todayIndex) {
              <span class="w4-badge">Today</span>
            }
          </div>

          <h2>{{ selectedSpecial.name }}</h2>
          <p class="w4-feature-copy">{{ selectedSpecial.description }}</p>

          <div class="w4-price">
            <span>Special price</span>
            <strong>{{ selectedSpecial.price | currency:'USD':'symbol':'1.2-2' }}</strong>
          </div>
        </article>

        <aside class="w4-panel" aria-labelledby="special-details-heading">
          <div class="w4-section-heading">
            <span class="w4-step">01</span>
            <div>
              <h2 id="special-details-heading">What’s included</h2>
              <p>Everything that comes with this offer.</p>
            </div>
          </div>

          <ul class="w4-feature-list">
            @for (item of selectedSpecial.includes; track item) {
              <li>{{ item }}</li>
            }
          </ul>

          <div class="w4-meta-row">
            <div>
              <span class="w4-meta-label">Availability</span>
              <strong>{{ selectedSpecial.availability }}</strong>
            </div>
          </div>
        </aside>
      </div>

      <aside class="w4-callout w4-mt-4">
        <div>
          <p class="w4-eyebrow">Still deciding?</p>
          <h2>Every favorite is available all day.</h2>
          <p>Browse the regular menu whenever you are ready to build your order.</p>
        </div>
        <a href="/menu" class="w4-btn w4-btn-primary">View Our Menu</a>
      </aside>
    </section>
  `
})
export class DailySpecialsComponent {
  readonly todayIndex = new Date().getDay();

  readonly specials: DailySpecial[] = [
    {
      day: 'Monday',
      shortDay: 'Mon',
      dayIndex: 1,
      name: 'Carnitas Lunch Plate',
      description: 'Slow-cooked carnitas served as a complete downtown lunch with the bright, fresh flavors that start the week right.',
      price: 10.25,
      availability: '11:00 a.m. – 3:00 p.m.',
      includes: ['Two carnitas tacos', 'Seasoned rice', 'Black beans', 'House salsa']
    },
    {
      day: 'Tuesday',
      shortDay: 'Tue',
      dayIndex: 2,
      name: 'Taco Tuesday Trio',
      description: 'Mix and match three street tacos for a midweek-worthy price. Choose any combination from our regular taco menu.',
      price: 8.75,
      availability: 'All day while supplies last',
      includes: ['Three tacos of your choice', 'House salsa', 'Fresh lime wedges']
    },
    {
      day: 'Wednesday',
      shortDay: 'Wed',
      dayIndex: 3,
      name: 'Birria & Consomé',
      description: 'Rich queso birria tacos with a savory dipping broth, finished with fresh onion, cilantro, and lime.',
      price: 10.50,
      availability: '4:00 p.m. – close',
      includes: ['Two queso birria tacos', 'Warm consomé', 'Onion and cilantro', 'Fresh lime wedges']
    },
    {
      day: 'Thursday',
      shortDay: 'Thu',
      dayIndex: 4,
      name: 'Al Pastor Plate',
      description: 'Chile-marinated pork and caramelized pineapple bring sweet heat to a generously portioned Thursday favorite.',
      price: 9.75,
      availability: '11:00 a.m. – 8:00 p.m.',
      includes: ['Two al pastor tacos', 'Pineapple pico', 'Seasoned rice', 'House salsa']
    },
    {
      day: 'Friday',
      shortDay: 'Fri',
      dayIndex: 5,
      name: 'Fish Taco Friday',
      description: 'Crisp fish tacos layered with cabbage slaw and creamy sauce for a bright finish to the workweek.',
      price: 9.50,
      availability: '11:00 a.m. – close',
      includes: ['Two fish tacos', 'Cabbage slaw', 'Creamy house sauce', 'Fresh lime wedges']
    },
    {
      day: 'Saturday',
      shortDay: 'Sat',
      dayIndex: 6,
      name: 'Street Taco Sampler',
      description: 'A tour of the stand featuring four distinct tacos selected from our most popular fillings.',
      price: 12.50,
      availability: 'Noon – close',
      includes: ['Four different street tacos', 'Two house salsas', 'Pickled onions', 'Fresh lime wedges']
    },
    {
      day: 'Sunday',
      shortDay: 'Sun',
      dayIndex: 0,
      name: 'Family Taco Box',
      description: 'A shareable spread designed for an easy Sunday meal, with plenty of fresh toppings for everyone at the table.',
      price: 24,
      availability: 'Noon – 8:00 p.m.',
      includes: ['Eight tacos of your choice', 'Seasoned rice', 'Black beans', 'Toppings and two salsas']
    }
  ];

  selectedSpecial = this.specials.find((special) => special.dayIndex === this.todayIndex) ?? this.specials[0];

  selectSpecial(special: DailySpecial) {
    this.selectedSpecial = special;
  }
}
