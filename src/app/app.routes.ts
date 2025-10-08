import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: ':lang',
    loadChildren: () => import('./pages/pages.routes').then(m => m.pagesRoutes)
  },
  {
    path: '',
    redirectTo: 'ar',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadComponent: () => import('./pages/error-page/error-page.component').then(m => m.ErrorPageComponent),
    title: 'Page Not Found'
  }
];
