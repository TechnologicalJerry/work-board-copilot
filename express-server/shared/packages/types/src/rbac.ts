export const Permission = {
  // User permissions
  USER_READ: 'user:read',
  USER_WRITE: 'user:write',
  USER_DELETE: 'user:delete',

  // Organization permissions
  ORG_READ: 'org:read',
  ORG_WRITE: 'org:write',
  ORG_DELETE: 'org:delete',
  ORG_MANAGE_MEMBERS: 'org:manage_members',
  ORG_MANAGE_BILLING: 'org:manage_billing',

  // Workspace permissions
  WORKSPACE_READ: 'workspace:read',
  WORKSPACE_WRITE: 'workspace:write',
  WORKSPACE_DELETE: 'workspace:delete',
  WORKSPACE_MANAGE_MEMBERS: 'workspace:manage_members',

  // Project permissions
  PROJECT_READ: 'project:read',
  PROJECT_WRITE: 'project:write',
  PROJECT_DELETE: 'project:delete',
  PROJECT_MANAGE: 'project:manage',

  // Task permissions
  TASK_READ: 'task:read',
  TASK_WRITE: 'task:write',
  TASK_DELETE: 'task:delete',
  TASK_ASSIGN: 'task:assign',

  // Sprint permissions
  SPRINT_READ: 'sprint:read',
  SPRINT_WRITE: 'sprint:write',
  SPRINT_DELETE: 'sprint:delete',
  SPRINT_MANAGE: 'sprint:manage',

  // Report permissions
  REPORT_READ: 'report:read',
  REPORT_WRITE: 'report:write',

  // Admin permissions
  ADMIN_ALL: 'admin:*',
} as const;

export type PermissionKey = (typeof Permission)[keyof typeof Permission];

export const RolePermissions: Record<string, PermissionKey[]> = {
  super_admin: [Permission.ADMIN_ALL],
  org_admin: [
    Permission.ORG_READ,
    Permission.ORG_WRITE,
    Permission.ORG_MANAGE_MEMBERS,
    Permission.ORG_MANAGE_BILLING,
    Permission.WORKSPACE_READ,
    Permission.WORKSPACE_WRITE,
    Permission.WORKSPACE_MANAGE_MEMBERS,
    Permission.PROJECT_READ,
    Permission.PROJECT_WRITE,
    Permission.PROJECT_DELETE,
    Permission.PROJECT_MANAGE,
    Permission.TASK_READ,
    Permission.TASK_WRITE,
    Permission.TASK_DELETE,
    Permission.TASK_ASSIGN,
    Permission.SPRINT_MANAGE,
    Permission.REPORT_READ,
    Permission.REPORT_WRITE,
    Permission.USER_READ,
    Permission.USER_WRITE,
  ],
  project_manager: [
    Permission.WORKSPACE_READ,
    Permission.PROJECT_READ,
    Permission.PROJECT_WRITE,
    Permission.PROJECT_MANAGE,
    Permission.TASK_READ,
    Permission.TASK_WRITE,
    Permission.TASK_DELETE,
    Permission.TASK_ASSIGN,
    Permission.SPRINT_MANAGE,
    Permission.REPORT_READ,
    Permission.USER_READ,
  ],
  team_lead: [
    Permission.WORKSPACE_READ,
    Permission.PROJECT_READ,
    Permission.PROJECT_WRITE,
    Permission.TASK_READ,
    Permission.TASK_WRITE,
    Permission.TASK_ASSIGN,
    Permission.SPRINT_READ,
    Permission.SPRINT_WRITE,
    Permission.REPORT_READ,
    Permission.USER_READ,
  ],
  team_member: [
    Permission.WORKSPACE_READ,
    Permission.PROJECT_READ,
    Permission.TASK_READ,
    Permission.TASK_WRITE,
    Permission.SPRINT_READ,
    Permission.USER_READ,
  ],
  viewer: [
    Permission.WORKSPACE_READ,
    Permission.PROJECT_READ,
    Permission.TASK_READ,
    Permission.SPRINT_READ,
    Permission.REPORT_READ,
  ],
  guest: [Permission.PROJECT_READ, Permission.TASK_READ],
};
