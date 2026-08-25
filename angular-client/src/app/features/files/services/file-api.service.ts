import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiClientService } from '@core/api/api-client.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';
import { ApiResponse } from '@core/api/api-response';
import { FileItem, UploadFileRequest, PresignedUploadRequest } from '../models/file.model';

@Injectable({
  providedIn: 'root',
})
export class FileApiService {
  private readonly api = inject(ApiClientService);
  private readonly http = inject(HttpClient);

  getFilesForEntity(entityId: string, entityType: string): Observable<ApiResponse<FileItem[]>> {
    return this.api.get<ApiResponse<FileItem[]>>(`${API_ENDPOINTS.FILES}/entity`, {
      params: { entityId, entityType },
    });
  }

  uploadFile(req: UploadFileRequest): Observable<ApiResponse<FileItem>> {
    const formData = new FormData();
    formData.append('file', req.file);
    formData.append('organizationId', req.organizationId);
    if (req.entityId) formData.append('entityId', req.entityId);
    if (req.entityType) formData.append('entityType', req.entityType);

    return this.http.post<ApiResponse<FileItem>>('/api/v1/files', formData);
  }

  getDownloadUrl(id: string): Observable<ApiResponse<{ downloadUrl: string }>> {
    return this.api.get<ApiResponse<{ downloadUrl: string }>>(`${API_ENDPOINTS.FILES}/${id}/download`);
  }

  deleteFile(id: string): Observable<ApiResponse<{ success: boolean }>> {
    return this.api.delete<ApiResponse<{ success: boolean }>>(`${API_ENDPOINTS.FILES}/${id}`);
  }
}
