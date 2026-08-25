import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { ReportApiService } from './report-api.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';

describe('ReportApiService', () => {
  let service: ReportApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportApiService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(ReportApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch velocity report via GET /reports/velocity', () => {
    service.getVelocity('p-1').subscribe((res) => {
      expect(res.data.averageVelocity).toBe(25);
    });

    const req = httpMock.expectOne((r) => r.url === `${API_ENDPOINTS.REPORTS}/velocity` && r.params.get('projectId') === 'p-1');
    expect(req.request.method).toBe('GET');
    req.flush({ success: true, data: { projectId: 'p-1', sprints: [], averageVelocity: 25 } });
  });
});
