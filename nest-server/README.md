# NestJS Auth Server (`nest-server`)

> Modular, production-ready NestJS Authentication & Session Service for BoardPilot AI.

## Overview

The `nest-server` provides an idiomatic, enterprise-grade NestJS authentication service featuring:
- **NestJS v11** modular framework.
- **Passport JWT** strategy & guards.
- **Prisma ORM** with global `PrismaModule` & `PrismaService`.
- **DTO Validation** using `class-validator` & `class-transformer`.
- **OpenAPI Swagger** auto-generated documentation (`/api/docs`).
- **JWT & HTTP-Only Cookie** session token rotation.

## Key Features

- 🔐 **User Authentication**: Secure signup, login, logout, profile fetching (`/me`), password resets.
- 🛡️ **Global Guards & Filters**: Custom `JwtAuthGuard` applied globally with `@Public()` metadata decorator bypass and global `HttpExceptionFilter`.
- 📚 **OpenAPI Documentation**: Interactive Swagger UI served at `/api/docs`.
- 🔒 **Security**: Helmet headers, CORS configuration, rate limiting, and cookie parser.

## Project Structure

```text
nest-server/
├── prisma/
│   └── schema.prisma           # Database schema (User, Session, OAuthProvider, AuditLog)
├── src/
│   ├── auth/
│   │   ├── decorators/         # @Public() & @GetUser() custom decorators
│   │   ├── dto/                # RegisterDto, LoginDto, RefreshDto, ResetPasswordDto
│   │   ├── guards/             # JwtAuthGuard
│   │   ├── strategies/         # Passport JwtStrategy
│   │   ├── auth.controller.ts  # Endpoints (/api/v1/auth/*) with Swagger metadata
│   │   ├── auth.service.ts     # Core authentication logic
│   │   └── auth.module.ts      # Auth module registration
│   ├── common/
│   │   ├── filters/            # Global HttpExceptionFilter
│   │   └── utils/              # Crypto utilities
│   ├── prisma/
│   │   ├── prisma.service.ts   # Prisma client lifecycle service
│   │   └── prisma.module.ts    # Global Prisma module
│   ├── users/
│   │   ├── users.service.ts    # User domain service
│   │   └── users.module.ts     # User domain module
│   ├── app.module.ts           # Root module
│   └── main.ts                 # Bootstrap with Swagger, ValidationPipe, Helmet
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
npm run start:dev
```
Server running at `http://localhost:3000/api/v1`.  
Swagger documentation at `http://localhost:3000/api/docs`.

### 5. Build for Production
```bash
npm run build
npm run start:prod
```
