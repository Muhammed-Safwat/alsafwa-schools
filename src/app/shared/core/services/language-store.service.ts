import { Injectable, signal, computed, effect } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ISupportedLanguages } from '../interfaces/supported-languages';

export interface LanguageState {
  currentLanguage: ISupportedLanguages;
  direction: 'rtl' | 'ltr';
  isRTL: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageStoreService {
  private readonly LANGUAGE_KEY = 'app_language';
  private readonly supportedLanguages = ['en', 'ar'];
  private readonly defaultLanguage: ISupportedLanguages = 'ar';

  private readonly _currentLanguage = signal<ISupportedLanguages>(this.defaultLanguage);

  readonly currentLanguage = this._currentLanguage.asReadonly();
  readonly direction = computed(() => this._currentLanguage() === 'ar' ? 'rtl' : 'ltr');
  readonly isRTL = computed(() => this._currentLanguage() === 'ar');


  readonly state = computed<LanguageState>(() => ({
    currentLanguage: this._currentLanguage(),
    direction: this.direction(),
    isRTL: this.isRTL()
  }));

  constructor(
    private translate: TranslateService,
    private router: Router
  ) {
    this.initializeLanguage();
    this.setupEffects();
  }

  private initializeLanguage(): void { 
    this.translate.setDefaultLang(this.defaultLanguage);
    this.translate.setFallbackLang(this.defaultLanguage);
 
    const localStorageLang = localStorage.getItem(this.LANGUAGE_KEY);
    const browserLang = this.translate.getBrowserLang()?.match(this.supportedLanguages.join('|'));
    const urlLang = this.getLanguageFromUrl();
    
    let initialLang: ISupportedLanguages;

    if (localStorageLang && this.supportedLanguages.includes(localStorageLang)) {
      initialLang = localStorageLang as ISupportedLanguages;
    } else if (browserLang && this.supportedLanguages.includes(browserLang[0])) {
      initialLang = browserLang[0] as ISupportedLanguages;
    } else if (urlLang && this.supportedLanguages.includes(urlLang)) {
      initialLang = urlLang as ISupportedLanguages;
    } else {
      initialLang = this.defaultLanguage;
    }

    this.setLanguage(initialLang);
  }

  private setupEffects(): void { 
    effect(() => {
      const language = this._currentLanguage();
      const direction = this.direction();
       
      document.documentElement.dir = direction;
      document.documentElement.lang = language;
      document.body.dir = direction;
       
      if (direction === 'rtl') {
        document.documentElement.classList.add('rtl');
        document.documentElement.classList.remove('ltr');
      } else {
        document.documentElement.classList.add('ltr');
        document.documentElement.classList.remove('rtl');
      }
    });

    // Remove router events subscription to prevent refresh
    // this.router.events.subscribe(event => {
    //   console.log('LanguageStoreService: Router event:', event.type, event);
    //   if (event.type === 1) {
    //     const lang = this.getLanguageFromUrl();
    //     if (lang && this.supportedLanguages.includes(lang)) {
    //       // Only update language if it's different from current
    //       const currentLang = this._currentLanguage();
    //       if (lang !== currentLang) {
    //         console.log('LanguageStoreService: Language changed from URL:', currentLang, 'to', lang);
    //         this.setLanguage(lang);
    //       }
    //     }
    //   }
    // });
  }

  private getLanguageFromUrl(): ISupportedLanguages {
    const currentUrl = this.router.url;
    // Extract language from URL using regex
    const langMatch = currentUrl.match(/^\/([a-z]{2})(?:\/|$)/);
    const lang = langMatch ? langMatch[1] : null;

    if (lang && this.supportedLanguages.includes(lang)) {
      return lang as ISupportedLanguages;
    }
    return this.defaultLanguage;
  }

  setLanguage(lang: ISupportedLanguages): void {
    if (this.supportedLanguages.includes(lang)) {
      this.translate.use(lang);
      localStorage.setItem(this.LANGUAGE_KEY, lang);
      this._currentLanguage.set(lang);
    }
  }

  changeLanguage(lang: ISupportedLanguages): void {
    if (this.supportedLanguages.includes(lang)) {
      const currentUrl = this.router.url;
      // Remove the current language from URL
      const urlWithoutLang = currentUrl.replace(/^\/[a-z]{2}/, '') || '';
      // Remove trailing slash if it's just the root path
      const cleanUrlWithoutLang = urlWithoutLang === '/' ? '' : urlWithoutLang;
      const newUrl = `/${lang}${cleanUrlWithoutLang}`;
      
      // Update language first
      this.setLanguage(lang);
      
      // Update meta tags
      this.updateMetaTagsForSEO(lang);

      // Update URL without causing page refresh
      window.history.replaceState(null, '', newUrl);
    }
  }

  private updateMetaTagsForSEO(lang: string): void {
    this.updateMetaTag('name', 'language', lang);
    this.updateMetaTag('property', 'og:locale', lang === 'ar' ? 'ar_SA' : 'en_US');
    this.updateMetaTag('name', 'geo.region', lang === 'ar' ? 'SA' : 'US');

    this.updateHreflangTags();
  }

  private updateMetaTag(attribute: string, name: string, content: string): void {
    let metaTag = document.querySelector(`meta[${attribute}="${name}"]`);
    if (metaTag) {
      metaTag.setAttribute('content', content);
    } else {
      metaTag = document.createElement('meta');
      metaTag.setAttribute(attribute, name);
      metaTag.setAttribute('content', content);
      document.head.appendChild(metaTag);
    }
  }

  private updateHreflangTags(): void {
    console.log('LanguageStoreService: Updating hreflang tags...');
    const currentUrl = window.location.origin + window.location.pathname;
    // Remove language from URL more precisely
    const baseUrl = currentUrl.replace(/^\/[a-z]{2}(\/|$)/, '/');
    // Remove trailing slash from base URL
    const cleanBaseUrl = baseUrl.endsWith('/') && baseUrl !== '/' ? baseUrl.slice(0, -1) : baseUrl;

    console.log('LanguageStoreService: Current URL:', currentUrl);
    console.log('LanguageStoreService: Base URL:', baseUrl);
    console.log('LanguageStoreService: Clean Base URL:', cleanBaseUrl);

    const existingHreflang = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflang.forEach(link => link.remove());

    this.supportedLanguages.forEach(lang => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = `${cleanBaseUrl}/${lang}`;
      document.head.appendChild(link);
    });

    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    defaultLink.href = `${cleanBaseUrl}/ar`;
    document.head.appendChild(defaultLink);
  }
}
