import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '@core/api/api-client.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';
import { ApiResponse } from '@core/api/api-response';
import {
  Project,
  ProjectMember,
  ProjectLabel,
  ProjectMilestone,
  CreateProjectRequest,
  UpdateProjectRequest,
} from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectApiService {
  private readonly api = inject(ApiClientService);

  getProjects(organizationId: string, workspaceId?: string): Observable<ApiResponse<Project[]>> {
    const params: Record<string, string> = { organizationId };
    if (workspaceId) {
      params['workspaceId'] = workspaceId;
    }
    return this.api.get<ApiResponse<Project[]>>(API_ENDPOINTS.PROJECTS, { params });
  }

  getProjectById(id: string): Observable<ApiResponse<Project>> {
    return this.api.get<ApiResponse<Project>>(`${API_ENDPOINTS.PROJECTS}/${id}`);
  }

  createProject(payload: CreateProjectRequest): Observable<ApiResponse<Project>> {
    return this.api.post<ApiResponse<Project>>(API_ENDPOINTS.PROJECTS, payload);
  }

  updateProject(id: string, payload: UpdateProjectRequest): Observable<ApiResponse<Project>> {
    return this.api.put<ApiResponse<Project>>(`${API_ENDPOINTS.PROJECTS}/${id}`, payload);
  }

  deleteProject(id: string): Observable<ApiResponse<{ success: boolean }>> {
    return this.api.delete<ApiResponse<{ success: boolean }>>(`${API_ENDPOINTS.PROJECTS}/${id}`);
  }

  getMembers(projectId: string): Observable<ApiResponse<ProjectMember[]>> {
    return this.api.get<ApiResponse<ProjectMember[]>>(`${API_ENDPOINTS.PROJECTS}/${projectId}/members`);
  }

  addMember(projectId: string, userId: string, role: string): Observable<ApiResponse<ProjectMember>> {
    return this.api.post<ApiResponse<ProjectMember>>(`${API_ENDPOINTS.PROJECTS}/${projectId}/members`, { userId, role });
  }

  removeMember(projectId: string, userId: string): Observable<ApiResponse<{ success: boolean }>> {
    return this.api.delete<ApiResponse<{ success: boolean }>>(`${API_ENDPOINTS.PROJECTS}/${projectId}/members/${userId}`);
  }

  getLabels(projectId: string): Observable<ApiResponse<ProjectLabel[]>> {
    return this.api.get<ApiResponse<ProjectLabel[]>>(`${API_ENDPOINTS.PROJECTS}/${projectId}/labels`);
  }

  getMilestones(projectId: string): Observable<ApiResponse<ProjectMilestone[]>> {
    return this.api.get<ApiResponse<ProjectMilestone[]>>(`${API_ENDPOINTS.PROJECTS}/${projectId}/milestones`);
  }
}
