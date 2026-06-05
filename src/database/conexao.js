// Importa a biblioteca mysql2 usando promises, que permite usar async/await (programação assíncrona)
const mysql = require('mysql2/promise');

// Cria as conexões com o banco de dados
const conexao = mysql.createPool({
  host: 'localhost',     // endereço do servidor MySQL
  user: 'root',         // usuário do banco
  password: 'sua_senha', // senha (deve ser alterada para a sua senha)
  database: 'escola'    // nome do banco de dados
});

// Exporta a variável (conexão)
module.exports = conexao;