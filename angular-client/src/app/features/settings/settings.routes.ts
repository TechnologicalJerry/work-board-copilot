import { Routes } from '@angular/router';

export const SETTINGS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../users/pages/user-settings-page/user-settings-page.component').then(
        (m) => m.UserSettingsPageComponent
      ),
  },
];
