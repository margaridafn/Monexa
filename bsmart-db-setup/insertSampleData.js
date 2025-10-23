const sql = require('mssql/msnodesqlv8');
const util = require('util');

const config = {
  server: 'M_HP\\SQL_2022_MONITOR',
  database: 'BSmartDB',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true
  }
};

const insertScript = `
-- Inserir Cliente
INSERT INTO Clientes (Nome, Morada, NIF, Contacto1, Contacto2, EmailEnvio1, EmailEnvio2, PeriodicidadeEnvio, HoraEnvio)
VALUES ('EcoFuel Lda', 'Rua das Energias, 123', '509876321', '912345678', '918765432', 'envios@ecofuel.pt', 'backup@ecofuel.pt', 'Diária', '08:00');

-- Inserir Estação
INSERT INTO Estacoes (ClienteId, Nome, Morada, ContactoResponsavel, LinkDYNDNS)
VALUES (1, 'Estação Norte', 'Parque Industrial, Lote 5', 'João Silva - 913456789', 'http://dyn.ecofuel.pt/norte');

-- Inserir Tanque
INSERT INTO Tanques (EstacaoId, Nome, Produto, CapacidadeTotal, NivelAviso, NivelBaixo)
VALUES (1, 'Tanque A', 'Gasóleo', 10000, 3000, 1000);

-- Inserir Leituras
INSERT INTO Leituras (TanqueId, DataHora, Nivel)
VALUES 
(1, '2025-10-21 08:00', 8500),
(1, '2025-10-22 08:00', 7900);

-- Inserir Log de envio
INSERT INTO LogsEnvioEmail (ClienteId, DataHora, Status, Destinatarios)
VALUES (1, '2025-10-22 08:05', 'Enviado', 'envios@ecofuel.pt;backup@ecofuel.pt');
`;

async function insertSampleData() {
  try {
    const pool = await sql.connect(config);
    await pool.request().batch(insertScript);
    console.log('Dados de exemplo inseridos com sucesso.');
    sql.close();
  } catch (err) {
    console.error('Erro ao inserir dados:', util.inspect(err, { depth: null }));
    sql.close();
  }
}

insertSampleData();