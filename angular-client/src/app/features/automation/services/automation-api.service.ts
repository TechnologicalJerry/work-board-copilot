import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '@core/api/api-client.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';
import { ApiResponse } from '@core/api/api-response';
import {
  AutomationRule,
  AutomationExecution,
  CreateRuleRequest,
  UpdateRuleRequest,
} from '../models/automation.model';

@Injectable({
  providedIn: 'root',
})
export class AutomationApiService {
  private readonly api = inject(ApiClientService);

  getTemplates(): Observable<ApiResponse<Record<string, unknown>[]>> {
    return this.api.get<ApiResponse<Record<string, unknown>[]>>(`${API_ENDPOINTS.AUTOMATION}/templates`);
  }

  getRules(projectId: string, organizationId: string): Observable<ApiResponse<AutomationRule[]>> {
    return this.api.get<ApiResponse<AutomationRule[]>>(API_ENDPOINTS.AUTOMATION, {
      params: { projectId, organizationId },
    });
  }

  getRuleById(id: string): Observable<ApiResponse<AutomationRule>> {
    return this.api.get<ApiResponse<AutomationRule>>(`${API_ENDPOINTS.AUTOMATION}/${id}`);
  }

  createRule(payload: CreateRuleRequest): Observable<ApiResponse<AutomationRule>> {
    return this.api.post<ApiResponse<AutomationRule>>(API_ENDPOINTS.AUTOMATION, payload);
  }

  updateRule(id: string, payload: UpdateRuleRequest): Observable<ApiResponse<AutomationRule>> {
    return this.api.put<ApiResponse<AutomationRule>>(`${API_ENDPOINTS.AUTOMATION}/${id}`, payload);
  }

  deleteRule(id: string): Observable<ApiResponse<{ success: boolean }>> {
    return this.api.delete<ApiResponse<{ success: boolean }>>(`${API_ENDPOINTS.AUTOMATION}/${id}`);
  }

  enableRule(id: string): Observable<ApiResponse<AutomationRule>> {
    return this.api.post<ApiResponse<AutomationRule>>(`${API_ENDPOINTS.AUTOMATION}/${id}/enable`, {});
  }

  disableRule(id: string): Observable<ApiResponse<AutomationRule>> {
    return this.api.post<ApiResponse<AutomationRule>>(`${API_ENDPOINTS.AUTOMATION}/${id}/disable`, {});
  }

  getExecutions(id: string): Observable<ApiResponse<AutomationExecution[]>> {
    return this.api.get<ApiResponse<AutomationExecution[]>>(`${API_ENDPOINTS.AUTOMATION}/${id}/executions`);
  }
}
