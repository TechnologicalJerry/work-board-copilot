import { TestBed } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { AuditApiService } from './audit-api.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';

describe('AuditApiService', () => {
  let service: AuditApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuditApiService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(AuditApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch audit logs via GET /audit', () => {
    service.getAuditLogs('high').subscribe((res) => {
      expect(res.data.length).toBe(1);
    });

    const req = httpMock.expectOne((r) => r.url === API_ENDPOINTS.AUDIT && r.params.get('severity') === 'high');
    expect(req.request.method).toBe('GET');
    req.flush({ success: true, data: [{ id: 'a-1', organizationId: 'o-1', action: 'USER_ROLE_CHANGED', severity: 'high', category: 'security' }] });
  });
});
