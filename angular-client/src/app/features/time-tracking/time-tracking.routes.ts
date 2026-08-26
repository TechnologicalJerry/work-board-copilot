import { Routes } from '@angular/router';

export const TIME_TRACKING_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/time-tracking-page/time-tracking-page.component').then(
        (m) => m.TimeTrackingPageComponent
      ),
  },
];
