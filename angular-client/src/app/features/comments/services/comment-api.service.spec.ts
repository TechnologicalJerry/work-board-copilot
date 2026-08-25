import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { CommentApiService } from './comment-api.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';

describe('CommentApiService', () => {
  let service: CommentApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentApiService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(CommentApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch comments for an entity via GET /comments', () => {
    service.getComments('task-1', 'task').subscribe((res) => {
      expect(res.data.length).toBe(1);
    });

    const req = httpMock.expectOne((r) => r.url === API_ENDPOINTS.COMMENTS && r.params.get('entityId') === 'task-1');
    expect(req.request.method).toBe('GET');
    req.flush({ success: true, data: [{ id: 'c-1', entityId: 'task-1', entityType: 'task', content: 'Great work' }] });
  });
});
