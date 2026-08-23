import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { authGuard } from '../features/auth/guards/auth.guard';

export const LAYOUT_ROUTES: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('../features/dashboard/dashboard-overview.component').then((m) => m.DashboardOverviewComponent),
      },
      {
        path: 'organizations',
        loadChildren: () => import('../features/organizations/organizations.routes').then((m) => m.ORGANIZATIONS_ROUTES),
      },
      {
        path: 'workspaces',
        loadChildren: () => import('../features/workspaces/workspaces.routes').then((m) => m.WORKSPACES_ROUTES),
      },
      {
        path: 'teams',
        loadChildren: () => import('../features/teams/teams.routes').then((m) => m.TEAMS_ROUTES),
      },
      {
        path: 'projects',
        loadChildren: () => import('../features/projects/projects.routes').then((m) => m.PROJECTS_ROUTES),
      },
      {
        path: 'boards',
        loadChildren: () => import('../features/boards/boards.routes').then((m) => m.BOARDS_ROUTES),
      },
      {
        path: 'tasks',
        loadChildren: () => import('../features/tasks/tasks.routes').then((m) => m.TASKS_ROUTES),
      },
      {
        path: 'sprints',
        loadChildren: () => import('../features/sprints/sprints.routes').then((m) => m.SPRINTS_ROUTES),
      },
      {
        path: 'comments',
        loadChildren: () => import('../features/comments/comments.routes').then((m) => m.COMMENTS_ROUTES),
      },
      {
        path: 'documents',
        loadChildren: () => import('../features/documents/documents.routes').then((m) => m.DOCUMENTS_ROUTES),
      },
      {
        path: 'files',
        loadChildren: () => import('../features/files/files.routes').then((m) => m.FILES_ROUTES),
      },
      {
        path: 'notifications',
        loadChildren: () => import('../features/notifications/notifications.routes').then((m) => m.NOTIFICATIONS_ROUTES),
      },
      {
        path: 'time-tracking',
        loadChildren: () => import('../features/time-tracking/time-tracking.routes').then((m) => m.TIME_TRACKING_ROUTES),
      },
      {
        path: 'reports',
        loadChildren: () => import('../features/reports/reports.routes').then((m) => m.REPORTS_ROUTES),
      },
      {
        path: 'automation',
        loadChildren: () => import('../features/automation/automation.routes').then((m) => m.AUTOMATION_ROUTES),
      },
      {
        path: 'search',
        loadChildren: () => import('../features/search/search.routes').then((m) => m.SEARCH_ROUTES),
      },
      {
        path: 'ai',
        loadChildren: () => import('../features/ai/ai.routes').then((m) => m.AI_ROUTES),
      },
      {
        path: 'billing',
        loadChildren: () => import('../features/billing/billing.routes').then((m) => m.BILLING_ROUTES),
      },
      {
        path: 'settings',
        loadChildren: () => import('../features/settings/settings.routes').then((m) => m.SETTINGS_ROUTES),
      },
    ],
  },
];
