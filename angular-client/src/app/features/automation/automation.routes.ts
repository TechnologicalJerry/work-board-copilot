import { Routes } from '@angular/router';

export const AUTOMATION_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./automation.component').then((m) => m.AutomationComponent),
  },
];
