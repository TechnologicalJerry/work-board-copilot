import { Routes } from '@angular/router';

export const SPRINTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./sprints.component').then((m) => m.SprintsComponent),
  },
];
