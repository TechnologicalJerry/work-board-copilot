import { Routes } from '@angular/router';

export const AI_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/ai-copilot-page/ai-copilot-page.component').then(
        (m) => m.AiCopilotPageComponent
      ),
  },
];
