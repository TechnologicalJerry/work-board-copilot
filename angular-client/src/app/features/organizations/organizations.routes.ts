import { Routes } from '@angular/router';

export const ORGANIZATIONS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/organization-list-page/organization-list-page.component').then(
        (m) => m.OrganizationListPageComponent
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./pages/organization-detail-page/organization-detail-page.component').then(
        (m) => m.OrganizationDetailPageComponent
      ),
  },
  {
    path: ':id/settings',
    loadComponent: () =>
      import('./pages/organization-settings-page/organization-settings-page.component').then(
        (m) => m.OrganizationSettingsPageComponent
      ),
  },
];
