import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '@core/api/api-client.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';
import { ApiResponse } from '@core/api/api-response';
import {
  VelocityReport,
  BurndownReport,
  WorkloadReport,
  CycleTimeReport,
  SavedReport,
} from '../models/report.model';

@Injectable({
  providedIn: 'root',
})
export class ReportApiService {
  private readonly api = inject(ApiClientService);

  getVelocity(projectId: string): Observable<ApiResponse<VelocityReport>> {
    return this.api.get<ApiResponse<VelocityReport>>(`${API_ENDPOINTS.REPORTS}/velocity`, {
      params: { projectId },
    });
  }

  getBurndown(sprintId: string): Observable<ApiResponse<BurndownReport>> {
    return this.api.get<ApiResponse<BurndownReport>>(`${API_ENDPOINTS.REPORTS}/burndown`, {
      params: { sprintId },
    });
  }

  getWorkload(projectId: string): Observable<ApiResponse<WorkloadReport>> {
    return this.api.get<ApiResponse<WorkloadReport>>(`${API_ENDPOINTS.REPORTS}/workload`, {
      params: { projectId },
    });
  }

  getCycleTime(projectId: string): Observable<ApiResponse<CycleTimeReport>> {
    return this.api.get<ApiResponse<CycleTimeReport>>(`${API_ENDPOINTS.REPORTS}/cycle-time`, {
      params: { projectId },
    });
  }

  getSavedReports(projectId?: string): Observable<ApiResponse<SavedReport[]>> {
    const params: Record<string, string> = {};
    if (projectId) params['projectId'] = projectId;

    return this.api.get<ApiResponse<SavedReport[]>>(`${API_ENDPOINTS.REPORTS}/saved`, { params });
  }
}
