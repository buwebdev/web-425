import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <a class="skip-link" href="#main-content">Skip to main content</a>

    <div class="w4-shell">
      <header class="w4-header">
        <div class="w4-container w4-header-inner">
          <a class="w4-brand" routerLink="/" aria-label="Error Handling Demo home">
            {{ title }}
          </a>
          <span class="w4-badge">WEB 425</span>
        </div>

        <nav class="w4-navbar" aria-label="Error handling examples">
          <div class="w4-container w4-nav">
            <a
              class="w4-nav-link"
              routerLink="/"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
            >Overview</a>
            <a class="w4-nav-link" routerLink="/logger" routerLinkActive="active">Logger</a>
            <a class="w4-nav-link" routerLink="/component-error" routerLinkActive="active">Component Error</a>
            <a class="w4-nav-link" routerLink="/global-error" routerLinkActive="active">Global Error</a>
          </div>
        </nav>
      </header>

      <main id="main-content" class="w4-container w4-main">
        <router-outlet />
      </main>

      <footer class="w4-footer">
        <div class="w4-container w4-footer-inner">
          <div>
            <p class="w4-footer-brand">Error Handling Demo</p>
            <p class="w4-footer-copy">Trigger, observe, and compare each strategy.</p>
          </div>
          <p class="w4-footer-copyright">&copy; {{ currentYear }} WEB 425</p>
        </div>
      </footer>
    </div>
  `
})
export class AppComponent {
  readonly title = 'Error Handling Demo';
  readonly currentYear = new Date().getFullYear();
}
