import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { DocumentApiService } from './document-api.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';

describe('DocumentApiService', () => {
  let service: DocumentApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocumentApiService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(DocumentApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch documents via GET /documents with workspaceId', () => {
    service.getDocuments('ws-1').subscribe((res) => {
      expect(res.data.length).toBe(1);
    });

    const req = httpMock.expectOne((r) => r.url === API_ENDPOINTS.DOCUMENTS && r.params.get('workspaceId') === 'ws-1');
    expect(req.request.method).toBe('GET');
    req.flush({ success: true, data: [{ id: 'doc-1', organizationId: 'o-1', workspaceId: 'ws-1', title: 'Architecture' }] });
  });
});
