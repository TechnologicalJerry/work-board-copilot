import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { ProjectApiService } from './project-api.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';

describe('ProjectApiService', () => {
  let service: ProjectApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectApiService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(ProjectApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch projects via GET /projects with organizationId', () => {
    service.getProjects('org-1').subscribe((res) => {
      expect(res.data.length).toBe(1);
    });

    const req = httpMock.expectOne((r) => r.url === API_ENDPOINTS.PROJECTS && r.params.get('organizationId') === 'org-1');
    expect(req.request.method).toBe('GET');
    req.flush({ success: true, data: [{ id: 'p-1', organizationId: 'org-1', name: 'Mobile App', key: 'MA' }] });
  });
});
