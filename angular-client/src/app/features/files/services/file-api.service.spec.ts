import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { FileApiService } from './file-api.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';

describe('FileApiService', () => {
  let service: FileApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileApiService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(FileApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch files for entity via GET /files/entity', () => {
    service.getFilesForEntity('task-1', 'task').subscribe((res) => {
      expect(res.data.length).toBe(1);
    });

    const req = httpMock.expectOne((r) => r.url === `${API_ENDPOINTS.FILES}/entity` && r.params.get('entityId') === 'task-1');
    expect(req.request.method).toBe('GET');
    req.flush({ success: true, data: [{ id: 'f-1', organizationId: 'o-1', originalName: 'spec.pdf', mimeType: 'application/pdf', size: 2048 }] });
  });
});
