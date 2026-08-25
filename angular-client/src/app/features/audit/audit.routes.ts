import { Routes } from '@angular/router';

export const AUDIT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/audit-log-page/audit-log-page.component').then(
        (m) => m.AuditLogPageComponent
      ),
  },
];
