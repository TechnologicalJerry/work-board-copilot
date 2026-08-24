import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { TeamApiService } from './team-api.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';

describe('TeamApiService', () => {
  let service: TeamApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamApiService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(TeamApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch teams via GET /teams with organizationId', () => {
    service.getTeams('org-1').subscribe((res) => {
      expect(res.data.length).toBe(1);
    });

    const req = httpMock.expectOne((r) => r.url === API_ENDPOINTS.TEAMS && r.params.get('organizationId') === 'org-1');
    expect(req.request.method).toBe('GET');
    req.flush({ success: true, data: [{ id: 'team-1', organizationId: 'org-1', name: 'Core Team' }] });
  });
});
