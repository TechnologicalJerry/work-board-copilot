import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '@core/api/api-client.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';
import { ApiResponse } from '@core/api/api-response';
import {
  DocumentItem,
  DocumentTreeItem,
  CreateDocumentRequest,
  UpdateDocumentRequest,
} from '../models/document.model';

@Injectable({
  providedIn: 'root',
})
export class DocumentApiService {
  private readonly api = inject(ApiClientService);

  getTree(): Observable<ApiResponse<DocumentTreeItem[]>> {
    return this.api.get<ApiResponse<DocumentTreeItem[]>>(`${API_ENDPOINTS.DOCUMENTS}/tree`);
  }

  getDocuments(workspaceId?: string, projectId?: string): Observable<ApiResponse<DocumentItem[]>> {
    const params: Record<string, string> = {};
    if (workspaceId) params['workspaceId'] = workspaceId;
    if (projectId) params['projectId'] = projectId;

    return this.api.get<ApiResponse<DocumentItem[]>>(API_ENDPOINTS.DOCUMENTS, { params });
  }

  getDocumentById(id: string): Observable<ApiResponse<DocumentItem>> {
    return this.api.get<ApiResponse<DocumentItem>>(`${API_ENDPOINTS.DOCUMENTS}/${id}`);
  }

  createDocument(payload: CreateDocumentRequest): Observable<ApiResponse<DocumentItem>> {
    return this.api.post<ApiResponse<DocumentItem>>(API_ENDPOINTS.DOCUMENTS, payload);
  }

  updateDocument(id: string, payload: UpdateDocumentRequest): Observable<ApiResponse<DocumentItem>> {
    return this.api.patch<ApiResponse<DocumentItem>>(`${API_ENDPOINTS.DOCUMENTS}/${id}`, payload);
  }

  deleteDocument(id: string): Observable<ApiResponse<{ success: boolean }>> {
    return this.api.delete<ApiResponse<{ success: boolean }>>(`${API_ENDPOINTS.DOCUMENTS}/${id}`);
  }

  publishDocument(id: string): Observable<ApiResponse<DocumentItem>> {
    return this.api.patch<ApiResponse<DocumentItem>>(`${API_ENDPOINTS.DOCUMENTS}/${id}/publish`);
  }

  restoreVersion(id: string, version: number): Observable<ApiResponse<DocumentItem>> {
    return this.api.post<ApiResponse<DocumentItem>>(`${API_ENDPOINTS.DOCUMENTS}/${id}/restore`, { version });
  }
}
