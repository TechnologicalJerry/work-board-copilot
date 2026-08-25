import { Routes } from '@angular/router';

export const SPRINTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/sprint-planning-page/sprint-planning-page.component').then(
        (m) => m.SprintPlanningPageComponent
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./pages/sprint-detail-page/sprint-detail-page.component').then(
        (m) => m.SprintDetailPageComponent
      ),
  },
];
