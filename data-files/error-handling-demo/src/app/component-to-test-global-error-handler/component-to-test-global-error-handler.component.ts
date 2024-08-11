import { Component } from '@angular/core';

@Component({
  selector: 'app-component-to-test-global-error-handler',
  standalone: true,
  imports: [],
  template: `
    <h1>Global Error Handler Example</h1>
    <p>This component demonstrates how to use the global error handler to catch errors in Angular applications.</p>
    <p>Open the web browser console window to view the message.</p>
  `,
  styles: ``
})
export class ComponentToTestGlobalErrorHandlerComponent {
  constructor() {
    setTimeout(() => {
      throw new Error('This is a test error from the component-to-test-global-error-handler.');
    }, 2000)
  }
}
