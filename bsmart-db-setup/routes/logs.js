const express = require('express');
const router = express.Router();
const { sql, poolPromise } = require('../db');

router.get('/', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query(`
      SELECT L.*, C.Nome AS ClienteNome
      FROM LogsEnvioEmail L
      JOIN Clientes C ON L.ClienteId = C.Id
    `);
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send('Erro ao obter logs de envio: ' + err.message);
  }
});

module.exports = router;