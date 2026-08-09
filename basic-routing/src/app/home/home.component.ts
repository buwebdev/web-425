import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="w4-section" aria-labelledby="routing-heading">
      <p class="w4-eyebrow">Angular fundamentals</p>
      <h1 id="routing-heading">Basic routing, one concept at a time</h1>
      <p class="w4-page-intro">
        Use this demo to see how a route configuration connects a URL to a
        standalone component and renders it inside a router outlet.
      </p>

      <ul class="w4-grid w4-grid-3" aria-label="Routing concepts">
        <li class="w4-card w4-card-body">
          <span class="w4-step">1</span>
          <h2>Define routes</h2>
          <p class="w4-card-text">Map URL paths to components in <code>app.routes.ts</code>.</p>
        </li>
        <li class="w4-card w4-card-body">
          <span class="w4-step">2</span>
          <h2>Create links</h2>
          <p class="w4-card-text">Use <code>routerLink</code> instead of reloading the browser.</p>
        </li>
        <li class="w4-card w4-card-body">
          <span class="w4-step">3</span>
          <h2>Render a page</h2>
          <p class="w4-card-text">Angular displays the matched component in <code>router-outlet</code>.</p>
        </li>
      </ul>

      <div class="w4-actions w4-mt-4">
        <a class="w4-btn w4-btn-primary" routerLink="/course">View the route-data example</a>
        <a class="w4-link-arrow" routerLink="/missing-page">Try an unknown URL &rarr;</a>
      </div>
    </section>
  `
})
export class HomeComponent {}
