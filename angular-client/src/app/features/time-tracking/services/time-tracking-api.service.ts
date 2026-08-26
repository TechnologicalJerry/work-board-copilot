import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '@core/api/api-client.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';
import { ApiResponse } from '@core/api/api-response';
import {
  TimeEntry,
  Timesheet,
  CreateTimeEntryRequest,
  UpdateTimeEntryRequest,
  CreateTimesheetRequest,
} from '../models/time-tracking.model';

@Injectable({
  providedIn: 'root',
})
export class TimeTrackingApiService {
  private readonly api = inject(ApiClientService);

  getActiveTimer(): Observable<ApiResponse<TimeEntry | null>> {
    return this.api.get<ApiResponse<TimeEntry | null>>(`${API_ENDPOINTS.TIME_TRACKING}/time/active`);
  }

  getTimeEntries(projectId?: string, taskId?: string): Observable<ApiResponse<TimeEntry[]>> {
    const params: Record<string, string> = {};
    if (projectId) params['projectId'] = projectId;
    if (taskId) params['taskId'] = taskId;

    return this.api.get<ApiResponse<TimeEntry[]>>(`${API_ENDPOINTS.TIME_TRACKING}/time/entries`, { params });
  }

  createTimeEntry(payload: CreateTimeEntryRequest): Observable<ApiResponse<TimeEntry>> {
    return this.api.post<ApiResponse<TimeEntry>>(`${API_ENDPOINTS.TIME_TRACKING}/time/entries`, payload);
  }

  updateTimeEntry(id: string, payload: UpdateTimeEntryRequest): Observable<ApiResponse<TimeEntry>> {
    return this.api.put<ApiResponse<TimeEntry>>(`${API_ENDPOINTS.TIME_TRACKING}/time/entries/${id}`, payload);
  }

  stopTimer(id: string): Observable<ApiResponse<TimeEntry>> {
    return this.api.post<ApiResponse<TimeEntry>>(`${API_ENDPOINTS.TIME_TRACKING}/time/entries/${id}/stop`, {});
  }

  deleteTimeEntry(id: string): Observable<ApiResponse<{ success: boolean }>> {
    return this.api.delete<ApiResponse<{ success: boolean }>>(`${API_ENDPOINTS.TIME_TRACKING}/time/entries/${id}`);
  }

  getTimesheets(projectId?: string): Observable<ApiResponse<Timesheet[]>> {
    const params: Record<string, string> = {};
    if (projectId) params['projectId'] = projectId;

    return this.api.get<ApiResponse<Timesheet[]>>(`${API_ENDPOINTS.TIME_TRACKING}/time/timesheets`, { params });
  }

  createTimesheet(payload: CreateTimesheetRequest): Observable<ApiResponse<Timesheet>> {
    return this.api.post<ApiResponse<Timesheet>>(`${API_ENDPOINTS.TIME_TRACKING}/time/timesheets`, payload);
  }

  submitTimesheet(id: string): Observable<ApiResponse<Timesheet>> {
    return this.api.post<ApiResponse<Timesheet>>(`${API_ENDPOINTS.TIME_TRACKING}/time/timesheets/${id}/submit`, {});
  }
}
