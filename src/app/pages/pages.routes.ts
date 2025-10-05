import { Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';

export const pagesRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'admissions',
    loadComponent: () => import('./admissions/admissions.component').then(m => m.AdmissionsComponent)
  },
  {
    path: 'faculty',
    loadComponent: () => import('./faculty/faculty.component').then(m => m.FacultyComponent)
  },
  {
    path: 'institutes',
    loadComponent: () => import('./faculty/faculty.component').then(m => m.FacultyComponent)
  },
  {
    path: 'research',
    loadComponent: () => import('./faculty/faculty.component').then(m => m.FacultyComponent)
  },
  {
    path: 'distance-learning',
    loadComponent: () => import('./faculty/faculty.component').then(m => m.FacultyComponent)
  },
  {
    path: 'terms-of-service',
    loadComponent: () => import('./terms-of-service/terms-of-service.component').then(m => m.TermsOfServiceComponent)
  },
  {
    path: 'privacy',
    loadComponent: () => import('./privacy/privacy.component').then(m => m.PrivacyComponent)
  },
  {
    path: '**',
    loadComponent : () => import('./error-page/error-page.component').then(m => m.ErrorPageComponent)
  }
];
