# 🛒 Digital Store Back-End

Back-end da aplicação **Digital Store**, uma API RESTful construída com **Node.js** e **Express** para gerenciar produtos, usuários, categorias, carrinho de compras e pedidos.

---

## ⚙️ Tecnologias Utilizadas

- **Node.js** – ambiente de execução JavaScript no servidor
- **Express.js** – framework para construção de APIs REST
- **bcryptjs** – criptografia de senhas
- **jsonwebtoken (JWT)** – autenticação e autorização
- **Jest + Supertest** – testes unitários e de integração
- **ESLint + Prettier** – padronização e formatação de código
- **dotenv** – gerenciamento de variáveis de ambiente

---

## 🚀 Funcionalidades Principais

### 🧑‍💼 Usuários & Autenticação
- Registro e login de usuários
- Autenticação via token JWT
- Proteção de rotas com middleware de autorização

### 🛍️ Produtos
- CRUD completo (Create, Read, Update, Delete)
- Associação com categorias
- Suporte a imagens e opções de produtos

### 📁 Categorias
- Cadastro e listagem de categorias de produtos

### 🛒 Carrinho & Pedidos
- Adição de produtos ao carrinho
- Criação e consulta de pedidos com itens, total e status

### ✅ Testes Automatizados
- Cobertura de testes com **Jest** e **Supertest**
- Testes de integração para usuários, produtos e categorias

---

## 📁 Estrutura do Projeto

```text
digital_store_back_end/
├── src/
│   ├── config/                 # Configuração de banco de dados
│   │   └── database.js
│
│   ├── controllers/            # Controladores de rotas
│   │   ├── AuthController.js
│   │   ├── CategoryController.js
│   │   ├── ProductController.js
│   │   └── UserController.js
│
│   ├── database/               # Inicialização e conexão com DB
│   │   └── index.js
│
│   ├── middleware/             # Middlewares personalizados
│   │   └── auth.js             # Autenticação JWT
│
│   ├── models/                 # Modelos de dados (ORM)
│   │   ├── Category.js
│   │   ├── Product.js
│   │   ├── ProductImage.js
│   │   ├── ProductOption.js
│   │   └── User.js
│
│   ├── routes/                 # Definição das rotas da API
│   │   ├── categoryRoutes.js
│   │   ├── productRoutes.js
│   │   └── userRoutes.js
│
│   ├── services/               # Regras de negócio
│   │   └── ProductService.js
│
│   ├── app.js                  # Configuração do Express
│   └── server.js               # Inicialização do servidor
│
├── tests/                      # Testes automatizados
│   ├── category.test.js
│   ├── product.test.js
│   └── user.test.js
│
├── .env                        # Variáveis de ambiente
├── package.json                # Scripts e dependências
├── package-lock.json
└── README.md                   # Documentação do projeto

