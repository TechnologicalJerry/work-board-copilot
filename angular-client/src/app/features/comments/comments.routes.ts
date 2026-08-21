import { Routes } from '@angular/router';

export const COMMENTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./comments.component').then((m) => m.CommentsComponent),
  },
];
