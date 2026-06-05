// importa a biblioteca mysql2 com suporte a promises para utilização de async/await
const mysql = require('mysql2/promise');

// cria um pool de conexões com o banco de dados
const conexao = mysql.createPool({
  host: 'localhost', // endereço do servidor mysql
  user: 'root', // usuário utilizado para acesso ao banco
  password: 'sua_senha', // senha de autenticação do banco
  database: 'escola' // nome da base de dados utilizada
});

// exporta o pool de conexões para ser utilizado em outros arquivos
module.exports = conexao;