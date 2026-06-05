// importa o framework express para criação e gerenciamento das rotas
const express = require('express');

// importa o controller responsável pelas regras de negócio dos professores
const professorController = require('../controllers/professorController');

// cria uma instância do roteador do express
const router = express.Router();

// rota responsável por listar todos os professores cadastrados
router.get('/', professorController.listarProfessores);

// rota responsável por buscar um professor específico pelo id
router.get('/:id', professorController.buscarProfPorId);

// rota responsável por cadastrar um novo professor
router.post('/', professorController.cadastrarProfessor);

// rota responsável por atualizar os dados de um professor pelo id
router.put('/:id', professorController.atualizarProfessor);

// rota responsável por remover um professor pelo id
router.delete('/:id', professorController.deletarProfessor);

// exporta o roteador para utilização no arquivo principal da aplicação
module.exports = router;