import { Routes } from '@angular/router';

export const USERS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/user-profile-page/user-profile-page.component').then(
        (m) => m.UserProfilePageComponent
      ),
  },
  {
    path: 'me',
    loadComponent: () =>
      import('./pages/user-profile-page/user-profile-page.component').then(
        (m) => m.UserProfilePageComponent
      ),
  },
];
