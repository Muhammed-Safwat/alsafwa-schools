import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

declare var PureCounter: any;
declare var AOS: any;

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {
  private isLoading = new BehaviorSubject<boolean>(true);
  public isLoading$ = this.isLoading.asObservable();

  constructor() {
    this.initializePreloader();
  }

  private initializePreloader() {
    // إخفاء الـ preloader بعد تحميل الصفحة
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.hidePreloader();
        this.initializeLibraries();
      }, 1000); // تأخير لمدة ثانية واحدة
    });
  }

  public hidePreloader() {
    this.isLoading.next(false);
  }

  public showPreloader() {
    this.isLoading.next(true);
  }

  private initializeLibraries() {
    this.waitForPureCounter();
    this.initializeAOS();
  }

  private waitForPureCounter() {
    const checkPureCounter = () => {
      if (typeof PureCounter !== 'undefined') {
        new PureCounter();
      } else {
        setTimeout(checkPureCounter, 100);
      }
    };
    checkPureCounter();
  }

  private initializeAOS() {
    const checkAOS = () => {
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 1000,
          once: true,
          offset: 100,
          easing: 'ease-in-out',
          mirror: false
        });
      } else {
        setTimeout(checkAOS, 100);
      }
    };
    checkAOS();
  }
}
