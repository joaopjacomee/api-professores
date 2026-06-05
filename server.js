// Importa a aplicação configurada no app.js
const app = require('./src/app');

// Define a porta do servidor
const PORTA = 3000;

// Inicia o servidor e exibe mensagem quando estiver tudo ok
app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});