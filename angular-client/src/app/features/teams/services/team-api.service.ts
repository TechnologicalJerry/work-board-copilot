import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '@core/api/api-client.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';
import { ApiResponse } from '@core/api/api-response';
import {
  Team,
  TeamMember,
  CreateTeamRequest,
  UpdateTeamRequest,
  AddTeamMemberRequest,
  UpdateTeamMemberRequest,
} from '../models/team.model';

@Injectable({
  providedIn: 'root',
})
export class TeamApiService {
  private readonly api = inject(ApiClientService);

  getTeams(organizationId: string, workspaceId?: string): Observable<ApiResponse<Team[]>> {
    const params: Record<string, string> = { organizationId };
    if (workspaceId) {
      params['workspaceId'] = workspaceId;
    }
    return this.api.get<ApiResponse<Team[]>>(API_ENDPOINTS.TEAMS, { params });
  }

  getTeamById(id: string): Observable<ApiResponse<Team>> {
    return this.api.get<ApiResponse<Team>>(`${API_ENDPOINTS.TEAMS}/${id}`);
  }

  createTeam(payload: CreateTeamRequest): Observable<ApiResponse<Team>> {
    return this.api.post<ApiResponse<Team>>(API_ENDPOINTS.TEAMS, payload);
  }

  updateTeam(id: string, payload: UpdateTeamRequest): Observable<ApiResponse<Team>> {
    return this.api.put<ApiResponse<Team>>(`${API_ENDPOINTS.TEAMS}/${id}`, payload);
  }

  deleteTeam(id: string): Observable<ApiResponse<{ success: boolean }>> {
    return this.api.delete<ApiResponse<{ success: boolean }>>(`${API_ENDPOINTS.TEAMS}/${id}`);
  }

  addMember(teamId: string, payload: AddTeamMemberRequest): Observable<ApiResponse<TeamMember>> {
    return this.api.post<ApiResponse<TeamMember>>(`${API_ENDPOINTS.TEAMS}/${teamId}/members`, payload);
  }

  updateMember(teamId: string, userId: string, payload: UpdateTeamMemberRequest): Observable<ApiResponse<TeamMember>> {
    return this.api.put<ApiResponse<TeamMember>>(`${API_ENDPOINTS.TEAMS}/${teamId}/members/${userId}`, payload);
  }

  removeMember(teamId: string, userId: string): Observable<ApiResponse<{ success: boolean }>> {
    return this.api.delete<ApiResponse<{ success: boolean }>>(`${API_ENDPOINTS.TEAMS}/${teamId}/members/${userId}`);
  }
}
