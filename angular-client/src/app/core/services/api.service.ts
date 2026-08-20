import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly config = inject(ConfigService);

  get<T>(endpoint: string, params?: Record<string, string | number | boolean>): Observable<ApiResponse<T>> {
    let httpParams = new HttpParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          httpParams = httpParams.set(key, String(value));
        }
      });
    }
    return this.http.get<ApiResponse<T>>(`${this.config.apiGatewayUrl()}${endpoint}`, { params: httpParams });
  }

  post<T>(endpoint: string, body: unknown): Observable<ApiResponse<T>> {
    return this.http.post<ApiResponse<T>>(`${this.config.apiGatewayUrl()}${endpoint}`, body);
  }

  put<T>(endpoint: string, body: unknown): Observable<ApiResponse<T>> {
    return this.http.put<ApiResponse<T>>(`${this.config.apiGatewayUrl()}${endpoint}`, body);
  }

  patch<T>(endpoint: string, body: unknown): Observable<ApiResponse<T>> {
    return this.http.patch<ApiResponse<T>>(`${this.config.apiGatewayUrl()}${endpoint}`, body);
  }

  delete<T>(endpoint: string): Observable<ApiResponse<T>> {
    return this.http.delete<ApiResponse<T>>(`${this.config.apiGatewayUrl()}${endpoint}`);
  }
}
