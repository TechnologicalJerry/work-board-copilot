import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { SearchApiService } from './search-api.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';

describe('SearchApiService', () => {
  let service: SearchApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchApiService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(SearchApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should execute global search via GET /search/global', () => {
    service.globalSearch('auth').subscribe((res) => {
      expect(res.data.total).toBe(1);
    });

    const req = httpMock.expectOne((r) => r.url === `${API_ENDPOINTS.SEARCH}/global` && r.params.get('q') === 'auth');
    expect(req.request.method).toBe('GET');
    req.flush({ success: true, data: { query: 'auth', total: 1, results: [{ id: 't-1', type: 'task', title: 'Fix auth' }] } });
  });
});
