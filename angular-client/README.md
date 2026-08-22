# Work Board Copilot — Angular Frontend

This project is the Angular 22 frontend for **Work Board Copilot**, communicating with an Express/TypeScript microservices ecosystem (21 microservices) via a unified **API Gateway**.

---

## Core Infrastructure & API Architecture (Stage 2)

### Request Pipeline Flow

```text
Angular Component
       ↓
Feature API Service (e.g., ProjectApiService)
       ↓
ApiClientService
       ↓
HttpClient
       ↓
Functional HTTP Interceptors (API Prefix -> Correlation ID -> Logging -> Auth Placeholder -> Error Normalizer)
       ↓
API Gateway
       ↓
21 Microservices
```

---

### Core Structure (`src/app/core`)

```text
src/app/core/
├── api/
│   ├── api-client.service.ts       # Typed generic HTTP client (get, post, put, patch, delete)
│   ├── api-endpoints.ts            # Microservice route constants
│   └── api-response.ts             # Generic API & paginated response contracts
├── config/
│   ├── app-config.ts               # AppConfig models & environment presets
│   └── app-config.service.ts       # Signal-based configuration service
├── errors/
│   ├── api-error.ts                # Typed ApiError class & HttpErrorResponse normalizer
│   └── error-handler.service.ts    # Central Angular ErrorHandler implementation
├── http/
│   ├── http-context.ts             # HttpContext tokens for request behavior flags
│   └── interceptors/
│       ├── api-prefix.interceptor.ts
│       ├── correlation-id.interceptor.ts
│       ├── logging.interceptor.ts
│       ├── auth-placeholder.interceptor.ts
│       └── error.interceptor.ts
├── models/
│   ├── pagination.ts               # Pagination, sorting, and filter params
│   └── api.ts                      # RequestOptions and HttpParams builder
└── services/
    ├── loading.service.ts          # Signal-based request and feature loading tracker
    ├── connectivity.service.ts     # Network online/offline status tracker
    ├── config.service.ts           # Config wrapper
    └── logger.service.ts           # Environment-aware logger
```

---

### Interceptors Overview

1. **`apiPrefixInterceptor`**: Prepends base API Gateway URL (`apiGatewayUrl`) to relative endpoint requests.
2. **`correlationIdInterceptor`**: Attaches `X-Correlation-ID` header to enable distributed tracing.
3. **`loggingInterceptor`**: Logs request/response duration and performance metrics safely without exposing credentials.
4. **`authPlaceholderInterceptor`**: Extension point for Stage 3 Authorization header injection.
5. **`errorInterceptor`**: Converts raw `HttpErrorResponse` instances into strongly typed `ApiError` objects.

---

### Feature API Service Pattern

Components must **never** inject `HttpClient` directly. Feature services use `ApiClientService`:

```typescript
@Injectable({
  providedIn: 'root',
})
export class ProjectApiService {
  private readonly apiClient = inject(ApiClientService);

  getProjects(params?: PaginationParams): Observable<PaginatedResponse<Project>> {
    return this.apiClient.get<PaginatedResponse<Project>>(API_ENDPOINTS.PROJECTS, { params });
  }
}
```

---

## Development Commands

```bash
# Start development server
npm start

# Run unit tests (Vitest)
npm test

# Build production bundle
npm run build
```
