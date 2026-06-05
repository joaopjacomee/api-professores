// Importa Express para utilizar o Router e definir as rotas
const express = require('express')

// Importa o controller
const professorController = require('../controllers/professorController');

// Cria uma instância do Router (roteador)
const router = express.Router();

// Rota GET /professores -> usada para listar todos os professores
router.get('/', professorController.listarProfessores);

// Rota GET /professores/:id -> realiza a busca de professor por ID
router.get('/:id', professorController.buscarProfPorId);

// Rota POST /professores -> cadastra um novo professor
router.post('/', professorController.cadastrarProfessor);

// Rota PUT /professores/:id -> atualiza professor por ID
router.put('/:id', professorController.atualizarProfessor);

// Rota DELETE /professores/:id  -> remove professor por ID
router.delete('/:id', professorController.deletarProfessor);

// Exporta as rotas para serem usadas no app.js
module.exports = router;