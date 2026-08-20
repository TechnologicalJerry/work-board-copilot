/**
 * API Gateway microservice route prefixes mapping to backend services
 */
export const API_ENDPOINTS = {
  IDENTITY: '/identity',
  USERS: '/users',
  ORGANIZATIONS: '/organizations',
  WORKSPACES: '/workspaces',
  TEAMS: '/teams',
  PROJECTS: '/projects',
  BOARDS: '/boards',
  TASKS: '/tasks',
  SPRINTS: '/sprints',
  COMMENTS: '/comments',
  DOCUMENTS: '/documents',
  FILES: '/files',
  NOTIFICATIONS: '/notifications',
  TIME_TRACKING: '/time-tracking',
  REPORTS: '/reports',
  AUTOMATION: '/automation',
  SEARCH: '/search',
  AI: '/ai',
  BILLING: '/billing',
  AUDIT: '/audit',
} as const;
