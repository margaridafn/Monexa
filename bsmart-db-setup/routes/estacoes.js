const express = require('express');
const router = express.Router();
const { sql, poolPromise } = require('../db');

router.get('/', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query(`
      SELECT E.*, C.Nome AS ClienteNome
      FROM Estacoes E
      JOIN Clientes C ON E.ClienteId = C.Id
    `);
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send('Erro ao obter estações: ' + err.message);
  }
});

module.exports = router;