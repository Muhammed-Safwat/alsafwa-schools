import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/ar',
    pathMatch: 'full'
  },
  {
    path: ':lang',
    loadChildren: () => import('./pages/pages.routes').then(m => m.pagesRoutes)
  },
  {
    path: '**',
    redirectTo: '/ar',
  },
];
