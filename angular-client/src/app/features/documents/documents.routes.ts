import { Routes } from '@angular/router';

export const DOCUMENTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/document-list-page/document-list-page.component').then(
        (m) => m.DocumentListPageComponent
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./pages/document-detail-page/document-detail-page.component').then(
        (m) => m.DocumentDetailPageComponent
      ),
  },
];
