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
ENV NODE_ENV=production

# Copia apenas os arquivos de dependência
COPY package*.json ./

# Instala SOMENTE dependências de produção
RUN npm ci --omit=dev

# Copia artefatos e código necessários
COPY --from=builder /app/dist ./dist           
COPY --from=builder /app/config ./config
COPY --from=builder /app/src ./src
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.env* ./               

# (Opcional) se você preferir reutilizar node_modules do builder, troque
# o npm ci acima por: COPY --from=builder /app/node_modules ./node_modules

# Ajuste de permissões (mais barato que chown em tudo)
RUN mkdir -p /app/public/uploads /app/.tmp \
 && chown -R node:node /app

# Define usuário não-root
USER node

# Porta padrão do Strapi
EXPOSE 1337

# Comando final
CMD ["npm", "run", "start"]
