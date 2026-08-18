<div align="center">

# 🚀 BoardPilot AI

### Enterprise Agile Project Management Platform

*A full-stack, polyglot monorepo featuring production-ready backend implementations in **Express.js**, **NestJS**, and **Fastify** built around a unified domain model.*

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg?logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.18-lightgrey.svg?logo=express)](https://expressjs.com/)
[![NestJS](https://img.shields.io/badge/NestJS-11.0-red.svg?logo=nestjs)](https://nestjs.com/)
[![Fastify](https://img.shields.io/badge/Fastify-4.26-black.svg?logo=fastify)](https://www.fastify.io/)
[![Prisma](https://img.shields.io/badge/Prisma-5.22-indigo.svg?logo=prisma)](https://www.prisma.io/)
[![Docker](https://img.shields.io/badge/Docker-Enabled-blue.svg?logo=docker)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-UNLICENSED-yellow.svg)](#license)

</div>

---

## 📌 Overview

**BoardPilot AI** is an enterprise agile project management platform comparable to Jira, ClickUp, Linear, and Azure DevOps. 

This repository is intentionally designed as a **polyglot reference architecture** — demonstrating identical business requirements implemented across multiple modern Node.js backend frameworks and frontend ecosystems:

- **Express.js Server**: 21 clean microservices using Clean Architecture, DDD, and Repository Pattern.
- **NestJS Server**: Enterprise modular architecture with Passport JWT, `class-validator` DTOs, and auto-generated Swagger documentation.
- **Fastify Server**: High-performance, plugin-based architecture with Zod schema validation and native speed.

> [!NOTE]
> All backends share the same PostgreSQL/MongoDB database models, JWT token structure, security policies, and domain contracts.

---

## 📁 Monorepo Structure

```text
work-board-copilot/
│
├── 📁 express-server/          ✅ Complete     — Express.js (21 Microservices, Clean Arch, DDD)
├── 📁 nest-server/             🚀 Active       — NestJS (Passport JWT Auth Server + OpenAPI Swagger)
├── 📁 fastify-server/          🚀 Active       — Fastify (High-Performance Auth Server + Plugins)
│
├── 📁 angular-client/          🔜 Planned     — Angular 17+ (Enterprise SPA)
├── 📁 next-client/             🔜 Planned     — Next.js 14+ (App Router / SSR)
└── 📁 nuxt-client/             🔜 Planned     — Nuxt 3+ (Vue / SSR)
```

---

## ⚡ Applications & Implementations

### Backends

| Directory | Framework | Language | Status | Key Features | Documentation |
|-----------|-----------|----------|--------|--------------|---------------|
| [`express-server/`](./express-server/) | Express.js | TypeScript | ✅ Complete | 21 Microservices, Clean Architecture, CQRS, RabbitMQ, S3, OpenAI | [`README.md`](./express-server/README.md) |
| [`nest-server/`](./nest-server/) | NestJS | TypeScript | 🚀 Active | Auth Service, Passport JWT, DTO Pipes, OpenAPI Swagger UI | [`README.md`](./nest-server/README.md) |
| [`fastify-server/`](./fastify-server/) | Fastify | TypeScript | 🚀 Active | Auth Service, Fastify Plugins, Zod Schemas, HTTP-only Cookies | [`README.md`](./fastify-server/README.md) |

### Frontends

| Directory | Framework | Language | Status | Rendering Model |
|-----------|-----------|----------|--------|-----------------|
| `angular-client/` | Angular 17+ | TypeScript | 🔜 Planned | SPA (CSR, NgRx, Signals) |
| `next-client/` | Next.js 14+ | TypeScript | 🔜 Planned | SSR + CSR Hybrid (App Router) |
| `nuxt-client/` | Nuxt 3+ | TypeScript / Vue | 🔜 Planned | SSR + CSR Hybrid (Pinia) |

---

## 🚀 Quick Start Guide

### 1️⃣ Fastify Auth Server (`fastify-server`)

```bash
cd fastify-server
npm install
cp .env.example .env
npm run prisma:generate
npm run dev
```
> Server running at `http://localhost:4000`

### 2️⃣ NestJS Auth Server (`nest-server`)

```bash
cd nest-server
npm install
cp .env.example .env
npm run prisma:generate
npm run start:dev
```
> Server running at `http://localhost:3000/api/v1`  
> 📚 OpenAPI Swagger Docs at `http://localhost:3000/api/docs`

### 3️⃣ Express.js Microservices Server (`express-server`)

```bash
cd express-server
npm install
cp .env.example .env
docker-compose up -d postgres mongodb redis elasticsearch rabbitmq
./scripts/migrate-all.sh
docker-compose up
```
> Gateway running at `http://localhost:3000`

---

## 💡 Key Platform Features

- 🔐 **Authentication & Session Security** — JWT Access Tokens, HTTP-only Refresh Cookies, Token Rotation, Session Revocation, Password Resets.
- 👥 **7-Level Role Hierarchy (RBAC)** — `SUPER_ADMIN` → `ORG_ADMIN` → `PROJECT_MANAGER` → `TEAM_LEAD` → `TEAM_MEMBER` → `VIEWER` → `GUEST`.
- 📋 **Agile Lifecycle** — Projects, Workspaces, Teams, Sprints, Kanban Boards, Backlogs, Burndown Metrics.
- 💬 **Collaboration & File Storage** — Real-time comments, @mentions, document editor, AWS S3 presigned file uploads.
- 🤖 **AI Assistant & Automation** — OpenAI GPT-4 task breakdowns, event-driven rule engine (RabbitMQ).
- 📊 **Monitoring & Observability** — Prometheus metrics, Grafana dashboards, Jaeger OpenTelemetry tracing.

---

## 📊 Backend Technology Comparison

| Concern | Express.js | NestJS | Fastify |
|---------|-----------|--------|---------|
| **Architecture** | Custom Clean Arch / DDD | Module-based DI | Plugin-based |
| **Dependency Injection** | Manual / Constructor | Built-in `@Injectable()` | Fastify Decorators |
| **Validation** | Zod | `class-validator` DTOs | Zod Schemas |
| **ORM** | Prisma + Mongoose | Prisma + Mongoose | Prisma |
| **API Documentation** | `swagger-ui-express` | `@nestjs/swagger` | `@fastify/swagger` |
| **Performance** | High | Medium-High | Extremely High |

---

## 🤝 Repository Conventions

### Commit Style (Conventional Commits)
```bash
feat(auth): implement refresh token rotation in Fastify
feat(nest-server): add Swagger documentation for auth endpoints
fix(identity-service): sanitize sensitive fields in user profile
docs: update monorepo landing page README
```

---

## 📜 Documentation & Links

- 📘 [Express.js Backend Documentation](./express-server/README.md)
- 📙 [NestJS Server Documentation](./nest-server/README.md)
- 📗 [Fastify Server Documentation](./fastify-server/README.md)

---

## 📄 License

BoardPilot AI © 2026. All rights reserved.
