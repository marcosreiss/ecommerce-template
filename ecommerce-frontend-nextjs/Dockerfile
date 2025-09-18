# =========================
# Etapa 1: build
# =========================
FROM node:20-alpine AS builder
WORKDIR /app

# Copiar dependências e instalar todas (inclui dev)
COPY package*.json ./
RUN npm ci

# Copiar restante do código e gerar build
COPY . .
RUN npm run build

# =========================
# Etapa 2: produção
# =========================
FROM node:20-alpine AS runner
WORKDIR /app

# Copiar arquivos necessários
COPY package*.json ./
RUN npm ci --omit=dev

# Copiar apenas artefatos de build e arquivos públicos
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Usar usuário não-root
USER node

EXPOSE 3000
CMD ["npm", "run", "start"]
