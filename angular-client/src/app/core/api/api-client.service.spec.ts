import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiClientService } from './api-client.service';
import { AppConfigService } from '../config/app-config.service';

interface TestEntity {
  id: string;
  name: string;
}

describe('ApiClientService', () => {
  let service: ApiClientService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiClientService,
        AppConfigService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(ApiClientService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('GET requests', () => {
    it('should issue GET request with target endpoint', () => {
      const mockData: TestEntity = { id: '1', name: 'Test' };

      service.get<TestEntity>('/projects/1').subscribe((data) => {
        expect(data).toEqual(mockData);
      });

      const req = httpMock.expectOne('/projects/1');
      expect(req.request.method).toBe('GET');
      req.flush(mockData);
    });

    it('should format and append query parameters', () => {
      service
        .get<TestEntity[]>('/projects', {
          params: { page: 1, pageSize: 10, search: 'angular', active: true },
        })
        .subscribe();

      const req = httpMock.expectOne(
        (r) =>
          r.url === '/projects' &&
          r.params.get('page') === '1' &&
          r.params.get('pageSize') === '10' &&
          r.params.get('search') === 'angular' &&
          r.params.get('active') === 'true'
      );
      expect(req.request.method).toBe('GET');
      req.flush([]);
    });

    it('should handle custom headers passed in options', () => {
      service
        .get<TestEntity>('/projects/1', {
          headers: { 'X-Custom-Header': 'CustomValue' },
        })
        .subscribe();

      const req = httpMock.expectOne('/projects/1');
      expect(req.request.headers.get('X-Custom-Header')).toBe('CustomValue');
      req.flush({ id: '1', name: 'Test' });
    });
  });

  describe('POST requests', () => {
    it('should send payload in POST request body', () => {
      const payload = { name: 'New Project' };
      const response: TestEntity = { id: '123', name: 'New Project' };

      service.post<TestEntity>('/projects', payload).subscribe((data) => {
        expect(data).toEqual(response);
      });

      const req = httpMock.expectOne('/projects');
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(payload);
      req.flush(response);
    });
  });

  describe('PUT requests', () => {
    it('should send payload in PUT request body', () => {
      const payload = { name: 'Updated Project' };
      const response: TestEntity = { id: '123', name: 'Updated Project' };

      service.put<TestEntity>('/projects/123', payload).subscribe((data) => {
        expect(data).toEqual(response);
      });

      const req = httpMock.expectOne('/projects/123');
      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toEqual(payload);
      req.flush(response);
    });
  });

  describe('PATCH requests', () => {
    it('should send partial payload in PATCH request body', () => {
      const payload = { name: 'Patched Project' };
      const response: TestEntity = { id: '123', name: 'Patched Project' };

      service.patch<TestEntity>('/projects/123', payload).subscribe((data) => {
        expect(data).toEqual(response);
      });

      const req = httpMock.expectOne('/projects/123');
      expect(req.request.method).toBe('PATCH');
      expect(req.request.body).toEqual(payload);
      req.flush(response);
    });
  });

  describe('DELETE requests', () => {
    it('should issue DELETE request to endpoint', () => {
      service.delete<{ success: boolean }>('/projects/123').subscribe((res) => {
        expect(res.success).toBe(true);
      });

      const req = httpMock.expectOne('/projects/123');
      expect(req.request.method).toBe('DELETE');
      req.flush({ success: true });
    });
  });

  describe('Cancellation', () => {
    it('should cancel pending request on unsubscribe', () => {
      const sub = service.get('/projects').subscribe();
      expect(httpMock.match('/projects').length).toBe(1);

      sub.unsubscribe();
      expect(httpMock.match('/projects').length).toBe(0);
    });
  });
});
