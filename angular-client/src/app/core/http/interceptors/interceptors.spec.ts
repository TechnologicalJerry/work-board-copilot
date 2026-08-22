import { TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { apiPrefixInterceptor } from './api-prefix.interceptor';
import { correlationIdInterceptor, CORRELATION_ID_HEADER } from './correlation-id.interceptor';
import { loggingInterceptor } from './logging.interceptor';
import { authPlaceholderInterceptor } from './auth-placeholder.interceptor';
import { errorInterceptor } from './error.interceptor';
import { AppConfigService } from '../../config/app-config.service';
import { ApiError } from '../../errors/api-error';

describe('HTTP Interceptors Pipeline', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppConfigService,
        provideHttpClient(
          withInterceptors([
            apiPrefixInterceptor,
            correlationIdInterceptor,
            loggingInterceptor,
            authPlaceholderInterceptor,
            errorInterceptor,
          ])
        ),
        provideHttpClientTesting(),
      ],
    });

    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('apiPrefixInterceptor', () => {
    it('should prepend API Gateway base URL to relative endpoints', () => {
      http.get('/projects').subscribe();

      const req = httpMock.expectOne('http://localhost:3000/api/v1/projects');
      expect(req.request.method).toBe('GET');
      req.flush([]);
    });

    it('should leave absolute URLs unchanged', () => {
      http.get('https://external-service.com/data').subscribe();

      const req = httpMock.expectOne('https://external-service.com/data');
      expect(req.request.method).toBe('GET');
      req.flush({});
    });
  });

  describe('correlationIdInterceptor', () => {
    it('should attach X-Correlation-ID header to outgoing requests', () => {
      http.get('/tasks').subscribe();

      const req = httpMock.expectOne('http://localhost:3000/api/v1/tasks');
      expect(req.request.headers.has(CORRELATION_ID_HEADER)).toBe(true);
      expect(req.request.headers.get(CORRELATION_ID_HEADER)).toBeTruthy();
      req.flush([]);
    });
  });

  describe('errorInterceptor', () => {
    it('should normalize HTTP errors into typed ApiError instances', () => {
      let caughtError: unknown;

      http.get('/protected').subscribe({
        next: () => {
          throw new Error('Should have failed');
        },
        error: (err) => {
          caughtError = err;
        },
      });

      const req = httpMock.expectOne('http://localhost:3000/api/v1/protected');
      req.flush({ message: 'Access Denied' }, { status: 403, statusText: 'Forbidden' });

      expect(caughtError instanceof ApiError).toBe(true);
      if (caughtError instanceof ApiError) {
        expect(caughtError.status).toBe(403);
        expect(caughtError.message).toBe('Access Denied');
      }
    });
  });
});
