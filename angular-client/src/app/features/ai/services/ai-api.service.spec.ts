import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { AiApiService } from './ai-api.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';

describe('AiApiService', () => {
  let service: AiApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AiApiService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(AiApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should post chat message via POST /ai/chat', () => {
    service.chat({ message: 'Hello AI' }).subscribe((res) => {
      expect(res.data.response).toBe('Hello User');
    });

    const req = httpMock.expectOne(`${API_ENDPOINTS.AI}/chat`);
    expect(req.request.method).toBe('POST');
    req.flush({ success: true, data: { response: 'Hello User', sessionId: 'sess-1' } });
  });
});
