import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { AuthApiService } from './auth-api.service';
import { AppConfigService } from '@core/config/app-config.service';

describe('AuthApiService', () => {
  let service: AuthApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthApiService, AppConfigService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(AuthApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should issue POST request to login endpoint', () => {
    const credentials = { email: 'user@example.com', password: 'Password123!' };
    const mockResponse = {
      success: true,
      data: {
        accessToken: 'mock-jwt-token',
        user: { id: 'usr-1', email: 'user@example.com', firstName: 'User', lastName: 'Test' },
      },
    };

    service.login(credentials).subscribe((res) => {
      expect(res.data.accessToken).toBe('mock-jwt-token');
      expect(res.data.user.email).toBe('user@example.com');
    });

    const req = httpMock.expectOne('/auth/login');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(credentials);
    expect(req.request.withCredentials).toBe(true);
    req.flush(mockResponse);
  });

  it('should issue POST request to register endpoint', () => {
    const payload = { email: 'new@example.com', password: 'Password123!', firstName: 'New', lastName: 'User' };
    const mockResponse = {
      success: true,
      data: {
        user: { id: 'usr-2', email: 'new@example.com', firstName: 'New', lastName: 'User' },
      },
    };

    service.register(payload).subscribe((res) => {
      expect(res.data.user.id).toBe('usr-2');
    });

    const req = httpMock.expectOne('/auth/register');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(payload);
    req.flush(mockResponse);
  });

  it('should issue POST request to refresh endpoint', () => {
    const mockResponse = {
      success: true,
      data: { accessToken: 'new-jwt-token' },
    };

    service.refresh().subscribe((res) => {
      expect(res.data.accessToken).toBe('new-jwt-token');
    });

    const req = httpMock.expectOne('/auth/refresh');
    expect(req.request.method).toBe('POST');
    expect(req.request.withCredentials).toBe(true);
    req.flush(mockResponse);
  });

  it('should issue GET request to current user profile endpoint', () => {
    const mockUser = { id: 'usr-1', email: 'user@example.com', firstName: 'User', lastName: 'Test' };

    service.getCurrentUser().subscribe((res) => {
      expect(res.data).toEqual(mockUser);
    });

    const req = httpMock.expectOne('/users/me');
    expect(req.request.method).toBe('GET');
    req.flush({ success: true, data: mockUser });
  });

  it('should issue POST request to logout endpoint', () => {
    service.logout().subscribe((res) => {
      expect(res.success).toBe(true);
    });

    const req = httpMock.expectOne('/auth/logout');
    expect(req.request.method).toBe('POST');
    expect(req.request.withCredentials).toBe(true);
    req.flush({ success: true, data: { message: 'Logged out successfully' } });
  });
});
