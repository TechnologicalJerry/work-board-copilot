import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '@core/api/api-client.service';
import { ApiResponse } from '@core/api/api-response';
import {
  AuthenticatedUser,
  LoginRequest,
  LoginResponseData,
  RefreshResponseData,
  RegisterRequest,
  RegisterResponseData,
} from '../models/auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private readonly apiClient = inject(ApiClientService);

  /**
   * Post credentials to backend login endpoint
   */
  login(payload: LoginRequest): Observable<ApiResponse<LoginResponseData>> {
    return this.apiClient.post<ApiResponse<LoginResponseData>, LoginRequest>('/auth/login', payload, {
      withCredentials: true,
    });
  }

  /**
   * Post user registration payload
   */
  register(payload: RegisterRequest): Observable<ApiResponse<RegisterResponseData>> {
    return this.apiClient.post<ApiResponse<RegisterResponseData>, RegisterRequest>('/auth/register', payload);
  }

  /**
   * Call logout endpoint to clear refresh cookie on server
   */
  logout(): Observable<ApiResponse<{ message: string }>> {
    return this.apiClient.post<ApiResponse<{ message: string }>>('/auth/logout', {}, {
      withCredentials: true,
    });
  }

  /**
   * Request token refresh (uses httpOnly refreshToken cookie)
   */
  refresh(): Observable<ApiResponse<RefreshResponseData>> {
    return this.apiClient.post<ApiResponse<RefreshResponseData>>('/auth/refresh', {}, {
      withCredentials: true,
    });
  }

  /**
   * Fetch currently authenticated user profile
   */
  getCurrentUser(): Observable<ApiResponse<AuthenticatedUser>> {
    return this.apiClient.get<ApiResponse<AuthenticatedUser>>('/users/me');
  }
}
