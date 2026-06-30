# BoardPilot AI — Enterprise Backend

> Production-ready microservices backend for **BoardPilot AI**, an enterprise Agile Project Management SaaS platform comparable to Jira, ClickUp, and Linear.

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Services](#services)
3. [Technology Stack](#technology-stack)
4. [Prerequisites](#prerequisites)
5. [Quick Start — Local Development](#quick-start--local-development)
6. [Manual Setup (Without Docker)](#manual-setup-without-docker)
7. [Environment Variables](#environment-variables)
8. [Database Setup](#database-setup)
9. [Running Services Individually](#running-services-individually)
10. [API Reference](#api-reference)
11. [Testing](#testing)
12. [Docker Compose (Full Stack)](#docker-compose-full-stack)
13. [Production Deployment (Kubernetes)](#production-deployment-kubernetes)
14. [CI/CD Pipeline](#cicd-pipeline)
15. [Monitoring & Observability](#monitoring--observability)
16. [Security](#security)
17. [Troubleshooting](#troubleshooting)

---

## Architecture Overview

BoardPilot AI uses a **microservices architecture** with clean separation of concerns:

```
                          ┌─────────────────────┐
                          │     API Gateway     │
                          │   (Port 3000)       │
                          │  Rate limit · Auth  │
                          │  Circuit breaker    │
                          └──────────┬──────────┘
                                     │
              ┌──────────────────────┼──────────────────────┐
              │                      │                      │
   ┌──────────▼──────┐   ┌──────────▼──────┐   ┌──────────▼────────┐
   │ identity-service│   │  task-service   │   │ notification-svc  │
   │  (JWT · OAuth)  │   │ (Core workflow) │   │  (Email · Slack)  │
   └─────────────────┘   └─────────────────┘   └───────────────────┘

   ┌───────────┐  ┌──────────┐  ┌───────────┐  ┌─────────────────┐
   │ PostgreSQL│  │  MongoDB │  │    Redis  │  │    RabbitMQ     │
   │ (14 DBs)  │  │ (6 DBs)  │  │  (Cache)  │  │  (Event bus)    │
   └───────────┘  └──────────┘  └───────────┘  └─────────────────┘
```

Each service owns its own database — no cross-service DB access. Services communicate via:
- **Synchronous**: HTTP through API Gateway
- **Asynchronous**: RabbitMQ topic exchange for domain events

---

## Services

| Service | Port | Database | Description |
|---------|------|----------|-------------|
| `api-gateway` | 3000 | — | Single entry point, JWT validation, circuit breaker, rate limiting |
| `identity-service` | 3001 | PostgreSQL | Authentication — JWT, refresh tokens, OAuth2 (Google/GitHub), MFA (TOTP) |
| `user-service` | 3002 | PostgreSQL | User profiles, avatar, search |
| `organization-service` | 3003 | PostgreSQL | Organizations, member invitations, RBAC |
| `workspace-service` | 3004 | PostgreSQL | Workspaces within organizations |
| `team-service` | 3005 | PostgreSQL | Teams, departments, capacity planning |
| `project-service` | 3006 | PostgreSQL | Projects, labels, milestones, members |
| `sprint-service` | 3007 | PostgreSQL | Sprints, burndown charts, velocity tracking |
| `board-service` | 3008 | PostgreSQL | Kanban boards, columns, board configuration |
| `task-service` | 3009 | PostgreSQL | Tasks, subtasks, labels, history, watchers |
| `notification-service` | 3010 | MongoDB | Email, Slack, Teams, webhooks, in-app notifications |
| `comment-service` | 3011 | MongoDB | Threaded comments, reactions, @mentions |
| `document-service` | 3012 | MongoDB | Rich-text documents, versioning, templates |
| `search-service` | 3013 | Elasticsearch + MongoDB | Full-text search, saved filters |
| `file-service` | 3014 | PostgreSQL | File uploads, S3 presigned URLs, image thumbnails |
| `report-service` | 3015 | PostgreSQL | Burndown, velocity, workload, cycle time reports |
| `time-tracking-service` | 3016 | PostgreSQL | Time entries, timesheets, approval workflow |
| `automation-service` | 3017 | PostgreSQL + MongoDB | Rule engine, action executor, webhook integrations |
| `ai-service` | 3018 | MongoDB | OpenAI streaming, AI sessions, smart suggestions |
| `audit-service` | 3019 | MongoDB | Immutable audit logs, 90-day TTL, CSV export |
| `billing-service` | 3020 | PostgreSQL | Stripe subscriptions, plan limits, invoices |

---

## Technology Stack

| Category | Technology |
|----------|-----------|
| Runtime | Node.js 20 LTS |
| Language | TypeScript 5.3 (strict mode) |
| Framework | Express.js 4.18 |
| ORM | Prisma 5 (PostgreSQL) |
| ODM | Mongoose 8 (MongoDB) |
| Cache | IORedis 5 |
| Message Queue | amqplib (RabbitMQ) |
| Search | @elastic/elasticsearch 8 |
| File Storage | AWS S3 (SDK v3) |
| Payments | Stripe v14 |
| AI | OpenAI SDK |
| Validation | Zod |
| Logging | Pino |
| Tracing | OpenTelemetry + Jaeger |
| Metrics | Prometheus + Grafana |
| Auth | jsonwebtoken + speakeasy (TOTP) |
| Container | Docker + Docker Compose |
| Orchestration | Kubernetes + Kustomize |
| CI/CD | GitHub Actions |

---

## Prerequisites

Ensure the following are installed on your machine:

| Tool | Version | Install |
|------|---------|---------|
| Node.js | ≥ 20.0.0 | [nodejs.org](https://nodejs.org) |
| npm | ≥ 10.0.0 | Bundled with Node.js |
| Docker | ≥ 24.0 | [docs.docker.com](https://docs.docker.com/get-docker) |
| Docker Compose | ≥ 2.20 | Bundled with Docker Desktop |
| Git | ≥ 2.40 | [git-scm.com](https://git-scm.com) |

Optional (for production/Kubernetes):

| Tool | Purpose |
|------|---------|
| kubectl | Kubernetes CLI |
| kustomize | Kubernetes overlay management |
| helm | Package management (cert-manager, ingress-nginx) |

---

## Quick Start — Local Development

The fastest way to get everything running is with Docker Compose. This starts all 21 services plus all infrastructure.

### 1. Clone and enter the directory

```bash
git clone <your-repo-url>
cd work-board-copilot/express-server
```

### 2. Copy and configure environment variables

```bash
cp .env.example .env
```

Open `.env` and fill in the required secrets (see [Environment Variables](#environment-variables) for what's required vs. optional for local dev).

### 3. Install dependencies

```bash
npm install
```

### 4. Build shared packages

```bash
npm run build --workspace=shared/packages/types
npm run build --workspace=shared/packages/errors
npm run build --workspace=shared/packages/common
npm run build --workspace=shared/packages/logger
npm run build --workspace=shared/packages/config
npm run build --workspace=shared/packages/validation
npm run build --workspace=shared/packages/middlewares
npm run build --workspace=shared/packages/events
```

Or build everything at once (takes longer):

```bash
npm run build
```

### 5. Start infrastructure only (databases, queues, etc.)

```bash
docker-compose up -d postgres mongodb redis elasticsearch rabbitmq
```

Wait for all services to be healthy (~30 seconds):

```bash
docker-compose ps
```

### 6. Run database migrations

```bash
chmod +x scripts/migrate-all.sh
./scripts/migrate-all.sh
```

Or migrate a single service:

```bash
cd services/identity-service
npx prisma migrate deploy
cd ../..
```

### 7. Seed initial data

```bash
chmod +x scripts/seed-all.sh
./scripts/seed-all.sh
```

This seeds:
- `billing-service` — plan limits (FREE / STARTER / PROFESSIONAL / ENTERPRISE)
- `project-service` — default project templates
- `identity-service` — super admin account (see seed output for credentials)

### 8. Start a service in development mode

```bash
cd services/identity-service
npm run dev
```

Or start all services via Docker Compose:

```bash
docker-compose up
```

### 9. Verify everything is running

```bash
chmod +x scripts/health-check-all.sh
./scripts/health-check-all.sh
```

Or check a single service:

```bash
curl http://localhost:3001/health | jq
```

---

## Manual Setup (Without Docker)

If you prefer to run infrastructure natively:

### PostgreSQL

```bash
# macOS
brew install postgresql@16
brew services start postgresql@16

# Ubuntu/Debian
sudo apt install postgresql-16
sudo systemctl start postgresql

# Create databases
psql -U postgres -f docker/postgres/init/01-init-databases.sql
```

### MongoDB

```bash
# macOS
brew install mongodb-community@7.0
brew services start mongodb-community@7.0

# Ubuntu/Debian
# Follow: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/
```

### Redis

```bash
# macOS
brew install redis
brew services start redis

# Ubuntu/Debian
sudo apt install redis-server
sudo systemctl start redis-server
```

### RabbitMQ

```bash
# macOS
brew install rabbitmq
brew services start rabbitmq
# Management UI: http://localhost:15672 (guest/guest)

# Ubuntu/Debian
sudo apt install rabbitmq-server
sudo systemctl start rabbitmq-server
sudo rabbitmq-plugins enable rabbitmq_management
```

### Elasticsearch

```bash
# macOS
brew install elastic/tap/elasticsearch-full
brew services start elasticsearch-full

# Docker (easiest)
docker run -d --name elasticsearch \
  -p 9200:9200 -p 9300:9300 \
  -e "discovery.type=single-node" \
  -e "xpack.security.enabled=false" \
  docker.elastic.co/elasticsearch/elasticsearch:8.12.0
```

---

## Environment Variables

Copy `.env.example` to `.env`. Variables marked **Required** must be set before startup.

### Minimum required for local development

```env
# Infrastructure (if using defaults, these match docker-compose.yml)
DATABASE_URL=postgresql://boardpilot:boardpilot_secret@localhost:5432/boardpilot_identity
MONGODB_URI=mongodb://boardpilot:boardpilot_secret@localhost:27017/boardpilot?authSource=admin
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=boardpilot_redis_secret
RABBITMQ_URL=amqp://boardpilot:boardpilot_secret@localhost:5672

# JWT (generate random 64-char strings)
JWT_ACCESS_SECRET=<random-64-chars>
JWT_REFRESH_SECRET=<random-64-chars>
ENCRYPTION_KEY=<exactly-32-chars>
```

Generate secure values:

```bash
# JWT secrets
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

# Encryption key (must be exactly 32 chars)
node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"
```

### External service variables (optional for local, required for production)

| Variable | Service | Where to get it |
|----------|---------|-----------------|
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | identity-service OAuth | [Google Cloud Console](https://console.cloud.google.com) → APIs & Services → Credentials |
| `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` | identity-service OAuth | GitHub → Settings → Developer settings → OAuth Apps |
| `OPENAI_API_KEY` | ai-service | [platform.openai.com](https://platform.openai.com) |
| `STRIPE_SECRET_KEY` / `STRIPE_WEBHOOK_SECRET` / `STRIPE_PUBLISHABLE_KEY` | billing-service | [dashboard.stripe.com](https://dashboard.stripe.com) |
| `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` / `AWS_S3_BUCKET` | file-service | AWS IAM → Create user with S3 permissions |
| `SMTP_HOST` / `SMTP_USER` / `SMTP_PASSWORD` | notification-service | SendGrid / Mailgun / AWS SES |

### Per-service DATABASE_URL

Each Prisma service needs its own database URL (the init SQL creates separate databases):

```env
# identity-service/.env
DATABASE_URL=postgresql://boardpilot:boardpilot_secret@localhost:5432/boardpilot_identity

# user-service/.env
DATABASE_URL=postgresql://boardpilot:boardpilot_secret@localhost:5432/boardpilot_users

# organization-service/.env
DATABASE_URL=postgresql://boardpilot:boardpilot_secret@localhost:5432/boardpilot_organizations

# workspace-service/.env
DATABASE_URL=postgresql://boardpilot:boardpilot_secret@localhost:5432/boardpilot_workspaces

# team-service/.env
DATABASE_URL=postgresql://boardpilot:boardpilot_secret@localhost:5432/boardpilot_teams

# project-service/.env
DATABASE_URL=postgresql://boardpilot:boardpilot_secret@localhost:5432/boardpilot_projects

# sprint-service/.env
DATABASE_URL=postgresql://boardpilot:boardpilot_secret@localhost:5432/boardpilot_sprints

# board-service/.env
DATABASE_URL=postgresql://boardpilot:boardpilot_secret@localhost:5432/boardpilot_boards

# task-service/.env
DATABASE_URL=postgresql://boardpilot:boardpilot_secret@localhost:5432/boardpilot_tasks

# file-service/.env
DATABASE_URL=postgresql://boardpilot:boardpilot_secret@localhost:5432/boardpilot_files

# report-service/.env
DATABASE_URL=postgresql://boardpilot:boardpilot_secret@localhost:5432/boardpilot_reports

# time-tracking-service/.env
DATABASE_URL=postgresql://boardpilot:boardpilot_secret@localhost:5432/boardpilot_time_tracking

# billing-service/.env
DATABASE_URL=postgresql://boardpilot:boardpilot_secret@localhost:5432/boardpilot_billing

# automation-service/.env
DATABASE_URL=postgresql://boardpilot:boardpilot_secret@localhost:5432/boardpilot_automation
```

---

## Database Setup

### Prisma — PostgreSQL services

The `docker/postgres/init/01-init-databases.sql` script automatically creates all 14 databases when PostgreSQL starts via Docker. For manual setups, run it yourself:

```bash
psql -U postgres -f docker/postgres/init/01-init-databases.sql
```

**Generate Prisma clients** (must be done before TypeScript compilation):

```bash
# All services at once
for service in services/*/; do
  if [ -f "$service/prisma/schema.prisma" ]; then
    echo "Generating Prisma client for $service..."
    (cd "$service" && npx prisma generate)
  fi
done

# Or a single service
cd services/identity-service && npx prisma generate
```

**Run migrations:**

```bash
# All services
./scripts/migrate-all.sh

# Single service
cd services/identity-service
npx prisma migrate deploy
```

**Create a new migration** (development only):

```bash
cd services/task-service
npx prisma migrate dev --name add_task_priority_index
```

**Reset a database** (development only — destroys all data):

```bash
cd services/task-service
npx prisma migrate reset
```

### MongoDB — document services

MongoDB collections and indexes are created automatically by Mongoose when the service first starts. No manual setup required.

### Elasticsearch — search-service

Indexes are created automatically on search-service startup via the `ElasticClient.createIndexIfNotExists()` call. No manual setup required.

---

## Running Services Individually

Each service is a standalone Node.js application. Navigate into the service directory and use the npm scripts.

### Available scripts (all services)

```bash
npm run dev          # Start with ts-node-dev (hot reload)
npm run build        # Compile TypeScript → dist/
npm run start        # Run compiled dist/server.js
npm run test         # Run Jest tests
npm run prisma:generate  # Generate Prisma client (Prisma services only)
npm run prisma:migrate   # Deploy Prisma migrations (Prisma services only)
npm run prisma:seed      # Run seed script (services with seed data)
```

### Example: Start identity-service

```bash
# 1. Ensure infrastructure is running
docker-compose up -d postgres redis rabbitmq

# 2. Set up environment
cd services/identity-service
cp .env.example .env
# Edit .env with your values

# 3. Generate Prisma client
npx prisma generate

# 4. Run migrations
npx prisma migrate deploy

# 5. Start in dev mode (hot reload)
npm run dev

# Service is now available at http://localhost:3001
# Health check: curl http://localhost:3001/health
```

### Example: Start task-service

```bash
docker-compose up -d postgres redis rabbitmq

cd services/task-service
cp .env.example .env
npx prisma generate
npx prisma migrate deploy
npm run dev
# http://localhost:3009
```

### Example: Start ai-service

```bash
docker-compose up -d mongodb redis

cd services/ai-service
cp .env.example .env
# Add OPENAI_API_KEY to .env
npm run dev
# http://localhost:3018
```

### Recommended startup order

For the full platform to work correctly, start services in this order:

1. **Infrastructure** — postgres, mongodb, redis, rabbitmq, elasticsearch
2. **identity-service** — everything depends on auth
3. **Core services** — user, organization, workspace
4. **Domain services** — team, project, sprint, board, task
5. **Supporting services** — notification, comment, document, search, file
6. **Analytics/ops** — report, time-tracking, automation, audit, ai
7. **Billing** — billing-service
8. **Gateway** — api-gateway (start last, proxies all others)

---

## API Reference

All services expose their APIs through the **API Gateway** at `http://localhost:3000`.

### Base URLs

| Environment | API Base URL |
|-------------|-------------|
| Local (direct) | `http://localhost:{PORT}/api/v1` |
| Local (via gateway) | `http://localhost:3000/api/v1` |
| Staging | `https://staging.boardpilot.ai/api/v1` |
| Production | `https://api.boardpilot.ai/api/v1` |

### Authentication

All protected endpoints require a Bearer token:

```bash
# 1. Register
curl -X POST http://localhost:3001/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com","password":"Secure@123","firstName":"Jane","lastName":"Doe"}'

# 2. Login
curl -X POST http://localhost:3001/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com","password":"Secure@123"}'
# Response includes { accessToken, refreshToken }

# 3. Use the token
curl http://localhost:3002/api/v1/users/me \
  -H "Authorization: Bearer <accessToken>"
```

### Token lifecycle

| Token | Expiry | Storage |
|-------|--------|---------|
| Access Token (JWT) | 15 minutes | Memory / Authorization header |
| Refresh Token (opaque) | 7 days | HttpOnly cookie / request body |

```bash
# Refresh expired access token
curl -X POST http://localhost:3001/api/v1/auth/refresh \
  -H "Content-Type: application/json" \
  -d '{"refreshToken":"<your-refresh-token>"}'
```

### Key endpoint groups

```
# Identity & Auth
POST   /api/v1/auth/register
POST   /api/v1/auth/login
POST   /api/v1/auth/logout
POST   /api/v1/auth/refresh
POST   /api/v1/auth/forgot-password
POST   /api/v1/auth/reset-password
GET    /api/v1/auth/verify-email?token=<token>
GET    /api/v1/oauth/google               # OAuth initiate
GET    /api/v1/oauth/google/callback      # OAuth callback
GET    /api/v1/mfa/setup                  # Get TOTP QR code
POST   /api/v1/mfa/verify                 # Enable MFA
POST   /api/v1/mfa/disable

# Users
GET    /api/v1/users/me
PUT    /api/v1/users/me
GET    /api/v1/users/search?query=jane&organizationId=<id>
GET    /api/v1/users/:id

# Organizations
POST   /api/v1/orgs
GET    /api/v1/orgs
GET    /api/v1/orgs/:id
POST   /api/v1/orgs/:id/members           # Invite member
DELETE /api/v1/orgs/:id/members/:userId

# Projects
POST   /api/v1/projects
GET    /api/v1/projects?organizationId=<id>
GET    /api/v1/projects/:id
GET    /api/v1/projects/:id/labels
GET    /api/v1/projects/:id/milestones

# Tasks
POST   /api/v1/tasks
GET    /api/v1/tasks?organizationId=<id>&projectId=<id>
GET    /api/v1/tasks/:id
PUT    /api/v1/tasks/:id
POST   /api/v1/tasks/:id/status           # Change status
POST   /api/v1/tasks/:id/assign
POST   /api/v1/tasks/bulk/status          # Bulk update
GET    /api/v1/tasks/stats?projectId=<id>

# Sprints
POST   /api/v1/sprints
POST   /api/v1/sprints/:id/start
POST   /api/v1/sprints/:id/complete
GET    /api/v1/sprints/:id/burndown
GET    /api/v1/sprints/project/:projectId/velocity

# AI
POST   /api/v1/ai/task-suggestions        # Smart task breakdown
POST   /api/v1/ai/sprint-plan             # AI sprint planning
POST   /api/v1/ai/summarize               # Summarize tasks/docs
GET    /api/v1/ai/sessions                # SSE stream

# Billing
GET    /api/v1/billing/plans
POST   /api/v1/billing/customers
POST   /api/v1/billing/subscriptions
GET    /api/v1/billing/invoices/:orgId
POST   /api/v1/billing/webhooks/stripe    # Stripe webhook (raw body)

# Time Tracking
POST   /api/v1/time/entries               # Start timer
GET    /api/v1/time/active                # Get running timer
POST   /api/v1/time/entries/:id/stop      # Stop timer
GET    /api/v1/time/reports/user/:userId
GET    /api/v1/time/reports/project/:projectId

# Automations
GET    /api/v1/automations/templates
POST   /api/v1/automations
POST   /api/v1/automations/:id/enable
POST   /api/v1/automations/:id/test
```

---

## Testing

### Run all tests

```bash
npm run test
```

### Run tests for a specific service

```bash
cd services/identity-service
npm run test

# With coverage
npm run test -- --coverage

# Watch mode
npm run test -- --watch
```

### Run tests for a specific file

```bash
cd services/time-tracking-service
npx jest tests/unit/use-cases/StopTimerUseCase.test.ts
```

### Test environment setup

Tests use Jest with `ts-jest`. Each service has a `jest.config.ts` that maps `@boardpilot/*` imports to the shared package source directories — no build step needed to run tests.

```bash
# Install test dependencies if not already installed
npm install

# Run with verbose output
npm run test -- --verbose
```

---

## Docker Compose (Full Stack)

### Start everything

```bash
# Copy environment file
cp .env.example .env
# Edit .env with required secrets

# Start all services (infrastructure + all 21 microservices)
docker-compose up -d

# Watch logs
docker-compose logs -f

# Watch logs for a specific service
docker-compose logs -f identity-service
```

### Start only infrastructure (for local dev)

```bash
docker-compose up -d postgres mongodb redis elasticsearch rabbitmq
```

### Start specific services

```bash
docker-compose up -d postgres redis identity-service api-gateway
```

### Service management

```bash
# Stop everything
docker-compose down

# Stop and remove volumes (WARNING: deletes all data)
docker-compose down -v

# Rebuild a service image
docker-compose build identity-service

# Restart a single service
docker-compose restart task-service

# Scale a service (runs multiple replicas)
docker-compose up -d --scale task-service=3
```

### Monitoring UIs (started by Docker Compose)

| Tool | URL | Credentials |
|------|-----|-------------|
| RabbitMQ Management | http://localhost:15672 | boardpilot / boardpilot_secret |
| Prometheus | http://localhost:9090 | — |
| Grafana | http://localhost:3100 | admin / boardpilot_grafana_secret |
| Jaeger (tracing) | http://localhost:16686 | — |
| Elasticsearch | http://localhost:9200 | elastic / boardpilot_elastic_secret |

---

## Production Deployment (Kubernetes)

### Prerequisites

```bash
# Install tools
brew install kubectl kustomize helm

# Verify cluster access
kubectl cluster-info
kubectl get nodes
```

### 1. Install cluster dependencies

```bash
# cert-manager (TLS certificates via Let's Encrypt)
helm repo add jetstack https://charts.jetstack.io
helm install cert-manager jetstack/cert-manager \
  --namespace cert-manager --create-namespace \
  --set installCRDs=true

# NGINX Ingress Controller
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm install ingress-nginx ingress-nginx/ingress-nginx \
  --namespace ingress-nginx --create-namespace
```

### 2. Create namespace

```bash
kubectl create namespace boardpilot
```

### 3. Create secrets

Never commit real secrets. Use Kubernetes Secrets, Sealed Secrets, or External Secrets Operator.

```bash
# Create secrets manually (replace with real values)
kubectl create secret generic boardpilot-secrets \
  --namespace boardpilot \
  --from-literal=JWT_ACCESS_SECRET="$(openssl rand -hex 64)" \
  --from-literal=JWT_REFRESH_SECRET="$(openssl rand -hex 64)" \
  --from-literal=ENCRYPTION_KEY="$(openssl rand -hex 16)" \
  --from-literal=IDENTITY_DATABASE_URL="postgresql://user:pass@postgres:5432/boardpilot_identity" \
  --from-literal=STRIPE_SECRET_KEY="sk_live_..." \
  --from-literal=STRIPE_WEBHOOK_SECRET="whsec_..." \
  --from-literal=OPENAI_API_KEY="sk-..." \
  # ... add all required secrets
```

### 4. Create ConfigMap

```bash
kubectl apply -f kubernetes/base/configmap.yaml
```

### 5. Deploy to staging

```bash
kubectl apply -k kubernetes/overlays/staging
kubectl rollout status deployment -n boardpilot-staging
```

### 6. Deploy to production

```bash
kubectl apply -k kubernetes/overlays/production

# Monitor rollout
kubectl rollout status deployment/identity-service -n boardpilot
kubectl rollout status deployment/task-service -n boardpilot

# Check all pods
kubectl get pods -n boardpilot
```

### 7. Run migrations in Kubernetes

```bash
# Run migration as a Kubernetes Job
kubectl run migrate-identity \
  --namespace boardpilot \
  --image=ghcr.io/boardpilot/identity-service:latest \
  --restart=Never \
  --env="DATABASE_URL=<url>" \
  -- npx prisma migrate deploy

# Watch completion
kubectl logs -f migrate-identity -n boardpilot
```

### Kubernetes management commands

```bash
# View all resources
kubectl get all -n boardpilot

# Check pod logs
kubectl logs -f deployment/task-service -n boardpilot

# Shell into a pod
kubectl exec -it deployment/identity-service -n boardpilot -- sh

# Describe a failing pod
kubectl describe pod <pod-name> -n boardpilot

# Scale a deployment
kubectl scale deployment task-service --replicas=5 -n boardpilot

# Rolling update (after pushing new image)
kubectl rollout restart deployment/task-service -n boardpilot

# Rollback a deployment
kubectl rollout undo deployment/task-service -n boardpilot
```

### HPA (Auto-scaling)

The task-service HPA automatically scales between 3–20 replicas based on CPU:

```bash
kubectl get hpa -n boardpilot
kubectl describe hpa task-service-hpa -n boardpilot
```

---

## CI/CD Pipeline

The GitHub Actions workflows are in `.github/workflows/`:

| Workflow | Trigger | What it does |
|----------|---------|-------------|
| `ci.yml` | Push / PR to `main` | Detects changed services, runs tests + builds, deploys to staging/production |
| `security.yml` | Push / Daily schedule | npm audit, TruffleHog secret scanning, CodeQL SAST, Trivy container scanning |

### Path-based change detection

Only services with changed files are built and tested — this keeps CI fast on a large monorepo:

```yaml
# .github/workflows/ci.yml uses dorny/paths-filter
# If only task-service files change → only task-service is tested/built/deployed
```

### Required GitHub Secrets

Set these in your repository → Settings → Secrets and variables → Actions:

```
GHCR_TOKEN          # GitHub container registry token (write:packages)
KUBE_CONFIG_STAGING # base64-encoded kubeconfig for staging cluster
KUBE_CONFIG_PROD    # base64-encoded kubeconfig for production cluster
CODECOV_TOKEN       # (optional) Code coverage reporting
```

### Deploy manually

```bash
# Trigger a manual deployment via GitHub CLI
gh workflow run ci.yml --ref main
```

---

## Monitoring & Observability

### Prometheus metrics

Every service exposes `/metrics` on its port. Prometheus scrapes all 21 services automatically (configured in `docker/prometheus/prometheus.yml`).

```bash
# View raw metrics
curl http://localhost:3001/metrics

# Prometheus UI
open http://localhost:9090
```

### Grafana dashboards

Grafana starts pre-provisioned with the **BoardPilot Services Overview** dashboard:

```bash
open http://localhost:3100
# Login: admin / boardpilot_grafana_secret
```

Dashboard panels:
- Service health status (UP/DOWN per service)
- Request rate by service (req/s)
- P95 response latency
- 5xx error rate
- Memory usage

### Distributed tracing (Jaeger)

All services emit OpenTelemetry traces. View in Jaeger:

```bash
open http://localhost:16686
```

Filter by service name (e.g., `boardpilot-task-service`) to trace a request end-to-end through the microservices.

### Log aggregation

All services use **Pino** for structured JSON logging. In Docker Compose, logs are collected with the `json-file` driver:

```bash
# Follow all logs
docker-compose logs -f

# Filter by service
docker-compose logs -f task-service identity-service

# Search logs (pipe to jq)
docker-compose logs task-service 2>&1 | jq 'select(.level == 50)'  # errors only
```

### Health checks

Each service exposes `GET /health` returning:

```json
{
  "status": "healthy",
  "service": "task-service",
  "version": "1.0.0",
  "timestamp": "2026-06-29T12:00:00.000Z",
  "checks": {
    "postgres": { "status": "pass", "duration": 2 },
    "redis":    { "status": "pass", "duration": 1 }
  }
}
```

```bash
# Check all services at once
./scripts/health-check-all.sh

# Check one service
curl http://localhost:3009/health | jq
```

---

## Security

### RBAC Roles

| Role | Scope | Capabilities |
|------|-------|-------------|
| `SUPER_ADMIN` | Platform | Full platform access, manage all organizations |
| `ORG_ADMIN` | Organization | Manage org settings, members, billing |
| `PROJECT_MANAGER` | Organization | Create/manage projects, invite members |
| `TEAM_LEAD` | Team | Manage team, assign tasks, run sprints |
| `TEAM_MEMBER` | Project | Create/update tasks, log time |
| `VIEWER` | Project | Read-only access |
| `GUEST` | Project | Limited read access (shared links) |

### Security features

- **JWT + Opaque Refresh Tokens**: Access tokens expire in 15 min; refresh tokens stored as SHA-256 hashes in DB
- **Token Blacklist**: Revoked tokens stored in Redis sorted set with TTL
- **MFA**: TOTP via speakeasy (Google Authenticator compatible) + 10 backup codes
- **OAuth2**: Google and GitHub (no Passport.js — direct OAuth2 code flow via axios)
- **Password Policy**: Minimum 8 characters, requires uppercase + lowercase + digit + special character
- **Rate Limiting**: 100 req/15min per IP on all services; stricter on auth endpoints
- **Helmet**: Security headers (CSP, HSTS, X-Frame-Options, etc.)
- **Input Validation**: All endpoints validated with Zod schemas — no raw user input reaches database
- **Stripe Webhooks**: HMAC-SHA256 signature verification on raw request body
- **Audit Logs**: Every sensitive action (login, permission change, billing) written to immutable audit log with 90-day retention

### Secrets management

- **Development**: `.env` files (gitignored)
- **Production**: Kubernetes Secrets (recommend [Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets) or [External Secrets Operator](https://external-secrets.io))
- **Never**: Commit secrets to git. The security workflow runs TruffleHog on every push.

---

## Troubleshooting

### `Cannot find module '@boardpilot/types'`

Shared packages aren't built yet:

```bash
cd express-server
npm install
npm run build --workspace=shared/packages/types
npm run build --workspace=shared/packages/errors
# etc. for all shared packages
```

### `PrismaClientInitializationError` / can't connect to DB

1. Check PostgreSQL is running: `docker-compose ps postgres`
2. Check `DATABASE_URL` in the service's `.env` matches the running instance
3. Check Prisma client is generated: `cd services/<name> && npx prisma generate`
4. Check migrations ran: `cd services/<name> && npx prisma migrate deploy`

### `Error: connect ECONNREFUSED 127.0.0.1:5672` (RabbitMQ)

RabbitMQ isn't running or the URL is wrong:

```bash
docker-compose up -d rabbitmq
# Wait 10 seconds for it to start
docker-compose logs rabbitmq
```

### TypeScript compilation errors

After a fresh clone, compile errors are expected until Prisma clients are generated:

```bash
# Generate all Prisma clients first
for service in services/*/; do
  [ -f "$service/prisma/schema.prisma" ] && (cd "$service" && npx prisma generate)
done

# Then compile
npm run build
```

### Port already in use

```bash
# Find what's using port 3001
lsof -i :3001        # macOS/Linux
netstat -ano | findstr :3001  # Windows

# Kill the process
kill -9 <PID>
```

### `stripe-signature` header missing (billing-service)

The Stripe webhook endpoint (`POST /api/v1/billing/webhooks/stripe`) requires the raw request body. Make sure your reverse proxy / load balancer forwards the raw body and doesn't modify it.

### `speakeasy` TOTP codes invalid

Ensure the system clock on your server is accurate. TOTP is time-based and fails if the clock skew is more than 30 seconds. Use `window: 1` in `speakeasy.totp.verify` (already configured) to allow ±30s tolerance.

### Elasticsearch index not found

The search-service creates indexes on startup. If they're missing:

```bash
# Restart search-service to trigger index creation
docker-compose restart search-service

# Or manually create via the Elasticsearch API
curl -X PUT http://localhost:9200/boardpilot_tasks \
  -H "Content-Type: application/json" \
  -d @services/search-service/src/infrastructure/elasticsearch/mappings/task.mapping.ts
```

---

## Project Structure

```
express-server/
├── shared/
│   └── packages/
│       ├── types/          # Shared TypeScript types
│       ├── errors/         # AppError, HttpError, DomainError
│       ├── common/         # Crypto, response helpers, retry, circuit-breaker
│       ├── logger/         # Pino logger singleton
│       ├── config/         # Base config parser (Zod)
│       ├── middlewares/    # Auth, error handler, request context, health
│       ├── events/         # RabbitMQ connection, publisher, consumer
│       └── validation/     # Common Zod schemas
│
├── services/
│   ├── api-gateway/
│   ├── identity-service/
│   ├── user-service/
│   ├── organization-service/
│   ├── workspace-service/
│   ├── team-service/
│   ├── project-service/
│   ├── sprint-service/
│   ├── board-service/
│   ├── task-service/
│   ├── notification-service/
│   ├── comment-service/
│   ├── document-service/
│   ├── search-service/
│   ├── file-service/
│   ├── report-service/
│   ├── time-tracking-service/
│   ├── automation-service/
│   ├── ai-service/
│   ├── audit-service/
│   └── billing-service/
│
├── docker/
│   ├── postgres/init/      # Database initialization SQL
│   ├── grafana/            # Dashboard JSON + provisioning configs
│   └── prometheus/         # Prometheus scrape config
│
├── kubernetes/
│   ├── base/               # Base K8s manifests (Deployments, Services, HPA, Ingress)
│   └── overlays/
│       ├── development/    # Dev overrides (1 replica, reduced resources)
│       ├── staging/        # Staging overrides
│       └── production/     # Production overrides (PodDisruptionBudgets)
│
├── scripts/
│   ├── migrate-all.sh      # Run Prisma migrations on all services
│   ├── seed-all.sh         # Seed initial data on all services
│   └── health-check-all.sh # Hit /health on all 21 services
│
├── .github/
│   └── workflows/
│       ├── ci.yml          # Test → Build → Deploy pipeline
│       └── security.yml    # Audit, SAST, secret scanning, container scan
│
├── docker-compose.yml      # Full stack (21 services + infrastructure)
├── tsconfig.base.json      # Shared TypeScript base config
├── .env.example            # All environment variables documented
└── README.md               # This file
```

---

## Contributing

1. Create a feature branch: `git checkout -b feat/your-feature`
2. Make changes following the existing patterns (Clean Architecture, DDD, Repository Pattern)
3. Add tests for new use cases
4. Run linting: `npm run lint`
5. Run tests: `npm run test`
6. Open a PR — CI runs automatically

---

## License

Private — All rights reserved. BoardPilot AI © 2026.
