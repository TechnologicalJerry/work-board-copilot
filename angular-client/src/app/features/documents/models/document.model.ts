export type DocumentType = 'wiki' | 'spec' | 'runbook' | 'meeting_notes' | 'template' | 'general';
export type DocumentVisibility = 'public' | 'private' | 'team';

export interface DocumentItem {
  id: string;
  organizationId: string;
  workspaceId: string;
  projectId?: string;
  title: string;
  content?: unknown;
  contentText?: string;
  contentHtml?: string;
  type: DocumentType;
  visibility: DocumentVisibility;
  icon?: string;
  parentId?: string | null;
  tags?: string[];
  version?: number;
  authorId?: string;
  author?: {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
  };
  isPublished?: boolean;
  isArchived?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface DocumentTreeItem {
  id: string;
  title: string;
  icon?: string;
  parentId?: string | null;
  children?: DocumentTreeItem[];
}

export interface CreateDocumentRequest {
  organizationId: string;
  workspaceId: string;
  projectId?: string;
  title: string;
  content?: unknown;
  contentText?: string;
  contentHtml?: string;
  type?: DocumentType;
  visibility?: DocumentVisibility;
  icon?: string;
  parentId?: string;
  tags?: string[];
}

export interface UpdateDocumentRequest {
  title?: string;
  content?: unknown;
  contentText?: string;
  contentHtml?: string;
  visibility?: DocumentVisibility;
  icon?: string;
  tags?: string[];
  changeDescription?: string;
}
