# User API - Prisma & MongoDB

API simples para gestão de usuários.

## 🚀 Tecnologias
- Node.js & Express
- Prisma ORM
- MongoDB

## 📦 Instalação
1. `npm install`
2. Configure o `DATABASE_URL` no arquivo `.env`
3. `npx prisma generate`

## 🛠️ Execução
```bash
node --watch server.js

## Endpoints

- GET /usuarios - Lista/busca usuários (filtros: name, email)

- POST /usuarios - Cadastra novo usuário

- DELETE /usuarios/:id - Remove usuário