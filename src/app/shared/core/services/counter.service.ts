import { Injectable } from '@angular/core';

declare var PureCounter: any;

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  /**
   * إعادة تهيئة PureCounter
   * يجب استدعاؤها بعد تحميل الصفحة أو تغيير المحتوى
   */
  initializeCounters(): void {
    setTimeout(() => {
      if (typeof PureCounter !== 'undefined') {
        new PureCounter();
      }
    }, 100);
  }

  /**
   * إعادة تهيئة PureCounter مع تأخير مخصص
   * @param delay التأخير بالميلي ثانية (افتراضي: 100)
   */
  initializeCountersWithDelay(delay: number = 100): void {
    setTimeout(() => {
      if (typeof PureCounter !== 'undefined') {
        new PureCounter();
      }
    }, delay);
  }
}
