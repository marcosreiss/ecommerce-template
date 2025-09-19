# =========================
# Etapa 1: Build
# =========================
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar dependências
COPY package*.json ./

# Instalar TODAS as dependências (inclui dev, necessárias para build)
RUN npm ci

# Copiar o restante do código
COPY . .

# Gerar build do Strapi (cria /dist)
RUN npm run build


# =========================
# Etapa 2: Produção
# =========================
FROM node:20-alpine AS production

WORKDIR /app
ENV NODE_ENV=production

# Copiar arquivos de dependência
COPY package*.json ./

# Instalar apenas dependências de produção
RUN npm ci --omit=dev

# Copiar artefatos necessários do build
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/config ./config
COPY --from=builder /app/public ./public

# Criar diretórios de uploads e cache com permissões corretas
RUN mkdir -p /app/public/uploads /app/.tmp \
 && chown -R node:node /app

# Definir usuário não-root
USER node

# Expor porta do Strapi
EXPOSE 1337

# Iniciar Strapi em produção
CMD ["npm", "run", "start"]
