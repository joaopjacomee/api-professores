// Importa o model de professor
const professorModel = require('../models/professorModel');

// Controller para listar todos os professores
const listarProfessores = async (req, res) => {
  try {
    // Chama o model para buscar todos os registros
    const professores = await professorModel.listarProfessores();

    // Retorna todos os professores em formato JSON
    res.json(professores);
  } catch (erro) {
    // Em caso de erro, retorna uma mensagem informando
    res.json({ mensagem: 'Erro ao listar professores', erro: erro.message });
  }
};

// Controller para buscar um professor pelo ID
const buscarProfPorId = async (req, res) => {
  try {
    // Captura o ID da URL
    const { id } = req.params;

    // Chama o model passando o ID
    const professor = await professorModel.buscarProfPorId(id);

    // Verifica se o professor existe
    if (!professor) {
      // Retorna o status 404 se o registro não for encontrado
      return res.status(404).json({ 
        mensagem: 'Professor não encontrado' 
      });
    }

    // Retorna o professor encontrado
    res.json(professor);
  } catch (erro) {
    // Se acontecer algum outro erro, vai informar uma mensagem
    res.json({ mensagem: 'Erro ao buscar professor', erro: erro.message });
  }
};

// Controller para cadastrar um novo professor
const cadastrarProfessor = async (req, res) => {
  try {
    // Obtém os dados do corpo da requisição
    const { nome, disciplina, email, salario } = req.body;

    // Valida se todos os campos obrigatórios foram enviados
    if (!nome || !disciplina || !email || !salario) {
      // Caso falte algum dado, retorna status 400
      return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
    }

    // Cria o objeto professor
    const professor = {
      nome,
      disciplina,
      email,
      salario
    }

    // Chama o model e salva o novo professor
    await professorModel.cadastrarProfessor(professor);

    // Retorna resposta com status 201
    res.status(201).json({ mensagem: 'Professor cadastrado com sucesso' });
  } catch (erro) {
    // Em caso de algum erro, retorna uma mensagem informando
    res.json({ mensagem: 'Erro ao cadastrar professor', erro: erro.message });
  }
};

// Controller para atualizar os dados de um professor
const atualizarProfessor = async (req, res) => {
  try {
    // Captura o ID da URL
    const { id } = req.params;

    // Pega os dados do corpo da requisição
    const { nome, disciplina, email, salario } = req.body;

    // Verifica se o professor existe antes de atualizar
    const professorExiste = await professorModel.buscarProfPorId(id);
    if (!professorExiste) {
      return res.json({ mensagem: 'Professor não encontrado' });
    }

    // Cria objeto
    const professor = {
      nome,
      disciplina,
      email,
      salario
    }

    // Chama o model para atualizar o registro
    await professorModel.atualizarProfessor(id, professor);

    // Retorna resposta da operação
    res.json({ mensagem: 'Professor atualizado com sucesso' });
  } catch (erro) {
    // Se não foi possível atualizar, informa o erro
    res.json({ mensagem: 'Erro ao atualizar professor', erro: erro.message });
  }
};

// Controller para remover um professor
const deletarProfessor = async (req, res) => {
  try {
    // Pega o ID da URL
    const { id } = req.params;

    // Verifica se o professor existe antes de deletar
    const professorExiste = await professorModel.buscarProfPorId(id);
    if (!professorExiste) {
      return res.json({ mensagem: 'Professor não encontrado' });
    }

    // Chama o model para deletar o registro
    await professorModel.deletarProfessor(id);

    // Retorna a resposta
    res.json({ mensagem: 'Professor deletado com sucesso' });
  } catch (erro) {
    // Caso a operação tenha dado errado, informa mensagem
    res.json({ mensagem: 'Erro ao deletar professor', erro: erro.message });
  }
};

// Exporta todas as funções para serem usadas nas rotas
module.exports = { listarProfessores, buscarProfPorId, cadastrarProfessor, atualizarProfessor, deletarProfessor };