# API Professores

API REST desenvolvida com Node.js, Express e MySQL para gerenciamento de professores. O projeto implementa operações CRUD (Create, Read, Update e Delete), permitindo cadastrar, consultar, atualizar e remover professores em um banco de dados relacional.

## Tecnologias Utilizadas

* Node.js
* Express
* MySQL
* mysql2
* JavaScript
* REST API

## Estrutura do Projeto

```text
api-professores/
│
├── src/
│   ├── controllers/
│   │   └── professorController.js
│   │
│   ├── database/
│   │   └── conexao.js
│   │
│   ├── models/
│   │   └── professorModel.js
│   │
│   ├── routes/
│   │   └── professorRoutes.js
│   │
│   └── app.js
│
├── server.js
├── package.json
└── README.md
```

## Funcionalidades

* Listar todos os professores
* Buscar professor por ID
* Cadastrar novo professor
* Atualizar dados de um professor
* Remover professor do banco de dados

## Estrutura da Tabela

```sql
CREATE TABLE professores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    disciplina VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    salario DECIMAL(10,2) NOT NULL
);
```

## Instalação

### 1. Clonar o repositório

```bash
git clone https://github.com/joaopjacomee/api-professores.git
```

### 2. Acessar a pasta do projeto

```bash
cd api-professores
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Configurar o banco de dados

Crie um banco chamado:

```sql
CREATE DATABASE escola;
```

Em seguida, crie a tabela `professores` utilizando o script apresentado anteriormente.

### 5. Configurar a conexão

No arquivo:

```text
src/database/conexao.js
```

Altere as credenciais de acesso ao MySQL:

```javascript
const conexao = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'sua_senha',
  database: 'escola'
});
```

## Executando o Projeto

```bash
node server.js
```

O servidor será iniciado em:

```text
http://localhost:3000
```

## Endpoints

### Listar professores

```http
GET /professores
```

### Buscar professor por ID

```http
GET /professores/:id
```

Exemplo:

```http
GET /professores/1
```

### Cadastrar professor

```http
POST /professores
```

Body:

```json
{
  "nome": "João Silva",
  "disciplina": "Banco de Dados",
  "email": "joao@email.com",
  "salario": 4500
}
```

### Atualizar professor

```http
PUT /professores/:id
```

Body:

```json
{
  "nome": "João Silva",
  "disciplina": "Programação Web",
  "email": "joao@email.com",
  "salario": 5000
}
```

### Remover professor

```http
DELETE /professores/:id
```

## Exemplo de Resposta

```json
{
  "id": 1,
  "nome": "João Silva",
  "disciplina": "Banco de Dados",
  "email": "joao@email.com",
  "salario": 4500
}
```

## Arquitetura

O projeto segue o padrão MVC:

* Model: responsável pelo acesso aos dados.
* Controller: responsável pelas regras de negócio.
* Routes: responsável pelo mapeamento das rotas.
* Database: responsável pela conexão com o banco.
* Server/App: inicialização da aplicação.

## Autor

João Paulo Jácome

GitHub: https://github.com/joaopjacomee