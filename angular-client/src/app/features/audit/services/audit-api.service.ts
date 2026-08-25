import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '@core/api/api-client.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';
import { ApiResponse } from '@core/api/api-response';
import { AuditLogItem, AuditStats } from '../models/audit.model';

@Injectable({
  providedIn: 'root',
})
export class AuditApiService {
  private readonly api = inject(ApiClientService);

  getAuditLogs(severity?: string, category?: string, page: number = 1, limit: number = 20): Observable<ApiResponse<AuditLogItem[]>> {
    const params: Record<string, string> = { page: String(page), limit: String(limit) };
    if (severity) params['severity'] = severity;
    if (category) params['category'] = category;

    return this.api.get<ApiResponse<AuditLogItem[]>>(API_ENDPOINTS.AUDIT, { params });
  }

  getLogsByEntity(entityType: string, entityId: string): Observable<ApiResponse<AuditLogItem[]>> {
    return this.api.get<ApiResponse<AuditLogItem[]>>(`${API_ENDPOINTS.AUDIT}/entity`, {
      params: { entityType, entityId },
    });
  }

  getStats(days: number = 30): Observable<ApiResponse<AuditStats>> {
    return this.api.get<ApiResponse<AuditStats>>(`${API_ENDPOINTS.AUDIT}/stats`, {
      params: { days: String(days) },
    });
  }

  exportCsvUrl(): string {
    return `/api/v1/audit/export`;
  }
}
