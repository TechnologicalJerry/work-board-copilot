import { Routes } from '@angular/router';

export const WORKSPACES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./workspaces.component').then((m) => m.WorkspacesComponent),
  },
];
