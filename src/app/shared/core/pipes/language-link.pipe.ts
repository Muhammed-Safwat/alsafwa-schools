import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { RoutingService } from '../services/routing.service';

@Pipe({
  name: 'languageLink',
  standalone: true,
  pure: false 
})
export class LanguageLinkPipe implements PipeTransform, OnDestroy {
  private currentLanguage: string = 'ar';
  private routerSubscription?: Subscription;

  constructor(
    private routingService: RoutingService,
    private router: Router
  ) {
    this.currentLanguage = this.routingService.getCurrentLanguage();
    
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentLanguage = this.routingService.getCurrentLanguage();
      });
  }

  transform(routePath: string): string {
    if (!routePath) return '';

    const cleanPath = routePath.startsWith('/') ? routePath.slice(1) : routePath;
    const pathWithoutLang = cleanPath.replace(/^(ar|en)\//, '');
    
    return `/${this.currentLanguage}/${pathWithoutLang}`;
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
