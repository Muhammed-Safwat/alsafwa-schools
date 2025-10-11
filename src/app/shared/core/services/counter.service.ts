import { Injectable } from '@angular/core';

declare var PureCounter: any;

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  initializeCounters(): void {
    setTimeout(() => {
      if (typeof PureCounter !== 'undefined') {
        new PureCounter();
      }
    }, 100);
  }


  initializeCountersWithDelay(delay: number = 100): void {
    setTimeout(() => {
      if (typeof PureCounter !== 'undefined') {
        new PureCounter();
      }
    }, delay);
  }
}
