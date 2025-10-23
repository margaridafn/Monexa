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

const setupScript = `
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Clientes' AND xtype='U')
BEGIN
  CREATE TABLE Clientes (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Nome NVARCHAR(100),
    Morada NVARCHAR(255),
    NIF NVARCHAR(20),
    Contacto1 NVARCHAR(50),
    Contacto2 NVARCHAR(50),
    EmailEnvio1 NVARCHAR(100),
    EmailEnvio2 NVARCHAR(100),
    PeriodicidadeEnvio NVARCHAR(20),
    HoraEnvio TIME
  );
END;

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Estacoes' AND xtype='U')
BEGIN
  CREATE TABLE Estacoes (
    Id INT PRIMARY KEY IDENTITY(1,1),
    ClienteId INT,
    Nome NVARCHAR(100),
    Morada NVARCHAR(255),
    ContactoResponsavel NVARCHAR(100),
    LinkDYNDNS NVARCHAR(255),
    FOREIGN KEY (ClienteId) REFERENCES Clientes(Id)
  );
END;

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Tanques' AND xtype='U')
BEGIN
  CREATE TABLE Tanques (
    Id INT PRIMARY KEY IDENTITY(1,1),
    EstacaoId INT,
    Nome NVARCHAR(50),
    Produto NVARCHAR(100),
    CapacidadeTotal FLOAT,
    NivelAviso FLOAT,
    NivelBaixo FLOAT,
    FOREIGN KEY (EstacaoId) REFERENCES Estacoes(Id)
  );
END;

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Leituras' AND xtype='U')
BEGIN
  CREATE TABLE Leituras (
    Id INT PRIMARY KEY IDENTITY(1,1),
    TanqueId INT,
    DataHora DATETIME,
    Nivel FLOAT,
    FOREIGN KEY (TanqueId) REFERENCES Tanques(Id)
  );
END;

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='LogsEnvioEmail' AND xtype='U')
BEGIN
  CREATE TABLE LogsEnvioEmail (
    Id INT PRIMARY KEY IDENTITY(1,1),
    ClienteId INT,
    DataHora DATETIME,
    Status NVARCHAR(50),
    Destinatarios NVARCHAR(MAX),
    FOREIGN KEY (ClienteId) REFERENCES Clientes(Id)
  );
END;
`;

async function setupTables() {
  try {
    const pool = await sql.connect(config);
    await pool.request().batch(setupScript);
    console.log('Tabelas criadas com sucesso (se ainda não existiam).');
    sql.close();
  } catch (err) {
    console.error('Erro ao criar as tabelas:', util.inspect(err, { depth: null }));
    sql.close();
  }
}

setupTables();