import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { TaskApiService } from './task-api.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';

describe('TaskApiService', () => {
  let service: TaskApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskApiService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(TaskApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch tasks for an organization', () => {
    service.getTasks('org-1').subscribe((res) => {
      expect(res.data.length).toBe(1);
    });

    const req = httpMock.expectOne((r) => r.url === API_ENDPOINTS.TASKS && r.params.get('organizationId') === 'org-1');
    expect(req.request.method).toBe('GET');
    req.flush({ success: true, data: [{ id: 't-1', organizationId: 'org-1', projectId: 'p-1', title: 'Fix bug', status: 'TODO' }] });
  });

  it('should change status via POST /tasks/:id/status', () => {
    service.changeStatus('t-1', 'IN_PROGRESS').subscribe((res) => {
      expect(res.data.status).toBe('IN_PROGRESS');
    });

    const req = httpMock.expectOne(`${API_ENDPOINTS.TASKS}/t-1/status`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ status: 'IN_PROGRESS' });
    req.flush({ success: true, data: { id: 't-1', status: 'IN_PROGRESS' } });
  });
});
