// importa a aplicação configurada no arquivo app.js
const app = require('./src/app');

// define a porta que será utilizada pelo servidor
const PORTA = 3000;

// inicia o servidor na porta definida
app.listen(PORTA, () => {
  // exibe uma mensagem no terminal informando que o servidor está ativo
  console.log(`Servidor rodando na porta ${PORTA}`);
});