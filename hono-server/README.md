# Hono TypeScript REST Server (`hono-server`)

> Fast, lightweight, type-safe REST API service using **Hono** framework and `@hono/node-server` for BoardPilot AI.

## Overview

The `hono-server` provides a clean reference architecture for building ultra-fast Node.js APIs using:
- **Hono** web framework (lightweight, web-standards based).
- **@hono/node-server** Node.js runtime adapter.
- **TypeScript** with strict type checks.
- **Zod** environment validation & schema checking.
- **Typed HTTP Errors & Standardized JSON Responses**.

## Project Architecture

```text
hono-server/
├── src/
│   ├── config/
│   │   └── env.ts           # Zod environment parsing
│   ├── errors/
│   │   └── http-error.ts    # Custom HTTP error hierarchy (400, 401, 403, 404, 409)
│   ├── middleware/
│   │   └── auth.ts          # Authentication middleware (Bearer token & context user injection)
│   ├── routes/
│   │   ├── auth.routes.ts   # Authentication API (/api/v1/auth/*)
│   │   ├── health.routes.ts # Health & readiness endpoints (/health, /health/ready)
│   │   ├── task.routes.ts   # Task CRUD endpoints (/api/v1/tasks/*)
│   │   └── user.routes.ts   # User CRUD endpoints (/api/v1/users/*)
│   ├── types/
│   │   └── index.ts         # Shared TypeScript interfaces & Hono App context types
│   ├── utils/
│   │   └── response.ts      # Standardized JSON success & error response helpers
│   ├── app.ts               # Hono app factory, CORS, logger & error handlers
│   └── server.ts            # Entrypoint using @hono/node-server serve()
├── .env.example
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

## API Endpoints

### Health & Monitoring
- `GET /health` - Service health status & uptime
- `GET /health/ready` - Service readiness checks

### Authentication (`/api/v1/auth`)
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/register` - User registration
- `GET /api/v1/auth/me` - Authenticated user profile *(Protected)*

### Users (`/api/v1/users`) *(Protected)*
- `GET /api/v1/users` - List all users
- `GET /api/v1/users/:id` - Get user by ID
- `POST /api/v1/users` - Create user
- `PUT /api/v1/users/:id` - Update user
- `DELETE /api/v1/users/:id` - Delete user

### Tasks (`/api/v1/tasks`) *(Protected)*
- `GET /api/v1/tasks` - List tasks (supports `?status=todo|in_progress|done`)
- `GET /api/v1/tasks/:id` - Get task by ID
- `POST /api/v1/tasks` - Create task
- `PUT /api/v1/tasks/:id` - Update task
- `DELETE /api/v1/tasks/:id` - Delete task

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Mode
```bash
npm run dev
```
Server runs at `http://localhost:3000`.

### 3. Type Checking
```bash
npm run typecheck
```

### 4. Build & Start Production
```bash
npm run build
npm start
```
