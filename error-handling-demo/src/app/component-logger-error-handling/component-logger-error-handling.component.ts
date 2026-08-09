import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-component-logger-error-handling',
  standalone: true,
  imports: [],
  template: `
    <h1>
      Logger Example
    </h1>
    <p>This is an example of a logger service that logs messages to the console.</p>
    <p>Open the web browser console window to view the messages.</p>
  `,
  styles: `

  `
})
export class ComponentLoggerErrorHandlingComponent {
  constructor(private logger: LoggerService) {
    this.logger.log('This is a test message from the logger service.');
    this.logger.warn('This is a test warning from the logger service.');
    this.logger.error('This is a test error from the logger service.');
  }
}
