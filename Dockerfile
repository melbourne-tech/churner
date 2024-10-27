# syntax=docker/dockerfile:1

FROM node:20-alpine AS base

# --- Dependencies ---
FROM base AS deps
RUN apk add --no-cache libc6-compat git python3 make g++

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# --- Builder ---
FROM base AS builder

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN --mount=type=secret,id=SUPABASE_SERVICE_ROLE_KEY,env=SUPABASE_SERVICE_ROLE_KEY \
  --mount=type=secret,id=NEXT_PUBLIC_SUPABASE_URL,env=NEXT_PUBLIC_SUPABASE_URL \
  --mount=type=secret,id=NEXT_PUBLIC_SUPABASE_ANON_KEY,env=NEXT_PUBLIC_SUPABASE_ANON_KEY \
  --mount=type=secret,id=NEXT_PUBLIC_FATHOM_SITE_ID,env=NEXT_PUBLIC_FATHOM_SITE_ID \
  npm run build

# --- Production ---Ø
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN apk add --no-cache curl
RUN addgroup nodejs
RUN adduser -SDH nextjs
RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000

ENV PORT="3000"
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]