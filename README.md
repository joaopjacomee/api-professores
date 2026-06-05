# API REST — CRUD de Professores

Este projeto é uma API REST desenvolvida com Node.js, Express e MySQL, estruturada com arquitetura MVC (Model-View-Controller).

A aplicação segue o padrão CRUD (Create, Read, Update e Delete), permitindo operações de cadastro, consulta, atualização e remoção de registros de professores.

## Tecnologias utilizadas

- JavaScript
- Node.js
- Express
- MySQL

## Estrutura do projeto

```
projeto-api-professores/
│
├── src/
│   ├── controllers/
│   │   └── professorController.js   # Lógica das requisições e respostas
│   ├── models/
│   │   └── professorModel.js        # Queries SQL com async/await
│   ├── routes/
│   │   └── professorRoutes.js       # Definição das rotas REST
│   ├── database/
│   │   └── conexao.js               # Configuração da conexão com MySQL
│   └── app.js                       # Configuração do Express
│
├── server.js                        # Ponto de entrada da aplicação
├── script.sql                       # Script de criação do banco e tabela
├── package.json
└── README.md
```

## Banco de dados

O script de criação do banco de dados e da tabela está localizado em **`database.sql`** na raiz do projeto.

Execute-o no seu MySQL antes de subir a aplicação:

```sql
CREATE DATABASE escola;

USE escola;

CREATE TABLE professores (
  id         INT PRIMARY KEY AUTO_INCREMENT,
  nome       VARCHAR(100) NOT NULL,
  disciplina VARCHAR(100) NOT NULL,
  email      VARCHAR(100) NOT NULL,
  salario    DECIMAL(10,2) NOT NULL
);
```

## Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- MySQL rodando localmente

### 1. Clone o repositório

```bash
git clone https://github.com/adr0ude/projeto-api-professores.git
```
### 1. Acesse a pasta do projeto
```bash
cd projeto-api-professores
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure a conexão com o banco

Edite o arquivo `src/database/conexao.js` e informe suas credenciais do MySQL:

```javascript
const conexao = mysql.createPool({
  host: 'localhost', // Adicione o endereço do seu banco de dados
  user: 'root', // Modifique para o usuário do seu banco
  password: 'sua_senha', // Altere para sua senha
  database: 'escola'
});
```

### 4. Execute o script SQL

Abra seu cliente MySQL (Workbench, DBeaver ou terminal) e execute o arquivo `database.sql`.

### 5. Inicie o servidor

**Execução padrão:**
```bash
node server.js
```

**Modo desenvolvimento** (reinicia automaticamente com Nodemon):
```bash
npm run dev
```

**Modo produção:**
```bash
npm start
```

O servidor estará disponível em: `http://localhost:3000`


## 🔀 Endpoints da API
Esta seção apresenta os endpoints da API e o resultado de testes que foram realizados com o **Postman**.

### Base URL

```
http://localhost:3000/professores
```

---

### Listar todos os professores

```
GET /professores
```

**Exemplo de resposta utilizando o Postman:**

<img width="1431" height="751" alt="listarProfs" src="https://github.com/user-attachments/assets/a6c3020a-85b7-4ed8-aa88-a0801501e516" />


### Buscar professor por ID

```
GET /professores/:id
```

**Exemplo de resposta utilizando o Postman:**

<img width="1437" height="396" alt="image" src="https://github.com/user-attachments/assets/b8d35e06-1979-4516-89cf-05b16d7e5c8f" />



### Cadastrar professor

```
POST /professores
```

**Body (JSON):**
```json
{
  "nome": "Evandro",
  "disciplina": "Desenvolvimento Web",
  "email": "evandro@ifce.edu.br",
  "salario": "10000.00"
}
```

**Exemplo de resposta utilizando o Postman:**

<img width="1438" height="486" alt="image" src="https://github.com/user-attachments/assets/515b3116-8761-4827-856d-14434d8107ea" />


### Atualizar professor

```
PUT /professores/:id
```

**Body (JSON):**
```json
{
  "nome": "Maria Eduarda",
  "disciplina": "Desenvolvimento Web",
  "email": "mariaeduarda@ifce.edu.br",
  "salario": "5600.00"
}
```

**Exemplo de resposta utilizando o Postman:**

<img width="1433" height="497" alt="atualizar" src="https://github.com/user-attachments/assets/1e2a5d3f-65a7-4532-8f5d-c4b70a231cd8" />

### Deletar professor

```
DELETE /professores/:id
```

**Exemplo de resposta utilizando o Postman:**

<img width="1435" height="297" alt="deletar" src="https://github.com/user-attachments/assets/6e6ee616-60f3-441b-acd4-c3660b98f1c0" />


## Autor

Este projeto foi desenvolvido pela discente Maria Eduarda Araujo Sales como obtenção de nota parcial na disciplina de Desenvolvimento Web.
