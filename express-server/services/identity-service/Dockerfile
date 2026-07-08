# syntax=docker/dockerfile:1
FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache openssl

FROM base AS deps
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

FROM base AS builder
COPY package*.json ./
RUN npm ci
COPY . .
RUN [ -f prisma/schema.prisma ] && npx prisma generate || true
RUN npm run build

FROM base AS production
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma 2>/dev/null || true
EXPOSE 3000
USER node
CMD ["node", "dist/server.js"]

FROM base AS development
ENV NODE_ENV=development
COPY package*.json ./
RUN npm ci
COPY . .
RUN [ -f prisma/schema.prisma ] && npx prisma generate || true
EXPOSE 3000
CMD ["npm", "run", "dev"]
