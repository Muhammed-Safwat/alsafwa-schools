import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterOutlet, NavigationEnd, Router } from '@angular/router';
import { PreloaderComponent } from './shared/components/preloader/preloader.component';
import { filter } from 'rxjs/operators';

declare var PureCounter: any;
declare var AOS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PreloaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'Alsafwa University';
  private routerSubscription: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.waitForPureCounter();
    this.initializeAOS();

    // Listen to route changes
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => {
          this.refreshAOS();
        }, 100);
      });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.waitForPureCounter();
      this.initializeAOS();
    }, 500);
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
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

  private refreshAOS() {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }
}
