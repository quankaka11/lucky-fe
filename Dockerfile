# ============================================================
# Lucky Envelope Frontend – Multi-stage Build
# ============================================================

# ── Stage 1: Build ────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files trước (tận dụng Docker cache)
COPY package.json package-lock.json ./

# Cài dependencies
RUN npm ci --ignore-scripts

# Copy source code
COPY . .

# Build arguments – truyền từ docker-compose
ARG VITE_ENABLE_AI=true
ARG VITE_AI_API_URL=/api
ARG VITE_AI_TIMEOUT=15000

# Set environment variables cho build
ENV VITE_ENABLE_AI=$VITE_ENABLE_AI
ENV VITE_AI_API_URL=$VITE_AI_API_URL
ENV VITE_AI_TIMEOUT=$VITE_AI_TIMEOUT

# Build production bundle
RUN npm run build

# ── Stage 2: Serve với Nginx ──────────────────────────────────
FROM nginx:1.25-alpine

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files từ stage 1
COPY --from=builder /app/dist /usr/share/nginx/html

# Port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD wget -qO- http://localhost:80/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
