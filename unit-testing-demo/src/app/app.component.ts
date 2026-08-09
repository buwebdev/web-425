import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <a class="skip-link" href="#main-content">Skip to main content</a>

    <div class="w4-shell">
      <header class="w4-header">
        <div class="w4-container w4-header-inner">
          <span class="w4-brand">{{ title }}</span>
          <span class="w4-badge">7 focused tests</span>
        </div>
      </header>

      <main id="main-content" class="w4-container w4-main">
        <section class="w4-section" aria-labelledby="testing-heading">
          <p class="w4-eyebrow">Jasmine + Angular TestBed</p>
          <h1 id="testing-heading">{{ title }}</h1>
          <p class="w4-page-intro">{{ welcome }}</p>

          <div class="w4-grid w4-grid-2">
            <article class="w4-panel">
              <p class="w4-kicker">Pure methods</p>
              <h2>Test predictable calculations</h2>
              <p>
                These buttons call the same <code>add</code> and
                <code>subtract</code> methods exercised by the unit tests.
              </p>
              <div class="w4-actions">
                <button type="button" class="w4-btn w4-btn-primary" (click)="showAddition()">
                  Add 5 + 3
                </button>
                <button type="button" class="w4-btn w4-btn-primary" (click)="showSubtraction()">
                  Subtract 10 - 4
                </button>
              </div>
              <p class="w4-callout w4-mt-4" aria-live="polite" data-testid="calculation-result">
                {{ calculationResult }}
              </p>
            </article>

            <article class="w4-panel">
              <p class="w4-kicker">State and interaction</p>
              <h2>Test what a user can change</h2>
              <p>
                The test clicks this button, runs change detection, and checks
                the updated status in the rendered DOM.
              </p>
              <button
                type="button"
                class="w4-btn w4-btn-primary"
                data-testid="availability-button"
                (click)="toggleAvailability()"
              >
                Toggle availability
              </button>
              <p class="w4-callout w4-mt-4" aria-live="polite" data-testid="availability-status">
                Demo status: {{ isAvailable ? 'Available' : 'Unavailable' }}
              </p>
            </article>
          </div>

          <article class="w4-panel w4-mt-4">
            <p class="w4-kicker">Spies</p>
            <h2>Verify collaboration between methods</h2>
            <p>
              <code>runAnnouncement</code> delegates to
              <code>announce</code>. The unit test spies on the real component
              method and verifies the message it receives.
            </p>
            <button type="button" class="w4-btn w4-btn-primary" (click)="runAnnouncement()">
              Run announcement
            </button>
            @if (announcement) {
              <p class="w4-mt-4" aria-live="polite">{{ announcement }}</p>
            }
          </article>
        </section>
      </main>

      <footer class="w4-footer">
        <div class="w4-container w4-footer-inner">
          <div>
            <p class="w4-footer-brand">Unit Testing Demo</p>
            <p class="w4-footer-copy">Test application behavior, not temporary variables.</p>
          </div>
          <p class="w4-footer-copyright">WEB 425</p>
        </div>
      </footer>
    </div>
  `
})
export class AppComponent {
  readonly title = 'Unit Testing Demo';
  readonly welcome = 'Connect Jasmine expectations to real component behavior.';
  calculationResult = 'Choose a calculation to begin.';
  isAvailable = true;
  announcement = '';

  add(firstNumber: number, secondNumber: number): number {
    return firstNumber + secondNumber;
  }

  subtract(firstNumber: number, secondNumber: number): number {
    return firstNumber - secondNumber;
  }

  showAddition(): void {
    this.calculationResult = `5 + 3 = ${this.add(5, 3)}`;
  }

  showSubtraction(): void {
    this.calculationResult = `10 - 4 = ${this.subtract(10, 4)}`;
  }

  toggleAvailability(): void {
    this.isAvailable = !this.isAvailable;
  }

  announce(message: string): void {
    this.announcement = message;
  }

  runAnnouncement(): void {
    this.announce('The component method was called successfully.');
  }
}
