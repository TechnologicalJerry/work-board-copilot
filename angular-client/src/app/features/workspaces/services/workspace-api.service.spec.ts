import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { WorkspaceApiService } from './workspace-api.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';

describe('WorkspaceApiService', () => {
  let service: WorkspaceApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkspaceApiService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(WorkspaceApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch workspaces scoped to organizationId', () => {
    service.getWorkspaces('org-1').subscribe((res) => {
      expect(res.data.length).toBe(1);
    });

    const req = httpMock.expectOne((r) => r.url === API_ENDPOINTS.WORKSPACES && r.params.get('organizationId') === 'org-1');
    expect(req.request.method).toBe('GET');
    req.flush({ success: true, data: [{ id: 'ws-1', organizationId: 'org-1', name: 'Engineering' }] });
  });
});
