# Imagem base LTS mais recente
FROM node:20-alpine

# Diretório de trabalho
WORKDIR /app

# Copiar package.json e instalar dependências com cache otimizado
COPY package*.json ./
RUN npm ci --omit=dev

# Copiar código da aplicação
COPY . .

# Build do Strapi
RUN npm run build

# Usar usuário não-root
USER node

# Porta padrão
EXPOSE 1337

# Comando de inicialização
CMD ["npm", "run", "start"]