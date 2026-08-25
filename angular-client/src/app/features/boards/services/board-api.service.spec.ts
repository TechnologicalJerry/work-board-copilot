import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { BoardApiService } from './board-api.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';

describe('BoardApiService', () => {
  let service: BoardApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardApiService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(BoardApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch boards for a project', () => {
    service.getBoards('p-1').subscribe((res) => {
      expect(res.data.length).toBe(1);
    });

    const req = httpMock.expectOne((r) => r.url === API_ENDPOINTS.BOARDS && r.params.get('projectId') === 'p-1');
    expect(req.request.method).toBe('GET');
    req.flush({ success: true, data: [{ id: 'b-1', projectId: 'p-1', name: 'Main Board', type: 'KANBAN' }] });
  });
});
