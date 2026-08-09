import { Component } from '@angular/core';

@Component({
  selector: 'app-component-to-test-global-error-handler',
  standalone: true,
  template: `
    <section class="w4-section" aria-labelledby="global-error-heading">
      <p class="w4-eyebrow">Strategy 3</p>
      <h1 id="global-error-heading">Use a global error handler as a safety net</h1>
      <p class="w4-page-intro">
        Angular sends an unexpected error to the custom application-wide
        <code>ErrorHandler</code>. Open the browser console before triggering it.
      </p>

      <div class="w4-panel">
        <h2>Try it intentionally</h2>
        <p>
          This button throws an unhandled error on purpose. The custom handler
          records its message and stack without requiring every component to
          duplicate that reporting logic.
        </p>
        <button type="button" class="w4-btn w4-btn-primary" (click)="triggerGlobalError()">
          Trigger global error
        </button>
      </div>

      <div class="w4-panel w4-mt-4">
        <p class="w4-kicker">Design guidance</p>
        <p>
          Handle expected, recoverable failures near the user interaction. Use
          the global handler for errors the feature did not anticipate.
        </p>
      </div>
    </section>
  `
})
export class ComponentToTestGlobalErrorHandlerComponent {
  triggerGlobalError(): never {
    throw new Error('Global error demo: an unexpected error was triggered intentionally.');
  }
}
