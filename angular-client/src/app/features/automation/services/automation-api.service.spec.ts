import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { AutomationApiService } from './automation-api.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';

describe('AutomationApiService', () => {
  let service: AutomationApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutomationApiService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(AutomationApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch automation rules via GET /automation', () => {
    service.getRules('p-1', 'o-1').subscribe((res) => {
      expect(res.data.length).toBe(1);
    });

    const req = httpMock.expectOne((r) => r.url === API_ENDPOINTS.AUTOMATION && r.params.get('projectId') === 'p-1');
    expect(req.request.method).toBe('GET');
    req.flush({ success: true, data: [{ id: 'rule-1', organizationId: 'o-1', projectId: 'p-1', name: 'Auto Assign', isEnabled: true, trigger: { type: 'task.created' }, actions: [] }] });
  });
});
