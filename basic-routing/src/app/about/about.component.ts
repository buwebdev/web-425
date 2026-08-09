import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="w4-section" aria-labelledby="about-heading">
      <p class="w4-eyebrow">About this demo</p>
      <h1 id="about-heading">A small route is easier to understand</h1>
      <p class="w4-page-intro">
        Each page is a standalone component. The route configuration decides
        which component Angular displays for the current URL.
      </p>
      <div class="w4-panel">
        <h2>Explore the source</h2>
        <p>
          Compare this component with <code>app.routes.ts</code>, then inspect
          the root component to see <code>routerLink</code>,
          <code>routerLinkActive</code>, and <code>router-outlet</code> in use.
        </p>
      </div>
    </section>
  `
})
export class AboutComponent {}
