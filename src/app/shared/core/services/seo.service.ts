import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private baseUrl = 'https://turkeyloans.intechdev.net';
  private supportedLanguages = ['ar', 'en'];

  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router,
    private translate: TranslateService
  ) {
    this.setupRouterSubscription();
  }

  private setupRouterSubscription(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateSEOTags();
      });
  }

  updateSEOTags(): void {
    const currentUrl = this.router.url;
    const language = this.getLanguageFromUrl(currentUrl);

    // Update title
    this.updateTitle(language);

    // Update meta tags
    this.updateMetaTags(language, currentUrl);

    // Update hreflang tags
    this.updateHreflangTags(currentUrl);

    // Update structured data
    this.updateStructuredData(language);
  }

  private getLanguageFromUrl(url: string): string {
    const segments = url.split('/');
    const lang = segments[1];
    return this.supportedLanguages.includes(lang) ? lang : 'ar';
  }

  private updateTitle(language: string): void {
    const titles = {
      ar: 'Turkey Loans - نظام إدارة القروض التركية',
      en: 'Turkey Loans - Turkish Loans Management System'
    };

    this.title.setTitle(titles[language as keyof typeof titles] || titles.ar);
  }

  private updateMetaTags(language: string, currentUrl: string): void {
    const descriptions = {
      ar: 'نظام إدارة القروض التركية المتطور - حلول متكاملة لإدارة القروض والتمويل',
      en: 'Advanced Turkish Loans Management System - Comprehensive solutions for loans and financing management'
    };

    const keywords = {
      ar: 'قروض تركية, نظام إدارة, إدارة القروض, تمويل, Turkey Loans, Management System',
      en: 'Turkish loans, management system, loan management, financing, Turkey Loans, Management System'
    };

    // Basic meta tags
    this.meta.updateTag({ name: 'description', content: descriptions[language as keyof typeof descriptions] || descriptions.ar });
    this.meta.updateTag({ name: 'keywords', content: keywords[language as keyof typeof keywords] || keywords.ar });
    this.meta.updateTag({ name: 'language', content: language });
    this.meta.updateTag({ name: 'author', content: 'IN TECH' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    // Open Graph tags
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: `${this.baseUrl}${currentUrl}` });
    this.meta.updateTag({ property: 'og:title', content: this.title.getTitle() });
    this.meta.updateTag({ property: 'og:description', content: descriptions[language as keyof typeof descriptions] || descriptions.ar });
    this.meta.updateTag({ property: 'og:locale', content: language === 'ar' ? 'ar_SA' : 'en_US' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Turkey Loans' });

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:url', content: `${this.baseUrl}${currentUrl}` });
    this.meta.updateTag({ name: 'twitter:title', content: this.title.getTitle() });
    this.meta.updateTag({ name: 'twitter:description', content: descriptions[language as keyof typeof descriptions] || descriptions.ar });

    // Geographic tags
    this.meta.updateTag({ name: 'geo.region', content: language === 'ar' ? 'SA' : 'US' });
    this.meta.updateTag({ name: 'geo.country', content: language === 'ar' ? 'SA' : 'US' });
  }

  private updateHreflangTags(currentUrl: string): void {
    // Remove existing hreflang tags
    const existingHreflang = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflang.forEach(link => link.remove());

    // Get base URL without language
    const urlWithoutLang = currentUrl.replace(/^\/[a-z]{2}/, '') || '/';

    // Add hreflang tags for each supported language
    this.supportedLanguages.forEach(lang => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = `${this.baseUrl}/${lang}${urlWithoutLang}`;
      document.head.appendChild(link);
    });

    // Add x-default hreflang (points to Arabic as default)
    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    defaultLink.href = `${this.baseUrl}/ar${urlWithoutLang}`;
    document.head.appendChild(defaultLink);
  }

  private updateStructuredData(language: string): void {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": language === 'ar' ? 'Turkey Loans - نظام إدارة القروض التركية' : 'Turkey Loans - Turkish Loans Management System',
      "description": language === 'ar' ? 'نظام إدارة القروض التركية المتطور' : 'Advanced Turkish Loans Management System',
      "url": this.baseUrl,
      "inLanguage": language,
      "publisher": {
        "@type": "Organization",
        "name": "IN TECH",
        "url": "https://www.intechdev.net",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+966-54-946-7661",
          "contactType": "customer service",
          "email": "info@intechdev.net"
        },
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "SA",
          "addressLocality": "Riyadh"
        }
      }
    };

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  // Method to update page-specific SEO
  updatePageSEO(pageData: {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
  }): void {
    if (pageData.title) {
      this.title.setTitle(pageData.title);
    }

    if (pageData.description) {
      this.meta.updateTag({ name: 'description', content: pageData.description });
      this.meta.updateTag({ property: 'og:description', content: pageData.description });
      this.meta.updateTag({ name: 'twitter:description', content: pageData.description });
    }

    if (pageData.keywords) {
      this.meta.updateTag({ name: 'keywords', content: pageData.keywords });
    }

    if (pageData.image) {
      this.meta.updateTag({ property: 'og:image', content: pageData.image });
      this.meta.updateTag({ name: 'twitter:image', content: pageData.image });
    }
  }
}
