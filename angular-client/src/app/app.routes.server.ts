import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'organizations/:id',
    renderMode: RenderMode.Client,
  },
  {
    path: 'organizations/:id/settings',
    renderMode: RenderMode.Client,
  },
  {
    path: 'workspaces/:id',
    renderMode: RenderMode.Client,
  },
  {
    path: 'workspaces/:id/settings',
    renderMode: RenderMode.Client,
  },
  {
    path: 'teams/:id',
    renderMode: RenderMode.Client,
  },
  {
    path: 'projects/:id',
    renderMode: RenderMode.Client,
  },
  {
    path: 'projects/:id/settings',
    renderMode: RenderMode.Client,
  },
  {
    path: 'tasks/:id',
    renderMode: RenderMode.Client,
  },
  {
    path: 'sprints/:id',
    renderMode: RenderMode.Client,
  },
  {
    path: 'documents/:id',
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
