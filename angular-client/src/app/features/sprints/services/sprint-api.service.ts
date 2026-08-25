import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '@core/api/api-client.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';
import { ApiResponse } from '@core/api/api-response';
import {
  Sprint,
  SprintBurndown,
  CreateSprintRequest,
  UpdateSprintRequest,
  AddSprintItemRequest,
} from '../models/sprint.model';

@Injectable({
  providedIn: 'root',
})
export class SprintApiService {
  private readonly api = inject(ApiClientService);

  getSprints(projectId: string, status?: string): Observable<ApiResponse<Sprint[]>> {
    const params: Record<string, string> = { projectId };
    if (status) params['status'] = status;
    return this.api.get<ApiResponse<Sprint[]>>(API_ENDPOINTS.SPRINTS, { params });
  }

  getSprintById(id: string): Observable<ApiResponse<Sprint>> {
    return this.api.get<ApiResponse<Sprint>>(`${API_ENDPOINTS.SPRINTS}/${id}`);
  }

  createSprint(payload: CreateSprintRequest): Observable<ApiResponse<Sprint>> {
    return this.api.post<ApiResponse<Sprint>>(API_ENDPOINTS.SPRINTS, payload);
  }

  updateSprint(id: string, payload: UpdateSprintRequest): Observable<ApiResponse<Sprint>> {
    return this.api.put<ApiResponse<Sprint>>(`${API_ENDPOINTS.SPRINTS}/${id}`, payload);
  }

  deleteSprint(id: string): Observable<ApiResponse<{ success: boolean }>> {
    return this.api.delete<ApiResponse<{ success: boolean }>>(`${API_ENDPOINTS.SPRINTS}/${id}`);
  }

  startSprint(id: string): Observable<ApiResponse<Sprint>> {
    return this.api.post<ApiResponse<Sprint>>(`${API_ENDPOINTS.SPRINTS}/${id}/start`);
  }

  completeSprint(id: string): Observable<ApiResponse<Sprint>> {
    return this.api.post<ApiResponse<Sprint>>(`${API_ENDPOINTS.SPRINTS}/${id}/complete`);
  }

  getBurndown(id: string): Observable<ApiResponse<SprintBurndown>> {
    return this.api.get<ApiResponse<SprintBurndown>>(`${API_ENDPOINTS.SPRINTS}/${id}/burndown`);
  }

  addItem(id: string, payload: AddSprintItemRequest): Observable<ApiResponse<{ success: boolean }>> {
    return this.api.post<ApiResponse<{ success: boolean }>>(`${API_ENDPOINTS.SPRINTS}/${id}/items`, payload);
  }

  removeItem(id: string, taskId: string): Observable<ApiResponse<{ success: boolean }>> {
    return this.api.delete<ApiResponse<{ success: boolean }>>(`${API_ENDPOINTS.SPRINTS}/${id}/items/${taskId}`);
  }
}
