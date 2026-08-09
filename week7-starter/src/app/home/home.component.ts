import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <section class="w4-hero">
      <div>
        <p class="w4-eyebrow">Open 24 hours · 7 days a week</p>
        <h1>Big downtown flavor, one taco at a time.</h1>
        <p class="w4-hero-intro">
          From Tacos Al Pastor to our famous Birria Tacos, we serve fresh,
          satisfying food around the clock in the heart of downtown.
        </p>
        <div class="w4-actions">
          <a href="/order" class="w4-btn w4-btn-primary">Start an Order</a>
          <a href="/menu" class="w4-link-arrow">Explore the Menu <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div class="w4-hero-media">
        <img
          src="/assets/hero-tacos.webp"
          alt="Three freshly prepared tacos at a warmly lit downtown taco stand"
          class="w4-hero-image"
          width="1600"
          height="768"
          decoding="async"
          fetchpriority="high"
        />
        <div class="w4-floating-badge">
          <strong>Fresh daily</strong>
          <span>Made to order</span>
        </div>
      </div>
    </section>

    <section class="w4-section" aria-labelledby="story-heading">
      <div class="w4-heading-split">
        <div>
          <p class="w4-eyebrow">Meet your neighborhood stand</p>
          <h2 id="story-heading">Virtual Taco Stand</h2>
        </div>
        <p>
          We specialize in good-ole home cooking and a variety of daily specials
          sure to please your taste buds. Come on down and see us!
        </p>
      </div>

      <div class="w4-grid w4-grid-3">
        <article class="w4-card w4-card-media">
          <img
            src="/assets/downtown-stand.webp"
            alt="A warmly lit taco stand serving customers on a downtown street at night"
            width="1200"
            height="800"
            loading="lazy"
            decoding="async"
          />
          <div class="w4-card-body">
            <p class="w4-kicker">01</p>
            <h3>In the heart of downtown</h3>
            <p class="w4-card-text">
              Fresh, vibrant, and bursting with authentic Mexican flavor, our tacos
              are a downtown must-try. Every bite tells a story of tradition and taste.
            </p>
          </div>
        </article>

        <article class="w4-card w4-card-media">
          <img
            src="/assets/taco-craft.webp"
            alt="A cook carefully finishing fresh tacos with cilantro and salsa"
            width="1200"
            height="675"
            loading="lazy"
            decoding="async"
          />
          <div class="w4-card-body">
            <p class="w4-kicker">02</p>
            <h3>Crafted with care</h3>
            <p class="w4-card-text">
              Join us for an unforgettable culinary journey crafted by passionate
              taco artisans, where tradition and fresh ideas come together.
            </p>
          </div>
        </article>

        <article class="w4-card w4-card-media">
          <img
            src="/assets/taco-variety.webp"
            alt="An overhead assortment of six freshly prepared tacos with salsa and lime"
            width="1200"
            height="675"
            loading="lazy"
            decoding="async"
          />
          <div class="w4-card-body">
            <p class="w4-kicker">03</p>
            <h3>A flavor for everyone</h3>
            <p class="w4-card-text">
              Every taco is made with fresh ingredients and bold flavors. They are
              perfect for sharing—or keeping all to yourself.
            </p>
          </div>
        </article>
      </div>
    </section>

    <aside class="w4-callout">
      <div>
        <p class="w4-eyebrow">Planning something special?</p>
        <h2>Having a party? We cater.</h2>
        <p>Give us a call and we will be happy to help with your catering needs.</p>
      </div>
      <a href="/feedback" class="w4-link-arrow">Get in touch <span aria-hidden="true">→</span></a>
    </aside>
  `
})
export class HomeComponent {}
