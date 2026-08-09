import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="w4-empty-state" aria-labelledby="not-found-heading">
      <span class="w4-empty-icon" aria-hidden="true">404</span>
      <h1 id="not-found-heading">Page not found</h1>
      <p>The wildcard route caught a URL that did not match another route.</p>
      <a class="w4-btn w4-btn-primary" routerLink="/">Return home</a>
    </section>
  `
})
export class NotFoundComponent {}
