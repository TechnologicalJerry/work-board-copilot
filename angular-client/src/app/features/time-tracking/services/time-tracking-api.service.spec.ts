import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { TimeTrackingApiService } from './time-tracking-api.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';

describe('TimeTrackingApiService', () => {
  let service: TimeTrackingApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeTrackingApiService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(TimeTrackingApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch active timer via GET /time/active', () => {
    service.getActiveTimer().subscribe((res) => {
      expect(res.data?.id).toBe('timer-1');
    });

    const req = httpMock.expectOne(`${API_ENDPOINTS.TIME_TRACKING}/time/active`);
    expect(req.request.method).toBe('GET');
    req.flush({ success: true, data: { id: 'timer-1', organizationId: 'o-1', projectId: 'p-1', isBillable: true, status: 'RUNNING' } });
  });
});
