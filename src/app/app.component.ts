import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreloaderComponent } from './shared/components/preloader/preloader.component';

declare var PureCounter: any;
declare var AOS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PreloaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Alsafwa University';

  ngOnInit() {
    this.waitForPureCounter();
    this.initializeAOS();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.waitForPureCounter();
      this.initializeAOS();
    }, 500);
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
