// importa o model responsável pelas operações relacionadas aos professors
const professorModel = require('../models/professorModel');

// controller responsável por listar todos os professors cadastrados
const listarprofessors = async (req, res) => {
  try {
    // busca todos os professors no banco de dados
    const listaprofessors = await professorModel.listarProfessores();

    // retorna a lista em formato json
    res.json(listaprofessors);
  } catch (err) {
    // retorna mensagem de erro caso a operação falhe
    res.json({
      mensagem: 'Erro ao listar professores',
      erro: err.message
    });
  }
};

// controller responsável por buscar um professor pelo id
const buscarprofessorPorId = async (req, res) => {
  try {
    // obtém o identificador enviado pela rota
    const { id } = req.params;

    // realiza a busca do professor
    const professorEncontrado = await professorModel.buscarProfPorId(id);

    // verifica se o professor foi localizado
    if (!professorEncontrado) {
      return res.status(404).json({
        mensagem: 'Professor não encontrado'
      });
    }

    // retorna os dados encontrados
    res.json(professorEncontrado);
  } catch (err) {
    // trata possíveis erros da operação
    res.json({
      mensagem: 'Erro ao buscar professor',
      erro: err.message
    });
  }
};

// controller responsável pelo cadastro de novos professors
const cadastrarprofessor = async (req, res) => {
  try {
    // extrai os dados enviados no corpo da requisição
    const { nome, disciplina, email, salario } = req.body;

    // valida se todos os campos obrigatórios foram preenchidos
    if (!nome || !disciplina || !email || !salario) {
      return res.status(400).json({
        mensagem: 'Todos os campos são obrigatórios'
      });
    }

    // monta o objeto com os dados do professor
    const novoprofessor = {
      nome,
      disciplina,
      email,
      salario
    };

    // envia os dados para o model realizar o cadastro
    await professorModel.cadastrarProfessor(novoprofessor);

    // retorna confirmação da operação
    res.status(201).json({
      mensagem: 'Professor cadastrado com sucesso'
    });
  } catch (err) {
    // trata possíveis erros durante o cadastro
    res.json({
      mensagem: 'Erro ao cadastrar professor',
      erro: err.message
    });
  }
};

// controller responsável por atualizar os dados de um professor
const atualizarprofessor = async (req, res) => {
  try {
    // obtém o id informado na rota
    const { id } = req.params;

    // captura os novos dados enviados na requisição
    const { nome, disciplina, email, salario } = req.body;

    // verifica previamente se o professor existe
    const registroExistente = await professorModel.buscarProfPorId(id);

    if (!registroExistente) {
      return res.json({
        mensagem: 'Professor não encontrado'
      });
    }

    // cria o objeto contendo os dados atualizados
    const dadosAtualizados = {
      nome,
      disciplina,
      email,
      salario
    };

    // envia os dados para atualização
    await professorModel.atualizarProfessor(id, dadosAtualizados);

    // retorna mensagem de sucesso
    res.json({
      mensagem: 'Professor atualizado com sucesso'
    });
  } catch (err) {
    // trata possíveis erros da atualização
    res.json({
      mensagem: 'Erro ao atualizar professor',
      erro: err.message
    });
  }
};

// controller responsável por remover um professor
const removerprofessor = async (req, res) => {
  try {
    // captura o id informado na url
    const { id } = req.params;

    // verifica se o professor existe antes da remoção
    const professorLocalizado = await professorModel.buscarProfPorId(id);

    if (!professorLocalizado) {
      return res.json({
        mensagem: 'Professor não encontrado'
      });
    }

    // realiza a exclusão do registro
    await professorModel.deletarProfessor(id);

    // retorna confirmação da exclusão
    res.json({
      mensagem: 'Professor deletado com sucesso'
    });
  } catch (err) {
    // trata possíveis erros da exclusão
    res.json({
      mensagem: 'Erro ao deletar professor',
      erro: err.message
    });
  }
};

// exporta todas as funções para utilização nas rotas da aplicação
module.exports = {
  listarprofessors,
  buscarprofessorPorId,
  cadastrarprofessor,
  atualizarprofessor,
  removerprofessor
};