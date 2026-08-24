import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '@core/api/api-client.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';
import { ApiResponse } from '@core/api/api-response';
import {
  Organization,
  OrganizationMember,
  CreateOrganizationRequest,
  UpdateOrganizationRequest,
  InviteMemberRequest,
  UpdateMemberRoleRequest,
} from '../models/organization.model';

@Injectable({
  providedIn: 'root',
})
export class OrganizationApiService {
  private readonly api = inject(ApiClientService);

  getOrganizations(): Observable<ApiResponse<Organization[]>> {
    return this.api.get<ApiResponse<Organization[]>>(API_ENDPOINTS.ORGANIZATIONS);
  }

  getOrganizationById(id: string): Observable<ApiResponse<Organization>> {
    return this.api.get<ApiResponse<Organization>>(`${API_ENDPOINTS.ORGANIZATIONS}/${id}`);
  }

  createOrganization(payload: CreateOrganizationRequest): Observable<ApiResponse<Organization>> {
    return this.api.post<ApiResponse<Organization>>(API_ENDPOINTS.ORGANIZATIONS, payload);
  }

  updateOrganization(id: string, payload: UpdateOrganizationRequest): Observable<ApiResponse<Organization>> {
    return this.api.put<ApiResponse<Organization>>(`${API_ENDPOINTS.ORGANIZATIONS}/${id}`, payload);
  }

  deleteOrganization(id: string): Observable<ApiResponse<{ success: boolean }>> {
    return this.api.delete<ApiResponse<{ success: boolean }>>(`${API_ENDPOINTS.ORGANIZATIONS}/${id}`);
  }

  getMembers(orgId: string): Observable<ApiResponse<OrganizationMember[]>> {
    return this.api.get<ApiResponse<OrganizationMember[]>>(`${API_ENDPOINTS.ORGANIZATIONS}/${orgId}/members`);
  }

  inviteMember(orgId: string, payload: InviteMemberRequest): Observable<ApiResponse<OrganizationMember>> {
    return this.api.post<ApiResponse<OrganizationMember>>(`${API_ENDPOINTS.ORGANIZATIONS}/${orgId}/members`, payload);
  }

  updateMemberRole(orgId: string, userId: string, payload: UpdateMemberRoleRequest): Observable<ApiResponse<OrganizationMember>> {
    return this.api.put<ApiResponse<OrganizationMember>>(`${API_ENDPOINTS.ORGANIZATIONS}/${orgId}/members/${userId}/role`, payload);
  }

  removeMember(orgId: string, userId: string): Observable<ApiResponse<{ success: boolean }>> {
    return this.api.delete<ApiResponse<{ success: boolean }>>(`${API_ENDPOINTS.ORGANIZATIONS}/${orgId}/members/${userId}`);
  }
}
