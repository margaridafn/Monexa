const sql = require('mssql/msnodesqlv8');

const config = {
  server: 'M_HP\\SQL_2022_MONITOR',
  database: 'BSmartDB',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true
  }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('🟢 Ligação à base de dados estabelecida');
    return pool;
  })
  .catch(err => {
    console.error('🔴 Erro na ligação à base de dados:', err);
  });

module.exports = {
  sql, poolPromise
};