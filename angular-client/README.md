# Work Board Copilot — Production Angular 22 Frontend

A production-grade, enterprise agile workboard application built with **Angular 22**, **Angular Signals**, **Standalone Components**, **RxJS**, **Reactive Forms**, and **Tailwind CSS**.

The application communicates with a backend microservices ecosystem containing **21 Express/TypeScript microservices** through a unified **API Gateway**.

---

## 🏛️ Platform Architecture Overview

```text
                                  WORK BOARD COPILOT
                                         │
                                  Angular 22 Frontend
                                         │
                    ┌────────────────────┼────────────────────┐
                    │                    │                    │
                  Core                Shared               Features
                    │                    │                    │
             API / Auth /            UI / Forms /       21 Business Domains
             Tenant / Errors         Tables / Dialogs         │
                    │                                         │
                    └────────────────────┬────────────────────┘
                                         │
                                    API Gateway
                                         │
        ┌────────────────────────────────┼────────────────────────────────┐
        │                                │                                │
      Identity                        Platform                      Intelligence
        │                                │                                │
      Users                        Projects / Tasks                  Automation
      Organizations                Documents / Files                 AI Copilot
      Workspaces                   Time / Reports                    Billing
      Teams                        Search / Audit
                                         │
                              21 Express Microservices
```

---

## 🚀 Implemented Stages (1–10)

1. **Stage 1 — Foundation & Architecture**: Angular 22 standalone setup, Tailwind CSS theme system, strict TypeScript compiler rules.
2. **Stage 2 — Core Infrastructure & API Layer**: `ApiClientService`, microservice endpoint definitions (`API_ENDPOINTS`), functional HTTP interceptor pipeline (API prefix, correlation ID, logging, auth, error normalizer).
3. **Stage 3 — Authentication & Identity**: JWT access/refresh token handling, `AuthService`, `AuthGuard`, single-flight refresh mechanism, session restoration.
4. **Stage 4 — Application Shell & Multi-Tenancy**: Responsive app layout (`AppShellComponent`, `SidebarComponent`, `AppHeaderComponent`), `OrganizationContextService`, `WorkspaceContextService`, tenant switching.
5. **Stage 5 — Organizations, Workspaces, Teams & Users**: Domain features for organization management, workspaces, teams, user profiles, user settings.
6. **Stage 6 — Projects, Boards, Tasks & Sprints**: Interactive Kanban board with drag-and-drop, task detail drawer, sprint planning backlog manager.
7. **Stage 7 — Collaboration, Documents & Files**: Rich comment threads with reactions, wiki document editor, file uploader with drag-and-drop & progress bar.
8. **Stage 8 — Time Tracking, Reports, Search & Audit**: Active timer banner, velocity & burndown charts, command palette global search (`⌘K`), security audit log browser.
9. **Stage 9 — Automation, AI Copilot & Billing**: Workflow automation rule builder, AI Copilot assistant panel with token usage meter, organization plan comparison (`STARTER`, `PROFESSIONAL`, `ENTERPRISE`), Stripe billing portal.
10. **Stage 10 — Production Hardening & Enterprise Release**: Environment configuration, error resilience, tenant isolation, production bundle budget optimization, 100% clean build & test suite.

---

## 💻 Tech Stack & Tools

- **Framework**: Angular 22 (Standalone Components, Signals, RxJS, Reactive Forms)
- **Styling**: Tailwind CSS, Lucide Icons (`@lucide/angular`)
- **Build System**: Angular Application Builder (`@angular/build`), Vite / esbuild
- **SSR & Prerendering**: Angular Server-Side Rendering (`@angular/ssr`)
- **Testing**: Vitest (`vitest`) with `@angular/common/http/testing` and `provideHttpClientTesting()`

---

## 🛠️ Development & Build Commands

```bash
# Install dependencies
npm install

# Start local development server
npm start

# Run unit test suite (Vitest)
npm test -- --watch=false

# Build production SSR & static prerender bundles
npm run build
```

---

## 🔒 Security & Tenant Isolation

- **Zero Secrets**: No API keys, JWT secrets, or payment credentials exist in client source code.
- **Tenant Context**: All API queries automatically inject `organizationId` and `workspaceId` context parameters.
- **XSS Protection**: HTML content is sanitized; untrusted AI responses require explicit user confirmation before state mutations.
- **Single-Flight Refresh**: Concurrent 401 HTTP responses trigger exactly 1 token refresh request before retrying queued requests.

---

## 📦 Production Deployment & SPA Fallback

When deploying the built Angular SPA bundle (`dist/work-board-copilot`), ensure the web server (Nginx / ALB / Cloudflare Pages) is configured to redirect non-asset client routes to `index.html` (or `server.mjs` for SSR execution).

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```
