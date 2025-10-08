import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { RoutingService } from '../services/routing.service';

@Directive({
  selector: '[appAutoLanguageLink]',
  standalone: true
})
export class AutoLanguageLinkDirective implements OnInit, OnDestroy {
  @Input('appAutoLanguageLink') routePath: string = '';
  @Input() preserveQueryParams: boolean = false;
  
  private routerSubscription?: Subscription;
  private currentLanguage: string = 'ar';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router,
    private routingService: RoutingService
  ) {}

  ngOnInit(): void { 
    this.currentLanguage = this.routingService.getCurrentLanguage();
    
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateLanguage();
        this.updateHref();
      });

    this.updateHref();
    
    this.renderer.listen(this.el.nativeElement, 'click', (event) => {
      event.preventDefault();
      this.navigateToRoute();
    });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private updateLanguage(): void {
    this.currentLanguage = this.routingService.getCurrentLanguage();
  }

  private updateHref(): void {
    if (this.routePath) {
      const fullPath = this.buildFullPath();
      this.renderer.setAttribute(this.el.nativeElement, 'href', fullPath);
    }
  }

  private buildFullPath(): string { 
    const cleanPath = this.routePath.startsWith('/') ? this.routePath.slice(1) : this.routePath;
    const pathWithoutLang = cleanPath.replace(/^(ar|en)\//, '');
    return `/${this.currentLanguage}/${pathWithoutLang}`;
  }

  private navigateToRoute(): void {
    if (this.routePath) {
      const cleanPath = this.routePath.startsWith('/') ? this.routePath.slice(1) : this.routePath;
      const pathWithoutLang = cleanPath.replace(/^(ar|en)\//, '');
      this.routingService.navigateToPage(pathWithoutLang, this.currentLanguage);
    }
  }
}
