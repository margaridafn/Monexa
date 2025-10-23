const express = require('express');
const router = express.Router();
const { sql, poolPromise } = require('../db');

router.get('/', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query(`
      SELECT L.*, T.Nome AS TanqueNome
      FROM Leituras L
      JOIN Tanques T ON L.TanqueId = T.Id
    `);
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send('Erro ao obter leituras: ' + err.message);
  }
});

module.exports = router;