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
    path: 'institutes',
    loadComponent: () => import('./institutes/institutes.component').then(m => m.InstitutesComponent)
  },
  {
    path: 'remote-learning',
    loadComponent: () => import('./remote-learning/remote-learning.component').then(m => m.RemoteLearningComponent)
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
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./error-page/error-page.component').then(m => m.ErrorPageComponent)
  }
];
