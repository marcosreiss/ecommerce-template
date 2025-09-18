# Imagem base
FROM node:18-alpine

# Diretório de trabalho
WORKDIR /app

# Copiar package.json e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar código da aplicação
COPY . .

# Build do Strapi (gera a pasta build)
RUN npm run build

# Porta do Strapi
EXPOSE 1337

# Comando para iniciar
CMD ["npm", "run", "start"]
