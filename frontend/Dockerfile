# =========================
# Etapa 1: dependências
# =========================
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# =========================
# Etapa 2: build
# =========================
FROM node:20-alpine AS builder
WORKDIR /app

# Copia dependências do stage anterior
COPY --from=deps /app/node_modules ./node_modules

# Copia todo o projeto
COPY . .    

ENV NEXT_TELEMETRY_DISABLED=1

# Gera build standalone
RUN npm run build

# =========================
# Etapa 3: produção
# =========================
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Cria usuário não-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copia arquivos necessários para rodar
COPY --from=builder /app/public ./public
RUN mkdir .next && chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --chown=nextjs:nodejs public ./

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Standalone sobe via server.js
CMD ["node", ".next/standalone/server.js"]
