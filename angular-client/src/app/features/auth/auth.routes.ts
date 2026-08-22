import { Routes } from '@angular/router';
import { guestGuard } from './guards/guest.guard';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    canActivate: [guestGuard],
    loadComponent: () => import('./components/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    canActivate: [guestGuard],
    loadComponent: () => import('./components/register/register.component').then((m) => m.RegisterComponent),
  },
  {
    path: 'oauth/callback',
    loadComponent: () =>
      import('./components/oauth-callback/oauth-callback.component').then((m) => m.OauthCallbackComponent),
  },
];
