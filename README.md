# Ecommerce Boilerplate

🚀 Boilerplate de e-commerce utilizando **Strapi (backend)**, **Next.js
(frontend)** e **Postgres (banco de dados)**, rodando em **Docker
Compose**.

## 📦 Estrutura do projeto

    ecommerce-boilerplate/
    ├── backend/   → Strapi (API + painel admin)
    ├── frontend/  → Next.js (loja virtual)
    ├── docker-compose.yml
    ├── .gitignore
    └── README.md

## 🔧 Pré-requisitos

-   [Docker](https://www.docker.com/) e [Docker
    Compose](https://docs.docker.com/compose/) instalados.
-   Node.js (opcional, apenas se quiser rodar localmente sem Docker).

## ▶️ Como rodar o projeto

1.  Clone o repositório:

    ``` bash
    git clone https://github.com/seu-user/ecommerce-boilerplate.git
    cd ecommerce-boilerplate
    ```

2.  Crie um arquivo `.env` na raiz com as variáveis de ambiente (exemplo
    abaixo).

3.  Suba os containers:

    ``` bash
    docker-compose up --build
    ```

4.  Acesse:

    -   Backend (Strapi): <http://localhost:1337/admin>
    -   Frontend (Next.js): <http://localhost:3000>

## 🌍 Variáveis de ambiente

Crie um arquivo `.env` na raiz com:

    POSTGRES_USER=admin
    POSTGRES_PASSWORD=admin
    POSTGRES_DB=ecommerce

    STRAPI_PORT=1337
    NEXT_PORT=3000

    MERCADO_PAGO_ACCESS_TOKEN=SEU_TOKEN_AQUI

## 📜 Licença

Este projeto é distribuído sob a licença MIT. Sinta-se livre para usar e
adaptar.
