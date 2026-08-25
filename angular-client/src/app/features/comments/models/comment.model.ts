export type CommentEntityType = 'task' | 'document' | 'epic' | 'project';

export interface CommentReaction {
  emoji: string;
  count: number;
  userIds: string[];
}

export interface Comment {
  id: string;
  entityId: string;
  entityType: CommentEntityType;
  projectId: string;
  organizationId: string;
  authorId: string;
  author?: {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    avatarUrl?: string;
  };
  parentId?: string | null;
  content: string;
  isResolved?: boolean;
  isPinned?: boolean;
  reactions?: CommentReaction[];
  replyCount?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateCommentRequest {
  entityId: string;
  entityType: CommentEntityType;
  projectId: string;
  organizationId: string;
  parentId?: string | null;
  content: string;
}

export interface UpdateCommentRequest {
  content: string;
}

export interface AddReactionRequest {
  emoji: string;
}
