const express = require('express');
const router = express.Router();
const { sql, poolPromise } = require('../db');

router.get('/', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query(`
      SELECT T.*, E.Nome AS EstacaoNome
      FROM Tanques T
      JOIN Estacoes E ON T.EstacaoId = E.Id
    `);
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send('Erro ao obter tanques: ' + err.message);
  }
});

module.exports = router;