import { Routes } from '@angular/router';

export const FILES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./files.component').then((m) => m.FilesComponent),
  },
];
