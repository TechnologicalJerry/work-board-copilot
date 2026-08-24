import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { UserApiService } from './user-api.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';

describe('UserApiService', () => {
  let service: UserApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserApiService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(UserApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch own user profile via GET /users/me', () => {
    service.getMyProfile().subscribe((res) => {
      expect(res.data.email).toBe('test@example.com');
    });

    const req = httpMock.expectOne(`${API_ENDPOINTS.USERS}/me`);
    expect(req.request.method).toBe('GET');
    req.flush({ success: true, data: { id: 'usr-1', email: 'test@example.com' } });
  });

  it('should update own user profile via PUT /users/me', () => {
    service.updateMyProfile({ firstName: 'Jane' }).subscribe((res) => {
      expect(res.data.firstName).toBe('Jane');
    });

    const req = httpMock.expectOne(`${API_ENDPOINTS.USERS}/me`);
    expect(req.request.method).toBe('PUT');
    req.flush({ success: true, data: { id: 'usr-1', email: 'test@example.com', firstName: 'Jane' } });
  });
});
