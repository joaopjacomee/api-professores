// importa o framework express para criação da aplicação web
const express = require('express');

// cria a instância principal da aplicação
const app = express();

// importa o arquivo responsável pelas rotas de professores
const professorRoutes = require('./routes/professorRoutes');

// middleware utilizado para interpretar requisições no formato json
app.use(express.json());

// associa as rotas de professores ao prefixo '/professores'
app.use('/professores', professorRoutes);

// exporta a aplicação para utilização em outros arquivos
module.exports = app;