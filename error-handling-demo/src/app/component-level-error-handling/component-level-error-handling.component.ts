import { Component } from '@angular/core';

@Component({
  selector: 'app-component-level-error-handling',
  standalone: true,
  imports: [],
  template: `
    <h1>Component Level Error Handling</h1>
    <p>This component demonstrates how to use variables for to display error messages</p>

    <br />

    <div class="msg">
     @if(errorMsg) {
      <div id="error">
        <h4>Error!</h4>
        <p>{{ errorMsg }}</p>
      </div>
     }

     @if(warnMsg) {
      <div id="warn">
        <h4>Warning!</h4>
        <p>{{ warnMsg }}</p>
      </div>
     }

     @if(infoMsg) {
      <div id="info">
        <h4>Info!</h4>
        <p>{{ infoMsg }}</p>
      </div>
     }
    </div>
  `,
  styles: `
    #error {
      background-color: #f8d7da;
      color: #721c24;
      padding: 10px;
      margin-bottom: 10px;
    }

    #warn {
      background-color: #fff3cd;
      color: #856404;
      padding: 10px;
      margin-bottom: 10px;
    }

    #info {
      background-color: #cce5ff;
      color: #004085;
      padding: 10px;
      margin-bottom: 10px;
    }
  `
})
export class ComponentLevelErrorHandlingComponent {
  errorMsg: string;
  warnMsg: string = 'This is a warning message';
  infoMsg: string = 'This is an info message';

  constructor() {
    this.errorMsg = '';
    this.initializeErrorHandling();
  }

  async initializeErrorHandling() {
    try {
      await this.throwError();
    } catch (err: any) {
      this.errorMsg = err;
    }
  }

  async throwError() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('This is an error message.');
      }, 3000);
    });
  }
}
