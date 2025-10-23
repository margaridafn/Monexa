const express = require('express');
const app = express();
const port = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Importar e usar rotas
app.use('/clientes', require('./routes/clientes'));
app.use('/estacoes', require('./routes/estacoes'));
app.use('/tanques', require('./routes/tanques'));
app.use('/leituras', require('./routes/leituras'));
app.use('/logs', require('./routes/logs'));

// Rota base
app.get('/', (req, res) => {
  res.send('🚀 API BSMART está ativa!');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`🟢 Servidor a correr em http://localhost:${port}`);
});