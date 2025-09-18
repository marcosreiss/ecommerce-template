# =========================
# Etapa 1: Build
# =========================
FROM node:20-alpine AS builder

WORKDIR /app

# Copia dependências
COPY package*.json ./

# Instala TODAS as dependências (inclui dev, necessárias para build)
RUN npm ci

# Copia o restante do código
COPY . .

# Gera build do Strapi
RUN npm run build


# =========================
# Etapa 2: Produção
# =========================
FROM node:20-alpine AS production

WORKDIR /app

# Copia apenas os arquivos de dependência
COPY package*.json ./

# Instala SOMENTE dependências de produção
RUN npm ci --omit=dev

# Copia apenas build e código necessário
COPY --from=builder /app/build ./build
COPY --from=builder /app/config ./config
COPY --from=builder /app/src ./src
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.env* ./ 

# Garante permissões para o usuário node
RUN chown -R node:node /app

# Define usuário não-root
USER node

# Porta padrão do Strapi
EXPOSE 1337

# Comando final
CMD ["npm", "run", "start"]
