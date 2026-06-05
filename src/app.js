// Importa o Express para criar a aplicação
const express = require('express');

// Cria a aplicação
const app = express();

// Importa as rotas do professor
const professorRoutes = require('./routes/professorRoutes');

// Middleware para interpretar o corpo das requisições em formato JSON
app.use(express.json());

// Define o prefixo /professores para todas as rotas do professor
app.use('/professores',professorRoutes);

// Exporta a aplicação
module.exports = app;
