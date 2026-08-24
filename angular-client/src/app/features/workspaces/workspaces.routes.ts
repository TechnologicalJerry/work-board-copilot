import { Routes } from '@angular/router';

export const WORKSPACES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/workspace-list-page/workspace-list-page.component').then(
        (m) => m.WorkspaceListPageComponent
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./pages/workspace-detail-page/workspace-detail-page.component').then(
        (m) => m.WorkspaceDetailPageComponent
      ),
  },
  {
    path: ':id/settings',
    loadComponent: () =>
      import('./pages/workspace-settings-page/workspace-settings-page.component').then(
        (m) => m.WorkspaceSettingsPageComponent
      ),
  },
];
