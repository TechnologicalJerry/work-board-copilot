export type WorkspaceVisibility = 'PUBLIC' | 'PRIVATE';
export type WorkspaceRole = 'OWNER' | 'ADMIN' | 'MEMBER' | 'VIEWER';

export interface WorkspaceMemberEntity {
  id: string;
  workspaceId: string;
  userId: string;
  role: WorkspaceRole;
  addedBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export class WorkspaceEntity {
  id: string;
  organizationId: string;
  name: string;
  slug: string;
  description: string | null;
  iconUrl: string | null;
  color: string | null;
  visibility: WorkspaceVisibility;
  settings: Record<string, unknown>;
  ownerId: string;
  createdBy: string;
  updatedBy: string;
  isArchived: boolean;
  archivedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  members?: WorkspaceMemberEntity[];

  constructor(data: {
    id: string;
    organizationId: string;
    name: string;
    slug: string;
    description: string | null;
    iconUrl: string | null;
    color: string | null;
    visibility: WorkspaceVisibility;
    settings: Record<string, unknown>;
    ownerId: string;
    createdBy: string;
    updatedBy: string;
    isArchived: boolean;
    archivedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    members?: WorkspaceMemberEntity[];
  }) {
    this.id = data.id;
    this.organizationId = data.organizationId;
    this.name = data.name;
    this.slug = data.slug;
    this.description = data.description;
    this.iconUrl = data.iconUrl;
    this.color = data.color;
    this.visibility = data.visibility;
    this.settings = data.settings;
    this.ownerId = data.ownerId;
    this.createdBy = data.createdBy;
    this.updatedBy = data.updatedBy;
    this.isArchived = data.isArchived;
    this.archivedAt = data.archivedAt;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.deletedAt = data.deletedAt;
    this.members = data.members;
  }

  isOwnedBy(userId: string): boolean {
    return this.ownerId === userId;
  }

  canBeAccessedBy(userId: string, members: WorkspaceMemberEntity[]): boolean {
    if (this.visibility === 'PUBLIC') {
      return true;
    }
    return members.some((m) => m.userId === userId);
  }
}
