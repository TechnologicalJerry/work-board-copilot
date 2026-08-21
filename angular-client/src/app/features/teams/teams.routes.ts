import { Routes } from '@angular/router';

export const TEAMS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./teams.component').then((m) => m.TeamsComponent),
  },
];
