import { Routes } from '@angular/router';

export const BOARDS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/board-detail-page/board-detail-page.component').then(
        (m) => m.BoardDetailPageComponent
      ),
  },
];
