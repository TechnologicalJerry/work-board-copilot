import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { SprintApiService } from './sprint-api.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';

describe('SprintApiService', () => {
  let service: SprintApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SprintApiService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(SprintApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch sprints for a project', () => {
    service.getSprints('p-1').subscribe((res) => {
      expect(res.data.length).toBe(1);
    });

    const req = httpMock.expectOne((r) => r.url === API_ENDPOINTS.SPRINTS && r.params.get('projectId') === 'p-1');
    expect(req.request.method).toBe('GET');
    req.flush({ success: true, data: [{ id: 's-1', projectId: 'p-1', name: 'Sprint 1', status: 'PLANNED' }] });
  });
});
