import { Routes } from '@angular/router';

export const TEAMS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/team-list-page/team-list-page.component').then(
        (m) => m.TeamListPageComponent
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./pages/team-detail-page/team-detail-page.component').then(
        (m) => m.TeamDetailPageComponent
      ),
  },
];
