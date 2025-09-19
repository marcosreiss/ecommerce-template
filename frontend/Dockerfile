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

# Garantir que o TypeScript esteja presente no build
RUN npm install --save-dev typescript

# Gerar build
RUN npm run build

# =========================
# Etapa 2: produção
# =========================
FROM node:20-alpine AS runner
WORKDIR /app

# Copiar package.json e instalar apenas deps de produção
COPY package*.json ./
RUN npm ci --omit=dev

# Copiar artefatos de build e arquivos públicos
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/package.json ./package.json

# Usar usuário não-root
USER node

EXPOSE 3000
CMD ["npm", "run", "start"]
