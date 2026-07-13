# ---- Base ----
FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat openssl

# ---- Dependencies ----
FROM base AS deps
COPY package.json ./
COPY ../../shared/packages/types ./shared/packages/types
COPY ../../shared/packages/errors ./shared/packages/errors
COPY ../../shared/packages/common ./shared/packages/common
COPY ../../shared/packages/logger ./shared/packages/logger
COPY ../../shared/packages/middlewares ./shared/packages/middlewares
COPY ../../shared/packages/events ./shared/packages/events
RUN npm install --production=false

# ---- Builder ----
FROM deps AS builder
COPY prisma ./prisma
COPY src ./src
COPY tsconfig.json ./
COPY ../../tsconfig.base.json ./tsconfig.base.json
RUN npx prisma generate
RUN npm run build

# ---- Production ----
FROM base AS production
ENV NODE_ENV=production

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma

EXPOSE 3006
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3006/health || exit 1

USER node
CMD ["node", "dist/index.js"]
