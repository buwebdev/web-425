import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error-handling-overview',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="w4-section" aria-labelledby="overview-heading">
      <p class="w4-eyebrow">Angular error handling</p>
      <h1 id="overview-heading">Choose the right level of responsibility</h1>
      <p class="w4-page-intro">
        Each example waits for you to trigger it, making the cause, handling
        strategy, and observable result easy to compare.
      </p>

      <ul class="w4-grid w4-grid-3" aria-label="Error handling strategies">
        <li class="w4-card w4-card-body">
          <span class="w4-step">1</span>
          <h2>Logger service</h2>
          <p class="w4-card-text">Centralize informational, warning, and error output.</p>
          <a class="w4-link-arrow" routerLink="/logger">Open logger demo &rarr;</a>
        </li>
        <li class="w4-card w4-card-body">
          <span class="w4-step">2</span>
          <h2>Component handling</h2>
          <p class="w4-card-text">Catch a recoverable failure close to the user interaction.</p>
          <a class="w4-link-arrow" routerLink="/component-error">Open component demo &rarr;</a>
        </li>
        <li class="w4-card w4-card-body">
          <span class="w4-step">3</span>
          <h2>Global handler</h2>
          <p class="w4-card-text">Provide a final application-wide safety net for unexpected errors.</p>
          <a class="w4-link-arrow" routerLink="/global-error">Open global demo &rarr;</a>
        </li>
      </ul>
    </section>
  `
})
export class ErrorHandlingOverviewComponent {}
