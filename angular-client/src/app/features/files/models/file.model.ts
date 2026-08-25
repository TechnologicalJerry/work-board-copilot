export interface FileItem {
  id: string;
  organizationId: string;
  entityId?: string;
  entityType?: string;
  originalName: string;
  mimeType: string;
  size: number;
  url?: string;
  downloadUrl?: string;
  uploadedBy?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UploadFileRequest {
  organizationId: string;
  entityId?: string;
  entityType?: string;
  file: File;
}

export interface PresignedUploadRequest {
  organizationId: string;
  entityId?: string;
  entityType?: string;
  originalName: string;
  mimeType: string;
  size: number;
}
