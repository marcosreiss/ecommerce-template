# Etapa 1: build
FROM node:18-alpine AS builder
WORKDIR /app

# Instala dependências
COPY package*.json ./
RUN npm install

# Copia o restante do código e builda
COPY . .
RUN npm run build

# Etapa 2: runtime
FROM node:18-alpine AS runner
WORKDIR /app

# Copia apenas o necessário do build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "run", "start"]
