import { TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { authInterceptor } from './auth.interceptor';
import { AuthService } from '../../../features/auth/services/auth.service';
import { AuthState } from '../../../features/auth/state/auth.state';
import { AppConfigService } from '../../config/app-config.service';

describe('authInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;
  let authState: AuthState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        AuthState,
        AppConfigService,
        provideHttpClient(withInterceptors([authInterceptor])),
        provideHttpClientTesting(),
      ],
    });

    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
    authState = TestBed.inject(AuthState);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should attach Authorization: Bearer <token> to protected requests when token is present', () => {
    authState.setAuthenticated(
      { id: 'usr-1', email: 'test@example.com', firstName: 'Test', lastName: 'User' },
      'my-secret-access-token'
    );

    http.get('/projects').subscribe();

    const req = httpMock.expectOne('/projects');
    expect(req.request.headers.get('Authorization')).toBe('Bearer my-secret-access-token');
    req.flush([]);
  });

  it('should not attach Authorization header to auth endpoints like /auth/login', () => {
    authState.setAuthenticated(
      { id: 'usr-1', email: 'test@example.com', firstName: 'Test', lastName: 'User' },
      'my-secret-access-token'
    );

    http.post('/auth/login', { email: 'a@b.com', password: 'secret' }).subscribe();

    const req = httpMock.expectOne('/auth/login');
    expect(req.request.headers.has('Authorization')).toBe(false);
    req.flush({});
  });

  it('should handle 401 by executing refresh and retrying original request with new token', () => {
    authState.setAuthenticated(
      { id: 'usr-1', email: 'test@example.com', firstName: 'Test', lastName: 'User' },
      'expired-token'
    );

    let resultData: unknown;
    http.get('/protected-resource').subscribe((data) => {
      resultData = data;
    });

    // Initial request fails with 401
    const req1 = httpMock.expectOne('/protected-resource');
    expect(req1.request.headers.get('Authorization')).toBe('Bearer expired-token');
    req1.flush({ message: 'Token expired' }, { status: 401, statusText: 'Unauthorized' });

    // Interceptor triggers token refresh
    const refreshReq = httpMock.expectOne('/auth/refresh');
    expect(refreshReq.request.method).toBe('POST');
    refreshReq.flush({ success: true, data: { accessToken: 'fresh-token-777' } });

    // Interceptor retries original request with new token
    const retriedReq = httpMock.expectOne('/protected-resource');
    expect(retriedReq.request.headers.get('Authorization')).toBe('Bearer fresh-token-777');
    retriedReq.flush({ success: true, payload: 'Secret Data' });

    expect(resultData).toEqual({ success: true, payload: 'Secret Data' });
  });

  it('should handle concurrent 401 requests with ONLY 1 refresh request and retry all requests', () => {
    authState.setAuthenticated(
      { id: 'usr-1', email: 'test@example.com', firstName: 'Test', lastName: 'User' },
      'expired-token'
    );

    let res1: unknown, res2: unknown, res3: unknown, res4: unknown, res5: unknown;

    http.get('/resource-1').subscribe((d) => (res1 = d));
    http.get('/resource-2').subscribe((d) => (res2 = d));
    http.get('/resource-3').subscribe((d) => (res3 = d));
    http.get('/resource-4').subscribe((d) => (res4 = d));
    http.get('/resource-5').subscribe((d) => (res5 = d));

    // Expect initial 5 requests
    const reqs = [
      httpMock.expectOne('/resource-1'),
      httpMock.expectOne('/resource-2'),
      httpMock.expectOne('/resource-3'),
      httpMock.expectOne('/resource-4'),
      httpMock.expectOne('/resource-5'),
    ];

    // Flush all 5 with 401
    reqs.forEach((r) => r.flush({ message: 'Unauthorized' }, { status: 401, statusText: 'Unauthorized' }));

    // EXACTLY 1 refresh request should be issued
    const refreshReqs = httpMock.match('/auth/refresh');
    expect(refreshReqs.length).toBe(1);
    refreshReqs[0].flush({ success: true, data: { accessToken: 'single-flight-token-999' } });

    // Expect 5 retried requests with new token
    const retried1 = httpMock.expectOne('/resource-1');
    const retried2 = httpMock.expectOne('/resource-2');
    const retried3 = httpMock.expectOne('/resource-3');
    const retried4 = httpMock.expectOne('/resource-4');
    const retried5 = httpMock.expectOne('/resource-5');

    expect(retried1.request.headers.get('Authorization')).toBe('Bearer single-flight-token-999');
    expect(retried2.request.headers.get('Authorization')).toBe('Bearer single-flight-token-999');

    retried1.flush({ r: 1 });
    retried2.flush({ r: 2 });
    retried3.flush({ r: 3 });
    retried4.flush({ r: 4 });
    retried5.flush({ r: 5 });

    expect(res1).toEqual({ r: 1 });
    expect(res5).toEqual({ r: 5 });
  });
});
