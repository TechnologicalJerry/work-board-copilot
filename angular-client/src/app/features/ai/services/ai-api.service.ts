import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '@core/api/api-client.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';
import { ApiResponse } from '@core/api/api-response';
import {
  ChatRequest,
  ChatResponse,
  AiSession,
  TaskBreakdownRequest,
  TaskBreakdownResponse,
  TokenUsage,
} from '../models/ai.model';

@Injectable({
  providedIn: 'root',
})
export class AiApiService {
  private readonly api = inject(ApiClientService);

  chat(payload: ChatRequest): Observable<ApiResponse<ChatResponse>> {
    return this.api.post<ApiResponse<ChatResponse>>(`${API_ENDPOINTS.AI}/chat`, payload);
  }

  taskBreakdown(payload: TaskBreakdownRequest): Observable<ApiResponse<TaskBreakdownResponse>> {
    return this.api.post<ApiResponse<TaskBreakdownResponse>>(`${API_ENDPOINTS.AI}/task-breakdown`, payload);
  }

  getSessions(): Observable<ApiResponse<AiSession[]>> {
    return this.api.get<ApiResponse<AiSession[]>>(`${API_ENDPOINTS.AI}/sessions`);
  }

  getTokenUsage(): Observable<ApiResponse<TokenUsage>> {
    return this.api.get<ApiResponse<TokenUsage>>(`${API_ENDPOINTS.AI}/usage`);
  }
}
