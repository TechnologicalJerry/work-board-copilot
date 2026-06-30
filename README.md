# BoardPilot AI

> **Enterprise Agile Project Management Platform** — a full-stack, polyglot monorepo containing multiple backend implementations and frontend applications built around the same domain.

BoardPilot AI is comparable to Jira, ClickUp, Linear, and Azure DevOps. The monorepo is intentionally multi-framework — each backend and frontend is a standalone, production-ready implementation of the same product, making it an ideal reference architecture for comparing technologies at scale.

---

## Monorepo Structure

```text
work-board-copilot/
│
├── express-server/          ✅ Complete  — TypeScript + Express.js (21 microservices)
│
├── nest-server/             🔜 Planned  — TypeScript + NestJS (21 microservices)
├── fastify-server/          🔜 Planned  — TypeScript + Fastify (21 microservices)
│
├── angular-client/          🔜 Planned  — Angular 17+ (enterprise SPA)
├── next-client/             🔜 Planned  — Next.js 14+ (SSR / hybrid)
└── nuxt-client/             🔜 Planned  — Nuxt 3+ (SSR / Vue)
```

All implementations share:

- The same **domain model** (tasks, sprints, boards, organizations, billing, etc.)
- The same **database schemas** (PostgreSQL, MongoDB, Redis, Elasticsearch)
- The same **RabbitMQ event contracts** (routing keys, payloads)
- The same **API surface** (REST + JSON, same endpoints and request/response shapes)
- The same **infrastructure** (Docker Compose, Kubernetes manifests, CI/CD)

---

## Applications

### Backends

| Directory | Framework | Language | Status | Services |
|-----------|-----------|----------|--------|----------|
| [`express-server/`](./express-server/) | Express.js | TypeScript | ✅ Complete | 21 microservices |
| `nest-server/` | NestJS | TypeScript | 🔜 Planned | 21 microservices |
| `fastify-server/` | Fastify | TypeScript | 🔜 Planned | 21 microservices |

### Frontends

| Directory | Framework | Language | Status | Rendering |
|-----------|-----------|----------|--------|-----------|
| `angular-client/` | Angular 17+ | TypeScript | 🔜 Planned | SPA (CSR) |
| `next-client/` | Next.js 14+ | TypeScript | 🔜 Planned | SSR + CSR hybrid |
| `nuxt-client/` | Nuxt 3+ | TypeScript / Vue | 🔜 Planned | SSR + CSR hybrid |

---

## Platform Features

Regardless of which backend or frontend you use, the platform provides:

### Core Product
- **Task Management** — Tasks, subtasks, epics, stories, bugs with full lifecycle management
- **Agile Boards** — Kanban boards with drag-and-drop, WIP limits, swimlanes
- **Sprint Planning** — Sprint creation, backlog grooming, velocity tracking, burndown charts
- **Project Management** — Multi-project workspaces, milestones, labels, custom fields
- **Team Management** — Teams, departments, capacity planning, member roles

### Collaboration
- **Real-time Comments** — Threaded comments with @mentions, reactions, pinning
- **Document Editor** — Rich-text documents (Tiptap-compatible), versioning, templates
- **Notifications** — Email, Slack, Microsoft Teams, in-app, webhooks
- **File Management** — Uploads to AWS S3, presigned URLs, image thumbnails

### Intelligence & Automation
- **AI Assistant** — Task breakdown suggestions, sprint planning, summarization (OpenAI)
- **Automation Rules** — Event-driven rule engine (status change → notify, assign, webhook)
- **Smart Search** — Full-text Elasticsearch search with saved filters

### Operations
- **Time Tracking** — Timer, manual entries, timesheets with approval workflow
- **Reports** — Burndown, velocity, workload, cycle time, custom reports
- **Audit Logs** — Immutable, tamper-evident audit trail (90-day retention)
- **Billing** — Stripe subscriptions, plan limits (FREE / STARTER / PROFESSIONAL / ENTERPRISE)

### Security & Compliance
- **Authentication** — JWT + refresh tokens, OAuth2 (Google, GitHub), MFA (TOTP)
- **RBAC** — 7-level role hierarchy: Super Admin → Org Admin → Project Manager → Team Lead → Team Member → Viewer → Guest
- **Security** — Helmet, CORS, rate limiting, input validation (Zod), audit logging

---

## Technology Landscape

### Shared Infrastructure (all backends)

| Layer | Technology |
|-------|-----------|
| Primary database | PostgreSQL 16 |
| Document store | MongoDB 7 |
| Cache / sessions | Redis 7 |
| Search | Elasticsearch 8 |
| Message queue | RabbitMQ 3.13 |
| File storage | AWS S3 |
| Payments | Stripe |
| AI | OpenAI GPT-4 |
| Monitoring | Prometheus + Grafana |
| Tracing | OpenTelemetry + Jaeger |
| Container | Docker + Docker Compose |
| Orchestration | Kubernetes + Kustomize |
| CI/CD | GitHub Actions |

### Backend Technology Comparison

| Concern | Express.js | NestJS | Fastify |
|---------|-----------|--------|---------|
| Language | TypeScript | TypeScript | TypeScript |
| Architecture | Custom Clean Arch | Module-based DI | Plugin-based |
| DI Container | Manual / constructor | Built-in (decorators) | Plugins |
| Validation | Zod | class-validator | Zod / JSON Schema |
| ORM | Prisma + Mongoose | Prisma + Mongoose | Prisma + Mongoose |
| Swagger | swagger-ui-express | @nestjs/swagger | @fastify/swagger |
| Performance | High | Medium-High | Very High |
| Learning curve | Low | Medium | Low-Medium |

### Frontend Technology Comparison

| Concern | Angular | Next.js | Nuxt 3 |
|---------|---------|---------|--------|
| Language | TypeScript | TypeScript | TypeScript + Vue 3 |
| Rendering | CSR (SPA) | SSR + SSG + CSR | SSR + SSG + CSR |
| State management | NgRx / Signals | Zustand / Redux | Pinia |
| Styling | Angular Material / Tailwind | Tailwind CSS | Tailwind CSS |
| HTTP client | HttpClient (built-in) | fetch / TanStack Query | $fetch / TanStack Query |
| Testing | Jasmine / Jest | Jest + RTL | Vitest + Vue Test Utils |
| Best for | Enterprise, large teams | SEO + performance | Vue ecosystem, SEO |

---

## Quick Start

### Run with the Express.js backend (available now)

```bash
# 1. Clone
git clone <your-repo-url>
cd work-board-copilot/express-server

# 2. Install dependencies
npm install

# 3. Copy env file and fill in secrets
cp .env.example .env

# 4. Start infrastructure (databases, queues)
docker-compose up -d postgres mongodb redis elasticsearch rabbitmq

# 5. Run migrations and seed data
./scripts/migrate-all.sh
./scripts/seed-all.sh

# 6. Start all services
docker-compose up

# 7. Health check
./scripts/health-check-all.sh
```

API available at `http://localhost:3000`.

For the full setup guide — environment variables, Kubernetes deployment, per-service development, troubleshooting — see the **[Express.js backend README](./express-server/README.md)**.

---

## Service Architecture (All Backends)

All three backends implement the same 21 microservices on the same ports:

| # | Service | Port | Primary DB |
|---|---------|------|-----------|
| 1 | `api-gateway` | 3000 | — |
| 2 | `identity-service` | 3001 | PostgreSQL |
| 3 | `user-service` | 3002 | PostgreSQL |
| 4 | `organization-service` | 3003 | PostgreSQL |
| 5 | `workspace-service` | 3004 | PostgreSQL |
| 6 | `team-service` | 3005 | PostgreSQL |
| 7 | `project-service` | 3006 | PostgreSQL |
| 8 | `sprint-service` | 3007 | PostgreSQL |
| 9 | `board-service` | 3008 | PostgreSQL |
| 10 | `task-service` | 3009 | PostgreSQL |
| 11 | `notification-service` | 3010 | MongoDB |
| 12 | `comment-service` | 3011 | MongoDB |
| 13 | `document-service` | 3012 | MongoDB |
| 14 | `search-service` | 3013 | Elasticsearch + MongoDB |
| 15 | `file-service` | 3014 | PostgreSQL + S3 |
| 16 | `report-service` | 3015 | PostgreSQL |
| 17 | `time-tracking-service` | 3016 | PostgreSQL |
| 18 | `automation-service` | 3017 | PostgreSQL + MongoDB |
| 19 | `ai-service` | 3018 | MongoDB |
| 20 | `audit-service` | 3019 | MongoDB |
| 21 | `billing-service` | 3020 | PostgreSQL |

---

## Domain Event Contracts

All backends publish and consume the same RabbitMQ events. Frontends receive real-time updates via WebSocket relay from the API Gateway.

| Routing Key | Publisher | Consumers |
|-------------|-----------|----------|
| `task.created` | task-service | notification, search, audit, automation |
| `task.status_changed` | task-service | notification, audit, automation |
| `task.assigned` | task-service | notification, audit |
| `task.deleted` | task-service | search, audit |
| `sprint.started` | sprint-service | notification, automation, audit |
| `sprint.completed` | sprint-service | report, notification, automation |
| `comment.created` | comment-service | notification, audit |
| `mention.created` | comment-service | notification |
| `subscription.updated` | billing-service | organization, notification |
| `billing.payment_failed` | billing-service | notification, audit |
| `audit.log` | all services | audit-service |

---

## Implementation Roadmap

### Phase 1 — Express.js Backend ✅ Complete

- [x] 21 microservices with Clean Architecture / DDD / CQRS / Repository Pattern
- [x] Shared TypeScript packages (`@boardpilot/types`, `errors`, `common`, `logger`, `middlewares`, `events`, `validation`, `config`)
- [x] Full JWT + OAuth2 (Google, GitHub) + MFA (TOTP) authentication
- [x] Docker Compose full stack (21 services + all infrastructure)
- [x] Kubernetes manifests (base + dev/staging/prod overlays, HPA, PodDisruptionBudgets)
- [x] GitHub Actions CI/CD with path-based change detection matrix
- [x] Prometheus + Grafana + Jaeger observability
- [x] Stripe billing with webhook signature verification
- [x] OpenAI AI assistant with SSE streaming
- [x] Elasticsearch full-text search with real-time indexing
- [x] RabbitMQ event-driven architecture with dead-letter queues
- [x] Automation rule engine with 6 condition operators + 6 action types

### Phase 2 — NestJS Backend 🔜 Next

- [ ] Scaffold `nest-server/` with 21 NestJS modules
- [ ] Reuse Prisma schemas and Mongoose models from `express-server/`
- [ ] Reuse `@boardpilot/*` shared packages where possible
- [ ] NestJS Guards, Interceptors, Pipes for auth and validation
- [ ] OpenAPI auto-generation via `@nestjs/swagger`
- [ ] CQRS module (`@nestjs/cqrs`) for command/query separation
- [ ] Same Docker Compose infrastructure (same ports, same databases)

### Phase 3 — Fastify Backend 🔜 Planned

- [ ] Scaffold `fastify-server/` with plugin-based architecture
- [ ] JSON Schema validation (Fastify native) + Zod
- [ ] `@fastify/swagger` for OpenAPI
- [ ] Performance benchmarks vs Express and NestJS (k6 load tests)

### Phase 4 — Angular Frontend 🔜 Planned

- [ ] Angular 17+ with standalone components and signals
- [ ] NgRx for global state management
- [ ] Angular Material + Tailwind CSS design system
- [ ] Drag-and-drop Kanban board (Angular CDK DragDrop)
- [ ] Real-time task updates via SSE / WebSocket
- [ ] Progressive Web App (PWA) support

### Phase 5 — Next.js Frontend 🔜 Planned

- [ ] Next.js 14+ with App Router and Server Components
- [ ] TanStack Query for client-side cache and optimistic updates
- [ ] Tailwind CSS + shadcn/ui component library
- [ ] SSR for public pages (landing, auth), CSR for app
- [ ] Real-time collaboration via WebSocket

### Phase 6 — Nuxt 3 Frontend 🔜 Planned

- [ ] Nuxt 3 with Composition API and `<script setup>`
- [ ] Pinia for state management
- [ ] Tailwind CSS + Nuxt UI
- [ ] SSR for SEO-sensitive pages, CSR for the board/task views
- [ ] Real-time collaboration via WebSocket

---

## Repository Conventions

### Branch naming

```
feat/<scope>/<description>        # New feature
fix/<scope>/<description>         # Bug fix
chore/<scope>/<description>       # Maintenance
docs/<description>                # Documentation only

# Examples
feat/express/automation-webhook-retry
feat/angular/kanban-board-drag-drop
fix/nest/jwt-refresh-rotation
chore/deps/bump-stripe-v14
```

### Commit style (Conventional Commits)

```
feat(task-service): add bulk status update endpoint
fix(identity-service): prevent timing attack on login
chore(deps): bump stripe to v14.21
docs: update Kubernetes deployment guide
test(sprint-service): add burndown calculation unit tests
```

### CI — path-based change detection

Changes to `express-server/**` only trigger Express CI jobs. Changes to `angular-client/**` only trigger Angular CI. This keeps pipelines fast — a commit touching only the Angular client does not rebuild all 21 backend services.

---

## Documentation

| Document | Description |
|----------|-------------|
| [`express-server/README.md`](./express-server/README.md) | Complete guide — local setup, env vars, migrations, API reference, Docker, Kubernetes, CI/CD, monitoring, troubleshooting |
| `nest-server/README.md` | *(coming with Phase 2)* |
| `fastify-server/README.md` | *(coming with Phase 3)* |
| `angular-client/README.md` | *(coming with Phase 4)* |
| `next-client/README.md` | *(coming with Phase 5)* |
| `nuxt-client/README.md` | *(coming with Phase 6)* |

---

## License

Private — All rights reserved. BoardPilot AI © 2026.
