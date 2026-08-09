import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-component-logger-error-handling',
  standalone: true,
  template: `
    <section class="w4-section" aria-labelledby="logger-heading">
      <p class="w4-eyebrow">Strategy 1</p>
      <h1 id="logger-heading">Logger service</h1>
      <p class="w4-page-intro">
        A service gives the application one place to format and send diagnostic
        messages. Open the browser console, then trigger the example.
      </p>

      <div class="w4-grid w4-grid-split">
        <article class="w4-panel">
          <h2>Try it</h2>
          <p>The button calls the service's log, warn, and error methods.</p>
          <button type="button" class="w4-btn w4-btn-primary" (click)="writeMessages()">
            Write log messages
          </button>
        </article>

        <aside class="w4-panel" aria-live="polite">
          <p class="w4-kicker">Observable result</p>
          @if (messagesWritten) {
            <h2>Messages written</h2>
            <p>Check the browser console for one log, warning, and error entry.</p>
          } @else {
            <h2>Waiting for an action</h2>
            <p>No messages are written merely by visiting this route.</p>
          }
        </aside>
      </div>
    </section>
  `
})
export class ComponentLoggerErrorHandlingComponent {
  messagesWritten = false;

  constructor(private readonly logger: LoggerService) {}

  writeMessages(): void {
    this.logger.log('Logger demo: informational message.');
    this.logger.warn('Logger demo: warning message.');
    this.logger.error('Logger demo: error message.');
    this.messagesWritten = true;
  }
}
