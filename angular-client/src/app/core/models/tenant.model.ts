export interface OrganizationContext {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string;
  role: 'OWNER' | 'ADMIN' | 'MEMBER' | 'GUEST';
}

export interface WorkspaceContext {
  id: string;
  organizationId: string;
  name: string;
  slug: string;
  role: 'ADMIN' | 'MEMBER' | 'VIEWER';
}

export interface TenantState {
  currentOrganization: OrganizationContext | null;
  currentWorkspace: WorkspaceContext | null;
  availableOrganizations: OrganizationContext[];
  availableWorkspaces: WorkspaceContext[];
}
