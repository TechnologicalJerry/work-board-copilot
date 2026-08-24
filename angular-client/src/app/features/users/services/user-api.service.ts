import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '@core/api/api-client.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';
import { ApiResponse } from '@core/api/api-response';
import {
  UserProfile,
  UpdateUserProfileRequest,
  UpdateAvatarRequest,
  UserActivityLog,
} from '../models/user-profile.model';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  private readonly api = inject(ApiClientService);

  getMyProfile(): Observable<ApiResponse<UserProfile>> {
    return this.api.get<ApiResponse<UserProfile>>(`${API_ENDPOINTS.USERS}/me`);
  }

  updateMyProfile(payload: UpdateUserProfileRequest): Observable<ApiResponse<UserProfile>> {
    return this.api.put<ApiResponse<UserProfile>>(`${API_ENDPOINTS.USERS}/me`, payload);
  }

  updateAvatar(payload: UpdateAvatarRequest): Observable<ApiResponse<UserProfile>> {
    return this.api.put<ApiResponse<UserProfile>>(`${API_ENDPOINTS.USERS}/me/avatar`, payload);
  }

  searchUsers(query: string, limit: number = 10): Observable<ApiResponse<UserProfile[]>> {
    return this.api.get<ApiResponse<UserProfile[]>>(`${API_ENDPOINTS.USERS}/search`, {
      params: { query, limit: String(limit) },
    });
  }

  getUserById(id: string): Observable<ApiResponse<UserProfile>> {
    return this.api.get<ApiResponse<UserProfile>>(`${API_ENDPOINTS.USERS}/${id}`);
  }

  getUserActivity(id: string): Observable<ApiResponse<UserActivityLog[]>> {
    return this.api.get<ApiResponse<UserActivityLog[]>>(`${API_ENDPOINTS.USERS}/${id}/activity`);
  }
}
