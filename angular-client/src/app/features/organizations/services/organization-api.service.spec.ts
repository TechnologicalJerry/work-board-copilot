import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { OrganizationApiService } from './organization-api.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';

describe('OrganizationApiService', () => {
  let service: OrganizationApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizationApiService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(OrganizationApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch user organizations via GET /organizations', () => {
    const mockOrgs = [{ id: 'org-1', name: 'Acme Corp' }];

    service.getOrganizations().subscribe((res) => {
      expect(res.data).toEqual(mockOrgs);
    });

    const req = httpMock.expectOne(API_ENDPOINTS.ORGANIZATIONS);
    expect(req.request.method).toBe('GET');
    req.flush({ success: true, data: mockOrgs });
  });

  it('should create organization via POST /organizations', () => {
    const newOrg = { name: 'Stark Tech' };

    service.createOrganization(newOrg).subscribe((res) => {
      expect(res.data.name).toBe('Stark Tech');
    });

    const req = httpMock.expectOne(API_ENDPOINTS.ORGANIZATIONS);
    expect(req.request.method).toBe('POST');
    req.flush({ success: true, data: { id: 'org-2', name: 'Stark Tech' } });
  });
});
