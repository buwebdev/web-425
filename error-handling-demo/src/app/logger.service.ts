import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(message: string): void {
    console.log(message);
  }

  error(message: string, stack?: string): void {
    console.error(message);
    if (stack) {
      console.error(stack);
    }
  }

  warn(message: string): void {
    console.warn(message);
  }
}
