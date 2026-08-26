import { Routes } from '@angular/router';

export const SEARCH_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/search-results-page/search-results-page.component').then(
        (m) => m.SearchResultsPageComponent
      ),
  },
];
