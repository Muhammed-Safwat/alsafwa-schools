import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  private currentLanguage = 'ar';
  private supportedLanguages = ['ar', 'en'];
  private currentLanguageSubject = new BehaviorSubject<string>(this.currentLanguage);
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  constructor(private router: Router) {
    this.setupRouterSubscription();
  }

  private setupRouterSubscription(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateCurrentLanguage(event.url);
      });
  }

  private updateCurrentLanguage(url: string): void {
    const segments = url.split('/');
    const lang = segments[1];
    if (this.supportedLanguages.includes(lang)) {
      this.currentLanguage = lang;
      this.currentLanguageSubject.next(this.currentLanguage);
    }
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  getSupportedLanguages(): string[] {
    return this.supportedLanguages;
  }

  navigateToLanguage(language: string, path: string = ''): void {
    if (this.supportedLanguages.includes(language)) {
      const currentPath = this.router.url;
      const pathWithoutLang = currentPath.replace(/^\/[a-z]{2}/, '') || '/';
      const targetPath = path || pathWithoutLang;
      
      this.router.navigate([`/${language}${targetPath}`]);
    }
  }

  navigateToPage(page: string, language?: string): void {
    const lang = language || this.currentLanguage;
    this.router.navigate([`/${lang}/${page}`]);
  }

  getCurrentPathWithoutLanguage(): string {
    const currentUrl = this.router.url;
    return currentUrl.replace(/^\/[a-z]{2}/, '') || '/';
  }

  isCurrentLanguage(language: string): boolean {
    return this.currentLanguage === language;
  }

  switchLanguage(language: string): void {
    if (this.supportedLanguages.includes(language) && language !== this.currentLanguage) {
      const currentPath = this.getCurrentPathWithoutLanguage();
      this.navigateToLanguage(language, currentPath);
    }
  }
 
  buildRoute(segments: string[]): string[] {
    return ['/', this.currentLanguage, ...segments];
  }

  buildRouteObservable(segments: string[]): Observable<string[]> {
    return new Observable(observer => {
      observer.next(['/', this.currentLanguage, ...segments]);
      
      const subscription = this.currentLanguage$.subscribe(lang => {
        observer.next(['/', lang, ...segments]);
      });
      
      return () => subscription.unsubscribe();
    });
  }
 
  getHomeRoute(): string[] {
    return this.buildRoute(['']);
  }

  getLoginRoute(): string[] {
    return this.buildRoute(['auth', 'login']);
  }

  getForgotPasswordRoute(): string[] {
    return this.buildRoute(['auth', 'forgot-password']);
  }

  getResetPasswordRoute(): string[] {
    return this.buildRoute(['auth', 'reset-password']);
  }

  getSetOtpRoute(): string[] {
    return this.buildRoute(['auth', 'set-otp']);
  }

  getStudentRegisterRoute(): string[] {
    return this.buildRoute(['auth', 'student-register']);
  }

  getTeacherRegisterRoute(): string[] {
    return this.buildRoute(['auth', 'teacher-register']);
  }

  getDashboardRoute(): string[] {
    return this.buildRoute(['dashboard']);
  }

  getAboutRoute(): string[] {
    return this.buildRoute(['about']);
  }

  getContactRoute(): string[] {
    return this.buildRoute(['contact']);
  }

  // Observable versions for reactive updates
  getHomeRoute$(): Observable<string[]> {
    return this.buildRouteObservable(['']);
  }

  getLoginRoute$(): Observable<string[]> {
    return this.buildRouteObservable(['auth', 'login']);
  }

  getForgotPasswordRoute$(): Observable<string[]> {
    return this.buildRouteObservable(['auth', 'forgot-password']);
  }

  getResetPasswordRoute$(): Observable<string[]> {
    return this.buildRouteObservable(['auth', 'reset-password']);
  }

  getSetOtpRoute$(): Observable<string[]> {
    return this.buildRouteObservable(['auth', 'set-otp']);
  }

  getStudentRegisterRoute$(): Observable<string[]> {
    return this.buildRouteObservable(['auth', 'student-register']);
  }

  getTeacherRegisterRoute$(): Observable<string[]> {
    return this.buildRouteObservable(['auth', 'teacher-register']);
  }

  getDashboardRoute$(): Observable<string[]> {
    return this.buildRouteObservable(['dashboard']);
  }

  getAboutRoute$(): Observable<string[]> {
    return this.buildRouteObservable(['about']);
  }

  getContactRoute$(): Observable<string[]> {
    return this.buildRouteObservable(['contact']);
  }

  // Helper methods for auto language links
  buildLanguageAwarePath(path: string): string {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    const pathWithoutLang = cleanPath.replace(/^(ar|en)\//, '');
    return `/${this.currentLanguage}/${pathWithoutLang}`;
  }

  navigateToLanguageAwarePath(path: string): void {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    const pathWithoutLang = cleanPath.replace(/^(ar|en)\//, '');
    this.router.navigate([`/${this.currentLanguage}/${pathWithoutLang}`]);
  }

  // Get current language from URL
  getLanguageFromUrl(url: string): string {
    const segments = url.split('/');
    const lang = segments[1];
    return this.supportedLanguages.includes(lang) ? lang : this.currentLanguage;
  }
}
