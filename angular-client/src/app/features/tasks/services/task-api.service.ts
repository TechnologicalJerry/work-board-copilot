import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '@core/api/api-client.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';
import { ApiResponse } from '@core/api/api-response';
import {
  Task,
  TaskStatus,
  CreateTaskRequest,
  UpdateTaskRequest,
} from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskApiService {
  private readonly api = inject(ApiClientService);

  getTasks(
    organizationId: string,
    filters?: {
      projectId?: string;
      sprintId?: string;
      boardId?: string;
      assigneeId?: string;
      status?: string;
      search?: string;
    }
  ): Observable<ApiResponse<Task[]>> {
    const params: Record<string, string> = { organizationId };
    if (filters?.projectId) params['projectId'] = filters.projectId;
    if (filters?.sprintId) params['sprintId'] = filters.sprintId;
    if (filters?.boardId) params['boardId'] = filters.boardId;
    if (filters?.assigneeId) params['assigneeId'] = filters.assigneeId;
    if (filters?.status) params['status'] = filters.status;
    if (filters?.search) params['search'] = filters.search;

    return this.api.get<ApiResponse<Task[]>>(API_ENDPOINTS.TASKS, { params });
  }

  getTaskById(id: string): Observable<ApiResponse<Task>> {
    return this.api.get<ApiResponse<Task>>(`${API_ENDPOINTS.TASKS}/${id}`);
  }

  createTask(payload: CreateTaskRequest): Observable<ApiResponse<Task>> {
    return this.api.post<ApiResponse<Task>>(API_ENDPOINTS.TASKS, payload);
  }

  updateTask(id: string, payload: UpdateTaskRequest): Observable<ApiResponse<Task>> {
    return this.api.put<ApiResponse<Task>>(`${API_ENDPOINTS.TASKS}/${id}`, payload);
  }

  deleteTask(id: string): Observable<ApiResponse<{ success: boolean }>> {
    return this.api.delete<ApiResponse<{ success: boolean }>>(`${API_ENDPOINTS.TASKS}/${id}`);
  }

  assignTask(id: string, assigneeId: string | null): Observable<ApiResponse<Task>> {
    return this.api.post<ApiResponse<Task>>(`${API_ENDPOINTS.TASKS}/${id}/assign`, { assigneeId });
  }

  changeStatus(id: string, status: TaskStatus): Observable<ApiResponse<Task>> {
    return this.api.post<ApiResponse<Task>>(`${API_ENDPOINTS.TASKS}/${id}/status`, { status });
  }

  bulkUpdateStatus(taskIds: string[], status: TaskStatus): Observable<ApiResponse<{ count: number }>> {
    return this.api.post<ApiResponse<{ count: number }>>(`${API_ENDPOINTS.TASKS}/bulk/status`, { taskIds, status });
  }
}
