import { Routes } from '@angular/router';
import { ComponentLoggerErrorHandlingComponent } from './component-logger-error-handling/component-logger-error-handling.component';
import { ComponentLevelErrorHandlingComponent } from './component-level-error-handling/component-level-error-handling.component';
import { ComponentToTestGlobalErrorHandlerComponent } from './component-to-test-global-error-handler/component-to-test-global-error-handler.component';

export const routes: Routes = [
  {
    path: 'logger',
    component: ComponentLoggerErrorHandlingComponent
  },
  {
    path: 'component-error',
    component: ComponentLevelErrorHandlingComponent
  },
  {
    path: 'global-error',
    component: ComponentToTestGlobalErrorHandlerComponent
  }
];
