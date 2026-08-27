import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { BillingApiService } from './billing-api.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';

describe('BillingApiService', () => {
  let service: BillingApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillingApiService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(BillingApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch plans via GET /billing/plans', () => {
    service.getPlans().subscribe((res) => {
      expect(res.data.length).toBe(1);
    });

    const req = httpMock.expectOne(`${API_ENDPOINTS.BILLING}/plans`);
    expect(req.request.method).toBe('GET');
    req.flush({ success: true, data: [{ id: 'p-1', tier: 'PROFESSIONAL', name: 'Pro', description: 'Pro plan', monthlyPrice: 29, yearlyPrice: 290, features: [], entitlements: { canUseAi: true, canUseAutomation: true, maxProjects: 50, maxSeats: 25 } }] });
  });
});
