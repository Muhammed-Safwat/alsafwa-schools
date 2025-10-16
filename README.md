# Safwat Al-Safwa International Schools - Educational Website

<div align="center">
  <img src="https://img.shields.io/badge/Angular-19-red?style=for-the-badge&logo=angular" alt="Angular 19">
  <img src="https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript" alt="TypeScript 5.7">
  <img src="https://img.shields.io/badge/SCSS-CSS%20Preprocessor-pink?style=for-the-badge&logo=sass" alt="SCSS">
  <img src="https://img.shields.io/badge/ngx--translate-Multilingual-green?style=for-the-badge" alt="ngx-translate">
</div>

## 🌟 Overview

Safwat Al-Safwa International Schools is a modern, multilingual educational website built with Angular 19. The website showcases the school's educational programs, academic levels, faculty, and services. It features advanced SEO optimization, professional multilingual support, and a clean, responsive design tailored for educational institutions.

## 🚀 Key Features

### 🌍 **Professional Multilingual Support (Global Standard)**
- **SEO-Optimized URLs**: Follows global standards like Google, Microsoft, Apple
  - Arabic: `alsafwa-schools.com/ar/`
  - English: `alsafwa-schools.com/en/`
- **Automatic Language Detection**: Smart detection from URL, localStorage, and browser
- **URL-Based Language Switching**: Clean URLs without query parameters
- **RTL/LTR Support**: Full support for Arabic (RTL) and English (LTR)
- **Meta Tags Optimization**: Professional hreflang and language meta tags

### 🔍 **Enterprise-Grade SEO Features**
- **International SEO**: Proper hreflang implementation like global companies
- **Dynamic Meta Tags**: Real-time meta tag updates based on language
- **Structured Data**: JSON-LD structured data for educational institutions
- **Sitemap Generation**: Automatic sitemap with language variants
- **Robots.txt**: Professional robots.txt configuration
- **Performance Optimized**: Core Web Vitals friendly
- **Canonical URLs**: Proper canonical URL management

### 🎨 **Modern Educational UI/UX**
- **Responsive Design**: Works perfectly on all devices
- **Professional Styling**: Clean, modern interface for educational institutions
- **Language Switcher**: Elegant dropdown language selector
- **School Information**: Professional footer with school details
- **Academic Pages**: Comprehensive information about academic levels and programs

### 📚 **Educational Content Management**
- **Academic Levels**: Elementary, Intermediate, and Secondary stages
- **Faculty Information**: Teaching staff and educational team
- **Admissions Process**: Complete admission and registration information
- **Remote Learning**: Distance learning programs and features
- **Research Center**: Academic research and studies information

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Angular** | 19.1.0 | Frontend Framework |
| **TypeScript** | 5.7.2 | Programming Language |
| **SCSS** | Latest | CSS Preprocessor |
| **ngx-translate** | 17.0.0 | Internationalization |
| **RxJS** | 7.8.0 | Reactive Programming |

## 📁 Project Structure

```
src/
├── app/
│   ├── pages/
│   │   ├── home/                 # Home page component
│   │   ├── about/                # About schools page
│   │   ├── admissions/           # Admissions and registration
│   │   ├── faculty/              # Faculty and teaching staff
│   │   ├── institutes/           # Academic levels
│   │   ├── contact/              # Contact information
│   │   ├── remote-learning/      # Distance learning
│   │   ├── research-center/      # Research and studies
│   │   └── privacy/              # Privacy policy
│   ├── shared/
│   │   ├── components/
│   │   │   ├── layout/           # Header and footer
│   │   │   ├── banner/           # Hero banner
│   │   │   ├── about/            # About section
│   │   │   ├── faculty/          # Faculty section
│   │   │   ├── institutes/       # Academic levels section
│   │   │   ├── admissions/       # Admissions section
│   │   │   ├── contact/          # Contact section
│   │   │   └── language-switcher/ # Language switcher
│   │   └── core/
│   │       ├── interfaces/       # TypeScript interfaces
│   │       └── services/         # Core services (SEO, Language, etc.)
│   ├── app.component.*           # Main app component
│   ├── app.config.ts            # App configuration
│   └── app.routes.ts            # Routing configuration
├── assets/
│   ├── i18n/                    # Translation files
│   │   ├── ar.json              # Arabic translations
│   │   └── en.json              # English translations
│   └── img/                     # Images and assets
│       ├── education/           # Educational images
│       ├── person/              # Faculty photos
│       └── logo files          # School logos
└── styles.scss                  # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. **Clone the repository**
```bash
   git clone <repository-url>
   cd Alsafwa_Schools
```

2. **Install dependencies**
```bash
   npm install
   ```

3. **Start development server**
```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

## 🌐 Multilingual Implementation (Global Standard)

### URL Structure (Following Global Companies)
- **Arabic**: `alsafwa-schools.com/ar/`
- **English**: `alsafwa-schools.com/en/`
- **Auto-redirect**: Root URL redirects to Arabic by default

### Language Detection Priority
1. **URL Parameter**: Language from current URL
2. **Local Storage**: Previously selected language
3. **Browser Language**: User's browser language preference
4. **Default**: Arabic (ar)

### SEO Features (Enterprise-Grade)
- **Hreflang Tags**: Automatically generated for each language
- **Meta Tags**: Dynamic language and locale meta tags
- **URL Structure**: Clean, SEO-friendly URLs following global standards
- **RTL Support**: Proper direction attribute for Arabic
- **Sitemap**: Multi-language sitemap with proper hreflang
- **Robots.txt**: Professional configuration for search engines

## 🏫 School Information

**Safwat Al-Safwa International Schools**
- **Website**: https://alsafwa-schools.com
- **Email**: info@alsafwa-schools.edu.sa
- **Phone**: +966 555 888 999
- **Address**: King Fahd Street, Riyadh, Saudi Arabia
- **Mission**: Providing distinguished education from elementary to secondary levels

### Academic Levels
- **Elementary Stage**: Foundation years with interactive learning
- **Intermediate Stage**: Academic and professional principles
- **Secondary Stage**: Preparation for higher education or career

### Educational Features
- **Interactive Learning**: Self-directed and collaborative learning
- **Scientific Research**: Research skills development
- **Remote Learning**: Flexible distance learning options
- **Character Building**: Ethical and professional development

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `ng serve` | Start development server |
| `ng build` | Build for production |
| `ng test` | Run unit tests |
| `ng lint` | Run linting |

## 🔧 Configuration

### Language Configuration
The application supports easy addition of new languages:

1. **Add language code** to language service
2. **Create translation file** in `src/assets/i18n/`
3. **Update language service** configuration
4. **Add language option** to switcher component

### SEO Configuration
- **Meta tags** are automatically generated for educational content
- **Hreflang tags** are dynamically created
- **URL structure** follows best practices
- **Performance** is optimized for Core Web Vitals
- **Structured data** includes educational organization schema

## 🌟 Best Practices Implemented

### SEO Best Practices
- ✅ Separate URLs for each language
- ✅ Proper hreflang implementation
- ✅ Meta tags optimization for educational content
- ✅ Clean URL structure
- ✅ Performance optimization
- ✅ Educational institution structured data

### Code Quality
- ✅ TypeScript strict mode
- ✅ Standalone components
- ✅ Service-based architecture
- ✅ Interface-driven development
- ✅ Responsive design

### User Experience
- ✅ Intuitive language switching
- ✅ Smooth transitions
- ✅ Professional educational design
- ✅ Mobile-first approach
- ✅ Accessibility considerations

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is developed for Safwat Al-Safwa International Schools. All rights reserved.

## 📞 Support

For support and inquiries:
- **Email**: info@alsafwa-schools.edu.sa
- **Website**: https://alsafwa-schools.com

---

<div align="center">
  <p>Made with ❤️ for <strong>Safwat Al-Safwa International Schools</strong></p>
  <p><em>Excellence in Education</em></p>
</div>
