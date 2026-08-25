import { Routes } from '@angular/router';

export const PROJECTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/project-list-page/project-list-page.component').then(
        (m) => m.ProjectListPageComponent
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./pages/project-detail-page/project-detail-page.component').then(
        (m) => m.ProjectDetailPageComponent
      ),
  },
  {
    path: ':id/settings',
    loadComponent: () =>
      import('./pages/project-settings-page/project-settings-page.component').then(
        (m) => m.ProjectSettingsPageComponent
      ),
  },
];
