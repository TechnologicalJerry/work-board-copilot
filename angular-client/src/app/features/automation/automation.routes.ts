import { Routes } from '@angular/router';

export const AUTOMATION_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/automation-list-page/automation-list-page.component').then(
        (m) => m.AutomationListPageComponent
      ),
  },
];
