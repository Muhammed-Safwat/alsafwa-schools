# جامعة صفوت الصفوة الدولية - Design System Documentation

## نظرة عامة / Overview

هذا النظام التصميمي يوفر أساساً قوياً ومتسقاً لتطوير واجهة المستخدم لموقع جامعة صفوت الصفوة الدولية. تم تصميمه ليكون مرناً وقابلاً للتوسع مع دعم كامل للغة العربية واللغة الإنجليزية.

This design system provides a strong and consistent foundation for developing the user interface for Safwat Al-Safwa International University website. It's designed to be flexible and scalable with full support for Arabic and English languages.

## المكونات الأساسية / Core Components

### 1. نظام الألوان / Color System

#### الألوان الأساسية / Primary Colors
```css
--color-primary-500: #08915e; /* اللون الأساسي للجامعة */
```

#### نظام الألوان المحايدة / Neutral Color Scale
- `--color-neutral-50` إلى `--color-neutral-950`: مقياس من الأبيض إلى الأسود
- `--color-neutral-50`: #f8fafc (أفتح)
- `--color-neutral-950`: #020617 (أغمق)

#### الألوان الدلالية / Semantic Colors
- `--color-success`: #10b981 (أخضر للنجاح)
- `--color-warning`: #f59e0b (أصفر للتحذير)
- `--color-error`: #ef4444 (أحمر للخطأ)
- `--color-info`: #3b82f6 (أزرق للمعلومات)

### 2. نظام الخطوط / Typography System

#### خطوط النص / Font Families
```css
--font-primary: "Roboto", system-ui, sans-serif; /* النص الأساسي */
--font-heading: "Raleway", sans-serif; /* العناوين */
--font-navigation: "Poppins", sans-serif; /* القوائم */
--font-arabic: "Cairo", "Tajawal", "Noto Sans Arabic", sans-serif; /* العربية */
```

#### أحجام الخطوط المتجاوبة / Responsive Font Sizes
```css
--font-size-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
--font-size-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
--font-size-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
--font-size-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
--font-size-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
--font-size-2xl: clamp(1.5rem, 1.3rem + 1vw, 1.875rem);
--font-size-3xl: clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem);
--font-size-4xl: clamp(2.25rem, 1.9rem + 1.75vw, 3rem);
--font-size-5xl: clamp(3rem, 2.5rem + 2.5vw, 4rem);
```

### 3. نظام المسافات / Spacing System

مبني على شبكة 8px:
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### 4. نظام الحدود / Border Radius System

```css
--radius-sm: 0.125rem;   /* 2px */
--radius-base: 0.25rem;  /* 4px */
--radius-md: 0.375rem;   /* 6px */
--radius-lg: 0.5rem;     /* 8px */
--radius-xl: 0.75rem;    /* 12px */
--radius-2xl: 1rem;      /* 16px */
--radius-3xl: 1.5rem;    /* 24px */
--radius-full: 9999px;   /* دائري كامل */
```

### 5. نظام الظلال / Shadow System

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-base: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
```

## الاستخدام / Usage

### الألوان الدلالية / Semantic Colors

```css
/* خلفيات / Backgrounds */
background-color: var(--bg-primary);     /* الخلفية الأساسية */
background-color: var(--bg-secondary);   /* الخلفية الثانوية */
background-color: var(--bg-surface);     /* خلفية العناصر */

/* النصوص / Text Colors */
color: var(--text-primary);    /* النص الأساسي */
color: var(--text-secondary);  /* النص الثانوي */
color: var(--text-accent);     /* النص المميز */
color: var(--text-inverse);    /* النص المعكوس */
```

### الأزرار / Buttons

```html
<!-- زر أساسي / Primary Button -->
<button class="btn btn-primary">زر أساسي</button>

<!-- زر ثانوي / Secondary Button -->
<button class="btn btn-secondary">زر ثانوي</button>

<!-- أحجام مختلفة / Different Sizes -->
<button class="btn btn-primary btn-sm">صغير</button>
<button class="btn btn-primary">عادي</button>
<button class="btn btn-primary btn-lg">كبير</button>
```

### التخطيط / Layout

```html
<!-- حاوي / Container -->
<div class="container">
  <!-- المحتوى / Content -->
</div>

<!-- شبكة / Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- العناصر / Items -->
</div>

<!-- Flexbox -->
<div class="flex items-center justify-between">
  <!-- العناصر / Items -->
</div>
```

### النماذج / Forms

```html
<input type="text" placeholder="الاسم" />
<input type="email" placeholder="البريد الإلكتروني" />
<textarea placeholder="الرسالة"></textarea>
<select>
  <option>اختر...</option>
</select>
```

## الثيمات / Themes

### الثيم الفاتح / Light Theme (افتراضي)
```css
.theme-light {
  --bg-primary: var(--color-neutral-50);
  --text-primary: var(--color-neutral-900);
  /* ... */
}
```

### الثيم الداكن / Dark Theme
```css
.theme-dark {
  --bg-primary: var(--color-neutral-900);
  --text-primary: #ffffff;
  /* ... */
}
```

### ثيم التباين العالي / High Contrast Theme
```css
.theme-high-contrast {
  --bg-primary: #ffffff;
  --text-primary: #000000;
  /* ... */
}
```

## دعم RTL / RTL Support

```css
[dir="rtl"] {
  --font-primary: var(--font-arabic);
}
```

## إمكانية الوصول / Accessibility

- دعم كامل للتنقل بالكيبورد / Full keyboard navigation support
- تباين ألوان مناسب / Appropriate color contrast
- دعم قارئات الشاشة / Screen reader support
- دعم الحركة المقللة / Reduced motion support

## الطباعة / Print Styles

تم تحسين النظام للطباعة مع:
- إزالة الألوان والظلال / Remove colors and shadows
- إضافة روابط النصوص / Add text links
- إخفاء العناصر غير المرغوب فيها / Hide unwanted elements

## أفضل الممارسات / Best Practices

1. **استخدم المتغيرات الدلالية** / Use semantic variables
2. **احترم نظام المسافات** / Respect the spacing system
3. **استخدم الخطوط المناسبة** / Use appropriate fonts
4. **اختبر إمكانية الوصول** / Test accessibility
5. **اختبر على أجهزة مختلفة** / Test on different devices

## التطوير المستقبلي / Future Development

- إضافة مكونات أكثر / Add more components
- تحسين دعم RTL / Improve RTL support
- إضافة ثيمات جديدة / Add new themes
- تحسين الأداء / Performance improvements

---

**ملاحظة**: هذا النظام التصميمي في طور التطوير المستمر. يرجى مراجعة هذا الملف بانتظام للحصول على أحدث التحديثات.

**Note**: This design system is under continuous development. Please check this file regularly for the latest updates.
