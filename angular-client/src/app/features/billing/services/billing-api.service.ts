import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '@core/api/api-client.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';
import { ApiResponse } from '@core/api/api-response';
import {
  Plan,
  Subscription,
  Invoice,
  CreateSubscriptionRequest,
  BillingPortalRequest,
} from '../models/billing.model';

@Injectable({
  providedIn: 'root',
})
export class BillingApiService {
  private readonly api = inject(ApiClientService);

  getPlans(): Observable<ApiResponse<Plan[]>> {
    return this.api.get<ApiResponse<Plan[]>>(`${API_ENDPOINTS.BILLING}/plans`);
  }

  getCustomer(orgId: string): Observable<ApiResponse<Subscription | null>> {
    return this.api.get<ApiResponse<Subscription | null>>(`${API_ENDPOINTS.BILLING}/customers/${orgId}`);
  }

  createSubscription(payload: CreateSubscriptionRequest): Observable<ApiResponse<Subscription>> {
    return this.api.post<ApiResponse<Subscription>>(`${API_ENDPOINTS.BILLING}/subscriptions`, payload);
  }

  cancelSubscription(orgId: string): Observable<ApiResponse<{ success: boolean }>> {
    return this.api.delete<ApiResponse<{ success: boolean }>>(`${API_ENDPOINTS.BILLING}/subscriptions/${orgId}`);
  }

  getInvoices(orgId: string): Observable<ApiResponse<Invoice[]>> {
    return this.api.get<ApiResponse<Invoice[]>>(`${API_ENDPOINTS.BILLING}/invoices/${orgId}`);
  }

  getBillingPortal(orgId: string, payload: BillingPortalRequest): Observable<ApiResponse<{ url: string }>> {
    return this.api.post<ApiResponse<{ url: string }>>(`${API_ENDPOINTS.BILLING}/portal/${orgId}`, payload);
  }
}
