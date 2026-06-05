-- Cria banco de dados
CREATE DATABASE escola;

-- Seleciona o banco de dados "escola" para usar
USE escola;

-- Cria a tabela professores com seus campos obrigatórios
CREATE TABLE professores (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
disciplina VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
salario DECIMAL(10,2) NOT NULL
);