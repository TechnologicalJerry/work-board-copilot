import { NavigationGroup } from './navigation.model';

export const DEFAULT_NAVIGATION_GROUPS: NavigationGroup[] = [
  {
    id: 'main',
    title: 'Core Work',
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        route: '/dashboard',
        icon: 'LayoutDashboard',
      },
      {
        id: 'projects',
        label: 'Projects',
        route: '/projects',
        icon: 'FolderKanban',
      },
      {
        id: 'boards',
        label: 'Boards',
        route: '/boards',
        icon: 'Kanban',
      },
      {
        id: 'tasks',
        label: 'Tasks',
        route: '/tasks',
        icon: 'CheckSquare',
      },
      {
        id: 'sprints',
        label: 'Sprints',
        route: '/sprints',
        icon: 'Zap',
      },
    ],
  },
  {
    id: 'collaboration',
    title: 'Collaboration & Content',
    items: [
      {
        id: 'documents',
        label: 'Documents',
        route: '/documents',
        icon: 'FileText',
      },
      {
        id: 'files',
        label: 'Files',
        route: '/files',
        icon: 'Paperclip',
      },
      {
        id: 'notifications',
        label: 'Notifications',
        route: '/notifications',
        icon: 'Bell',
      },
    ],
  },
  {
    id: 'insights',
    title: 'Analytics & Automation',
    items: [
      {
        id: 'time-tracking',
        label: 'Time Tracking',
        route: '/time-tracking',
        icon: 'Clock',
      },
      {
        id: 'reports',
        label: 'Reports',
        route: '/reports',
        icon: 'BarChart3',
      },
      {
        id: 'automation',
        label: 'Automation',
        route: '/automation',
        icon: 'Workflow',
      },
      {
        id: 'search',
        label: 'Global Search',
        route: '/search',
        icon: 'Search',
      },
      {
        id: 'ai',
        label: 'AI Copilot',
        route: '/ai',
        icon: 'Bot',
        badge: { text: 'AI', variant: 'indigo' },
      },
    ],
  },
  {
    id: 'admin',
    title: 'Administration',
    items: [
      {
        id: 'organizations',
        label: 'Organizations',
        route: '/organizations',
        icon: 'Building',
      },
      {
        id: 'workspaces',
        label: 'Workspaces',
        route: '/workspaces',
        icon: 'Boxes',
      },
      {
        id: 'teams',
        label: 'Teams & Users',
        route: '/teams',
        icon: 'Users',
      },
      {
        id: 'billing',
        label: 'Billing',
        route: '/billing',
        icon: 'CreditCard',
      },
      {
        id: 'settings',
        label: 'Settings',
        route: '/settings',
        icon: 'Settings',
      },
    ],
  },
];
