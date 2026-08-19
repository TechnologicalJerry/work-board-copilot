# Fastify Auth Server (`fastify-server`)

> High-performance, production-ready Fastify TypeScript Authentication & Session Service for BoardPilot AI.

## Overview

The `fastify-server` provides a fast, type-safe authentication service using:
- **Fastify v4** core framework with native plugins.
- **TypeScript** with strict type safety.
- **Prisma ORM** connecting to PostgreSQL database.
- **JWT & HTTP-Only Cookies** for secure token rotation and session management.
- **Zod** schema validation.

## Key Features

- 🔐 **User Registration & Login**: Hashed passwords (`bcryptjs`), user status checking (`ACTIVE`, `SUSPENDED`, `DEACTIVATED`).
- 🔄 **Session Tracking & Token Rotation**: Hashed refresh tokens stored in Prisma `Session` table.
- 🛡️ **Security Plugins**: Helmet headers, CORS, `@fastify/rate-limit`, `@fastify/jwt`, and `@fastify/cookie`.
- 🚨 **Structured Errors**: Custom `HttpError` classes (`BadRequestError`, `UnauthorizedError`, `ForbiddenError`, `NotFoundError`, `ConflictError`).

## Project Structure

```text
fastify-server/
├── prisma/
│   └── schema.prisma        # Prisma database schema (User, Session, OAuthProvider, AuditLog)
├── src/
│   ├── config/
│   │   └── env.ts           # Zod environment variable parsing
│   ├── db/
│   │   └── prisma.ts        # Prisma client singleton
│   ├── errors/
│   │   └── http-error.ts    # Typed custom HTTP errors
│   ├── plugins/
│   │   └── auth.plugin.ts   # Fastify JWT decorator (fastify.authenticate)
│   ├── routes/
│   │   ├── auth.routes.ts   # Auth API endpoints (/api/v1/auth/*)
│   │   └── health.routes.ts # Health check endpoint (/health)
│   ├── schemas/
│   │   └── auth.schema.ts   # Zod request validation schemas
│   ├── services/
│   │   └── auth.service.ts  # Core authentication business logic
│   ├── app.ts               # Fastify app factory & plugin assembly
│   └── server.ts            # Server entrypoint & graceful shutdown
├── .env.example
├── package.json
└── tsconfig.json
```

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env
```

### 3. Generate Prisma Client & Push DB Schema
```bash
npm run prisma:generate
npm run prisma:db:push
```

### 4. Start Development Server
```bash
npm run dev
```
Server running at `http://localhost:4000`.

### 5. Build for Production
```bash
npm run build
npm start
```
