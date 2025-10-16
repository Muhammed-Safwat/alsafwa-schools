import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { LanguageService } from './language.service';

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  author: string;
  robots: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  ogType: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  structuredData?: any;
}

@Injectable({
  providedIn: 'root'
})
export class SEOService {
  private readonly baseUrl = 'https://alsafwa-schools.com';
  private readonly defaultImage = '/assets/img/logo.webp';

  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router,
    private languageService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  updateSEO(seoData: Partial<SEOData>): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // Update title
    if (seoData.title) {
      this.title.setTitle(seoData.title);
    }

    // Update meta tags
    this.updateMetaTag('description', seoData.description);
    this.updateMetaTag('keywords', seoData.keywords);
    this.updateMetaTag('author', seoData.author);
    this.updateMetaTag('robots', seoData.robots);
    this.updateMetaTag('canonical', seoData.canonicalUrl);

    // Open Graph tags
    this.updateMetaTag('og:title', seoData.ogTitle);
    this.updateMetaTag('og:description', seoData.ogDescription);
    this.updateMetaTag('og:image', seoData.ogImage);
    this.updateMetaTag('og:url', seoData.ogUrl);
    this.updateMetaTag('og:type', seoData.ogType);
    this.updateMetaTag('og:site_name', 'مدارس صفوت الصفوة الدولية');

    // Twitter Card tags
    this.updateMetaTag('twitter:card', seoData.twitterCard);
    this.updateMetaTag('twitter:title', seoData.twitterTitle);
    this.updateMetaTag('twitter:description', seoData.twitterDescription);
    this.updateMetaTag('twitter:image', seoData.twitterImage);

    // Additional SEO tags
    this.updateMetaTag('theme-color', '#1a365d');
    this.updateMetaTag('msapplication-TileColor', '#1a365d');
    this.updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Add structured data
    if (seoData.structuredData) {
      this.addStructuredData(seoData.structuredData);
    }
  }

  private updateMetaTag(property: string, content: string | undefined): void {
    if (content) {
      if (property.startsWith('og:') || property.startsWith('twitter:')) {
        this.meta.updateTag({ property, content });
      } else {
        this.meta.updateTag({ name: property, content });
      }
    }
  }

  private addStructuredData(data: any): void {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }

  generatePageSEO(page: string, customData?: Partial<SEOData>): SEOData {
    const currentLang = this.languageService.getCurrentLanguage();
    const isArabic = currentLang === 'ar';

    const baseData = this.getBaseSEOData(page, isArabic);
    return { ...baseData, ...customData };
  }

  private getBaseSEOData(page: string, isArabic: boolean): SEOData {
    const currentUrl = `${this.baseUrl}/${isArabic ? 'ar' : 'en'}/${page}`;

    const seoData = {
      ar: {
        home: {
          title: 'مدارس صفوت الصفوة الدولية - الصفحة الرئيسية',
          description: 'مدارس صفوت الصفوة الدولية - مؤسسة تعليمية رائدة تقدم تعليم متميز من المرحلة الابتدائية حتى الثانوية. تعرف على برامجنا التعليمية والمراحل الدراسية.',
          keywords: 'مدارس صفوت الصفوة, تعليم خاص, مدارس السعودية, المرحلة الابتدائية, المرحلة المتوسطة, المرحلة الثانوية, تعليم عن بعد, مدارس خاصة'
        },
        about: {
          title: 'عن مدارس صفوت الصفوة الدولية - رؤيتنا ورسالتنا',
          description: 'تعرف على رؤية ورسالة مدارس صفوت الصفوة الدولية، تاريخنا، ومبادئنا التعليمية. نحن ملتزمون بتقديم تعليم متميز يواكب متطلبات العصر.',
          keywords: 'عن المدارس, رؤية المدارس, رسالة المدارس, تاريخ المدارس, مبادئ تعليمية'
        },
        admissions: {
          title: 'التسجيل والقبول - مدارس صفوت الصفوة الدولية',
          description: 'تعرف على شروط القبول في مدارس صفوت الصفوة الدولية، متطلبات التسجيل، والمراحل المتاحة. ابدأ رحلتك التعليمية معنا اليوم.',
          keywords: 'القبول, التسجيل, شروط القبول, متطلبات التسجيل, المراحل الدراسية'
        },
        faculty: {
          title: 'الهيئة التدريسية - مدارس صفوت الصفوة الدولية',
          description: 'استكشف الهيئة التدريسية في مدارس صفوت الصفوة الدولية. نقدم تعليم متميز في مختلف المراحل الدراسية.',
          keywords: 'الهيئة التدريسية, معلمين, برامج تعليمية, المراحل الدراسية, هيئة تدريس'
        },
        institutes: {
          title: 'المراحل الدراسية - مدارس صفوت الصفوة الدولية',
          description: 'اكتشف المراحل الدراسية في مدارس صفوت الصفوة الدولية. نقدم تعليم متدرج من الابتدائية حتى الثانوية.',
          keywords: 'المراحل الدراسية, المرحلة الابتدائية, المرحلة المتوسطة, المرحلة الثانوية, تعليم متدرج'
        },
        research: {
          title: 'مركز البحوث والدراسات - مدارس صفوت الصفوة الدولية',
          description: 'مركز البحوث والدراسات في مدارس صفوت الصفوة الدولية يهدف إلى دعم البحث العلمي والابتكار في مختلف المجالات التعليمية.',
          keywords: 'مركز البحوث, دراسات علمية, بحث تعليمي, ابتكار, مجلات علمية'
        },
        'remote-learning': {
          title: 'التعلم عن بعد - مدارس صفوت الصفوة الدولية',
          description: 'نظام التعلم عن بعد في مدارس صفوت الصفوة الدولية يوفر مرونة في التعليم مع الحفاظ على جودة التعليم.',
          keywords: 'تعلم عن بعد, تعليم إلكتروني, مرونة تعليمية, منصات تعليمية'
        },
        contact: {
          title: 'اتصل بنا - مدارس صفوت الصفوة الدولية',
          description: 'تواصل مع مدارس صفوت الصفوة الدولية للحصول على المعلومات والاستفسارات. نحن هنا لمساعدتك في رحلتك التعليمية.',
          keywords: 'اتصل بنا, تواصل, استفسارات, معلومات, دعم طلابي'
        }
      },
      en: {
        home: {
          title: 'Safwat Al Safwa International Schools - Home',
          description: 'Safwat Al Safwa International Schools - A leading educational institution offering distinguished education from elementary to secondary levels. Discover our educational programs and academic stages.',
          keywords: 'Safwat Al Safwa Schools, private education, Saudi schools, elementary stage, intermediate stage, secondary stage, distance learning, private schools'
        },
        about: {
          title: 'About Safwat Al Safwa International Schools - Our Vision & Mission',
          description: 'Learn about the vision and mission of Safwat Al Safwa International Schools, our history, and educational principles. We are committed to providing distinguished education that meets modern requirements.',
          keywords: 'about schools, schools vision, schools mission, schools history, educational principles'
        },
        admissions: {
          title: 'Admissions & Registration - Safwat Al Safwa International Schools',
          description: 'Learn about admission requirements at Safwat Al Safwa International Schools, registration requirements, and available stages. Start your educational journey with us today.',
          keywords: 'admissions, registration, admission requirements, registration requirements, academic stages'
        },
        faculty: {
          title: 'Faculty - Safwat Al Safwa International Schools',
          description: 'Explore the faculty at Safwat Al Safwa International Schools. We offer distinguished education across different academic stages.',
          keywords: 'faculty, teachers, educational programs, academic stages, teaching staff'
        },
        institutes: {
          title: 'Academic Levels - Safwat Al Safwa International Schools',
          description: 'Discover the academic levels at Safwat Al Safwa International Schools. We offer progressive education from elementary to secondary levels.',
          keywords: 'academic levels, elementary stage, intermediate stage, secondary stage, progressive education'
        },
        research: {
          title: 'Research & Studies Center - Safwat Al Safwa International Schools',
          description: 'The Research and Studies Center at Safwat Al Safwa International Schools aims to support scientific research and innovation in various educational fields.',
          keywords: 'research center, scientific studies, educational research, innovation, scientific journals'
        },
        'remote-learning': {
          title: 'Distance Learning - Safwat Al Safwa International Schools',
          description: 'The distance learning system at Safwat Al Safwa International Schools provides educational flexibility while maintaining quality education.',
          keywords: 'distance learning, e-learning, educational flexibility, learning platforms'
        },
        contact: {
          title: 'Contact Us - Safwat Al Safwa International Schools',
          description: 'Contact Safwat Al Safwa International Schools for information and inquiries. We are here to help you in your educational journey.',
          keywords: 'contact us, communication, inquiries, information, student support'
        }
      }
    };

    const languageData = seoData[isArabic ? 'ar' : 'en'];
    const pageData = languageData[page as keyof typeof languageData] || languageData.home;

    return {
      title: pageData.title,
      description: pageData.description,
      keywords: pageData.keywords,
      author: isArabic ? 'مدارس صفوت الصفوة الدولية' : 'Safwat Al Safwa International Schools',
      robots: 'index, follow',
      canonicalUrl: currentUrl,
      ogTitle: pageData.title,
      ogDescription: pageData.description,
      ogImage: `${this.baseUrl}${this.defaultImage}`,
      ogUrl: currentUrl,
      ogType: 'website',
      twitterCard: 'summary_large_image',
      twitterTitle: pageData.title,
      twitterDescription: pageData.description,
      twitterImage: `${this.baseUrl}${this.defaultImage}`,
      structuredData: this.generateStructuredData(page, isArabic)
    };
  }

  private generateStructuredData(page: string, isArabic: boolean): any {
    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": isArabic ? "مدارس صفوت الصفوة الدولية" : "Safwat Al Safwa International Schools",
      "alternateName": isArabic ? "Safwat Al Safwa International Schools" : "مدارس صفوت الصفوة الدولية",
      "url": this.baseUrl,
      "logo": `${this.baseUrl}${this.defaultImage}`,
      "description": isArabic
        ? "مدارس صفوت الصفوة الدولية - مؤسسة تعليمية رائدة تقدم تعليم متميز من المرحلة الابتدائية حتى الثانوية"
        : "Safwat Al Safwa International Schools - A leading educational institution offering distinguished education from elementary to secondary levels",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": isArabic ? "شارع الملك فهد" : "King Fahd Street",
        "addressLocality": isArabic ? "الرياض" : "Riyadh",
        "addressCountry": isArabic ? "المملكة العربية السعودية" : "Saudi Arabia"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": ["Arabic", "English"]
      },
      "sameAs": [
        "https://www.facebook.com/alsafwaschools",
        "https://www.twitter.com/alsafwaschools",
        "https://www.linkedin.com/company/alsafwaschools",
        "https://www.instagram.com/alsafwaschools"
      ]
    };

    // Add page-specific structured data
    if (page === 'home') {
      return {
        ...baseStructuredData,
        "@type": "School",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": isArabic ? "المراحل الدراسية" : "Academic Levels",
          "itemListElement": [
            {
              "@type": "Course",
              "name": isArabic ? "المرحلة الابتدائية" : "Elementary Stage"
            },
            {
              "@type": "Course",
              "name": isArabic ? "المرحلة المتوسطة" : "Intermediate Stage"
            },
            {
              "@type": "Course",
              "name": isArabic ? "المرحلة الثانوية" : "Secondary Stage"
            }
          ]
        }
      };
    }

    return baseStructuredData;
  }
}
