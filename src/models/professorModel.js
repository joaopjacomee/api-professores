// Importa a conexão com o banco de dados
const conexao = require('../database/conexao');

// Cria função para listar todos os professores
const listarProfessores = async () => {
  // Define a consulta (query) de seleção
  const sql = 'SELECT * FROM professores';

  // Executa a query de forma assíncrona
  const [rows] = await conexao.execute(sql);

  // Retorna os registros encontrados
  return rows;
};

// Cria função de busca por ID
const buscarProfPorId = async (id) => {
  // Define a query com parâmetro ? para evitar SQL injection
  const sql = 'SELECT * FROM professores WHERE id = ?';

  // Executa a query passando o id como parâmetro
  const [rows] = await conexao.execute(sql, [id]);

  // Retorna o primeiro registro encontrado
  return rows[0];
};

// Cria função para cadastrar um novo professor
const cadastrarProfessor = async (professor) => {
  // Desestrutura o objeto professor, coletando os atributos
  const { nome, disciplina, email, salario } = professor;

  // Define a query de inserção com parâmetros
  const sql = 'INSERT INTO professores (nome, disciplina, email, salario) VALUES (?, ?, ?, ?)';

  // Executa a inserção passando os valores como array
  const [resultado] = await conexao.execute(sql, [nome, disciplina, email, salario]);

  // Retorna o ID inserido como resultado da operação
  return resultado.insertId;
};

// Função para atualizar os dados de um professor
const atualizarProfessor = async (id, professor) => {
  //Pega os atributos de professor
  const  { nome, disciplina, email, salario } = professor

  // Query de atualização
  const sql = 'UPDATE professores SET nome = ?, disciplina = ?, email = ?, salario = ? WHERE id = ?';

  // Executa a atualização com os novos valores e o ID
  const [resultado] = await conexao.execute(sql, [nome, disciplina, email, salario, id]);

  // Retorna o resultado
  return resultado;
};

// Função para deletar um professor pelo ID
const deletarProfessor = async (id) => {
  // Query de exclusão
  const sql = 'DELETE FROM professores WHERE id = ?';

  // Executa a exclusão de forma assíncrona
  const [resultado] = await conexao.execute(sql, [id]);

  // Retorna o resultado
  return resultado;
};

// Exporta todas as funções do model
module.exports = { listarProfessores, buscarProfPorId, cadastrarProfessor, atualizarProfessor, deletarProfessor };