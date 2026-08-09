import { Component } from '@angular/core';

@Component({
  selector: 'app-component-level-error-handling',
  standalone: true,
  template: `
    <section class="w4-section" aria-labelledby="component-error-heading">
      <p class="w4-eyebrow">Strategy 2</p>
      <h1 id="component-error-heading">Handle a recoverable error in the component</h1>
      <p class="w4-page-intro">
        The component awaits an operation, catches its expected failure, and
        converts the error into a message the user can understand.
      </p>

      <div class="w4-grid w4-grid-split">
        <article class="w4-panel">
          <h2>Try it</h2>
          <p>Trigger the simulated operation and observe that the application remains usable.</p>
          <button
            type="button"
            class="w4-btn w4-btn-primary"
            [disabled]="isRunning"
            (click)="triggerHandledError()"
          >
            {{ isRunning ? 'Running operation...' : 'Trigger handled error' }}
          </button>
        </article>

        <aside class="w4-panel" aria-live="polite">
          <p class="w4-kicker">Component state</p>
          @if (errorMessage) {
            <h2>Failure caught</h2>
            <p class="w4-error" role="alert">{{ errorMessage }}</p>
          } @else {
            <h2>No current error</h2>
            <p>The component is ready to run the simulated operation.</p>
          }
        </aside>
      </div>
    </section>
  `
})
export class ComponentLevelErrorHandlingComponent {
  errorMessage = '';
  isRunning = false;

  async triggerHandledError(): Promise<void> {
    this.isRunning = true;
    this.errorMessage = '';

    try {
      await this.runOperation();
    } catch (error: unknown) {
      this.errorMessage = error instanceof Error
        ? error.message
        : 'The operation failed for an unknown reason.';
    } finally {
      this.isRunning = false;
    }
  }

  private runOperation(): Promise<void> {
    return Promise.reject(new Error('The simulated request could not be completed.'));
  }
}
