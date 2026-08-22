import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '../api/api-client.service';
import { ApiResponse } from '../api/api-response';
import { QueryParamValue } from '../models/api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apiClient = inject(ApiClientService);

  get<T>(endpoint: string, params?: Record<string, QueryParamValue>): Observable<ApiResponse<T>> {
    return this.apiClient.get<ApiResponse<T>>(endpoint, { params });
  }

  post<T>(endpoint: string, body: unknown): Observable<ApiResponse<T>> {
    return this.apiClient.post<ApiResponse<T>, unknown>(endpoint, body);
  }

  put<T>(endpoint: string, body: unknown): Observable<ApiResponse<T>> {
    return this.apiClient.put<ApiResponse<T>, unknown>(endpoint, body);
  }

  patch<T>(endpoint: string, body: unknown): Observable<ApiResponse<T>> {
    return this.apiClient.patch<ApiResponse<T>, unknown>(endpoint, body);
  }

  delete<T>(endpoint: string): Observable<ApiResponse<T>> {
    return this.apiClient.delete<ApiResponse<T>>(endpoint);
  }
}
