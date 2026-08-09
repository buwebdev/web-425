import { Routes } from '@angular/router';
import { ComponentLevelErrorHandlingComponent } from './component-level-error-handling/component-level-error-handling.component';
import { ComponentLoggerErrorHandlingComponent } from './component-logger-error-handling/component-logger-error-handling.component';
import { ComponentToTestGlobalErrorHandlerComponent } from './component-to-test-global-error-handler/component-to-test-global-error-handler.component';
import { ErrorHandlingOverviewComponent } from './error-handling-overview/error-handling-overview.component';

export const routes: Routes = [
  {
    path: '',
    component: ErrorHandlingOverviewComponent,
    title: 'Overview | Error Handling Demo'
  },
  {
    path: 'logger',
    component: ComponentLoggerErrorHandlingComponent,
    title: 'Logger | Error Handling Demo'
  },
  {
    path: 'component-error',
    component: ComponentLevelErrorHandlingComponent,
    title: 'Component Error | Error Handling Demo'
  },
  {
    path: 'global-error',
    component: ComponentToTestGlobalErrorHandlerComponent,
    title: 'Global Error | Error Handling Demo'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
