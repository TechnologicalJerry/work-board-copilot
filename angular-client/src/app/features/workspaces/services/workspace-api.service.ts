import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '@core/api/api-client.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';
import { ApiResponse } from '@core/api/api-response';
import {
  Workspace,
  WorkspaceMember,
  CreateWorkspaceRequest,
  UpdateWorkspaceRequest,
  AddWorkspaceMemberRequest,
} from '../models/workspace.model';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceApiService {
  private readonly api = inject(ApiClientService);

  getWorkspaces(organizationId: string): Observable<ApiResponse<Workspace[]>> {
    return this.api.get<ApiResponse<Workspace[]>>(API_ENDPOINTS.WORKSPACES, {
      params: { organizationId },
    });
  }

  getWorkspaceById(id: string): Observable<ApiResponse<Workspace>> {
    return this.api.get<ApiResponse<Workspace>>(`${API_ENDPOINTS.WORKSPACES}/${id}`);
  }

  createWorkspace(payload: CreateWorkspaceRequest): Observable<ApiResponse<Workspace>> {
    return this.api.post<ApiResponse<Workspace>>(API_ENDPOINTS.WORKSPACES, payload);
  }

  updateWorkspace(id: string, payload: UpdateWorkspaceRequest): Observable<ApiResponse<Workspace>> {
    return this.api.put<ApiResponse<Workspace>>(`${API_ENDPOINTS.WORKSPACES}/${id}`, payload);
  }

  deleteWorkspace(id: string): Observable<ApiResponse<{ success: boolean }>> {
    return this.api.delete<ApiResponse<{ success: boolean }>>(`${API_ENDPOINTS.WORKSPACES}/${id}`);
  }

  getMembers(workspaceId: string): Observable<ApiResponse<WorkspaceMember[]>> {
    return this.api.get<ApiResponse<WorkspaceMember[]>>(`${API_ENDPOINTS.WORKSPACES}/${workspaceId}/members`);
  }

  addMember(workspaceId: string, payload: AddWorkspaceMemberRequest): Observable<ApiResponse<WorkspaceMember>> {
    return this.api.post<ApiResponse<WorkspaceMember>>(`${API_ENDPOINTS.WORKSPACES}/${workspaceId}/members`, payload);
  }

  removeMember(workspaceId: string, userId: string): Observable<ApiResponse<{ success: boolean }>> {
    return this.api.delete<ApiResponse<{ success: boolean }>>(`${API_ENDPOINTS.WORKSPACES}/${workspaceId}/members/${userId}`);
  }
}
