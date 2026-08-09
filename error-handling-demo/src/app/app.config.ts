import { ApplicationConfig, ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { GlobalErrorHandlerService } from './global-error-handler.service';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }
  ]
};
