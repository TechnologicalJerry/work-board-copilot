# ============================================================
# Stage 1: Builder
# ============================================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy workspace manifests first so layer cache is preserved when only source changes
COPY package.json tsconfig.json ./

# Copy shared packages (workspace dependencies)
COPY ../../shared/packages ./shared/packages

# Install all dependencies (including devDependencies needed for tsc)
RUN npm install --include=dev

# Copy TypeScript source
COPY src ./src

# Compile TypeScript → JavaScript
RUN npm run build

# ============================================================
# Stage 2: Production image
# ============================================================
FROM node:20-alpine AS production

WORKDIR /app

# Copy package manifest
COPY package.json ./

# Copy shared packages into the production image
COPY --from=builder /app/shared ./shared

# Install only production dependencies
RUN npm install --omit=dev

# Copy compiled output from builder stage
COPY --from=builder /app/dist ./dist

# Copy swagger spec so it is available at runtime
COPY swagger.yaml ./swagger.yaml

# Non-root user for security
USER node

# Expose the gateway port
EXPOSE 3000

# Health check so orchestrators can detect when the gateway is ready
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD wget -qO- http://localhost:3000/health/internal || exit 1

CMD ["node", "dist/server.js"]
