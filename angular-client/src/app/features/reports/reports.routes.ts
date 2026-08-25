import { Routes } from '@angular/router';

export const REPORTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/report-dashboard-page/report-dashboard-page.component').then(
        (m) => m.ReportDashboardPageComponent
      ),
  },
];
