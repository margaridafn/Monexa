const sql = require('mssql/msnodesqlv8');
const util = require('util');

const config = {
  server: 'M_HP\\SQL_2022_MONITOR',
  database: 'master',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true
  }
};

const script = `
CREATE DATABASE BSmartDB;
`;


async function createDatabase() {
  try {
    const pool = await sql.connect(config);
    await pool.request().batch(script);
    console.log('Base de dados criada com sucesso (se ainda não existia).');
    sql.close();
  } catch (err) {
    console.error('Erro ao criar a base de dados:', util.inspect(err, { depth: null }));
    sql.close();
  }
}

createDatabase();