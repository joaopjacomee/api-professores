// importa a conexão com o banco de dados
const conexao = require('../database/conexao');

// função responsável por listar todos os professores cadastrados
const listarProfessores = async () => {

  // define o comando sql para consultar todos os registros
  const sql = 'SELECT * FROM professores';

  // executa a consulta no banco de dados
  const [rows] = await conexao.execute(sql);

  // retorna os registros encontrados
  return rows;
};

// função responsável por buscar um professor pelo id
const buscarProfPorId = async (id) => {

  // define o comando sql utilizando parâmetro para maior segurança
  const sql = 'SELECT * FROM professores WHERE id = ?';

  // executa a consulta passando o id informado
  const [rows] = await conexao.execute(sql, [id]);

  // retorna apenas o primeiro resultado encontrado
  return rows[0];
};

// função responsável por cadastrar um novo professor
const cadastrarProfessor = async (professor) => {

  // extrai os atributos do objeto recebido
  const { nome, disciplina, email, salario } = professor;

  // define o comando sql para inserção dos dados
  const sql = 'INSERT INTO professores (nome, disciplina, email, salario) VALUES (?, ?, ?, ?)';

  // executa a inserção no banco de dados
  const [resultado] = await conexao.execute(sql, [nome, disciplina, email, salario]);

  // retorna o id do registro inserido
  return resultado.insertId;
};

// função responsável por atualizar os dados de um professor
const atualizarProfessor = async (id, professor) => {

  // extrai os novos dados do objeto recebido
  const { nome, disciplina, email, salario } = professor;

  // define o comando sql de atualização
  const sql = 'UPDATE professores SET nome = ?, disciplina = ?, email = ?, salario = ? WHERE id = ?';

  // executa a atualização dos dados no banco
  const [resultado] = await conexao.execute(sql, [nome, disciplina, email, salario, id]);

  // retorna o resultado da operação
  return resultado;
};

// função responsável por remover um professor pelo id
const deletarProfessor = async (id) => {

  // define o comando sql para exclusão do registro
  const sql = 'DELETE FROM professores WHERE id = ?';

  // executa a exclusão no banco de dados
  const [resultado] = await conexao.execute(sql, [id]);

  // retorna o resultado da operação
  return resultado;
};

// exporta todas as funções para utilização em outros arquivos
module.exports = {
  listarProfessores,
  buscarProfPorId,
  cadastrarProfessor,
  atualizarProfessor,
  deletarProfessor
};