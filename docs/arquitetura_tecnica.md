# Documento de Arquitetura Técnica

## Objetivo
Descrever a estrutura técnica da integração entre BSMART, Base Local e FPI.Net.

---

## Componentes do Sistema

### 1. API BSMART
- Fonte de dados de abastecimentos e níveis de tanques
- Acesso via API REST com autenticação por API Key
- Formato de dados: JSON

### 2. Base Local
- Banco de dados PostgreSQL
- Armazena clientes, estações, tanques, leituras e configurações
- Normaliza os dados recebidos da API BSMART

### 3. Aplicação Web
- Frontend: React + Tailwind
- Backend: Node.js (Express ou NestJS)
- Autenticação via JWT
- Interface para gestão de clientes, estações, tanques e configurações de envio

### 4. Módulo de Integração BSMART
- Serviço em background (cron job)
- Recolhe dados da API BSMART a cada 30 minutos
- Guarda os dados na base local
- Regista logs de execução

### 5. Módulo de Exportação FPI.Net
- Exporta dados normalizados para o FPI.Net
- Formato: CSV ou JSON (a confirmar)
- Envio por email ou API REST
- Frequência definida por cliente

### 6. Serviço de Notificações
- Envia alertas e relatórios por email
- Templates HTML personalizados por cliente
- SMTP configurável

---

## Fluxo de Dados

```plaintext
[API BSMART] → [Módulo de Integração] → [Base Local] → [Exportador FPI.Net] → [FPI.Net]
```
## Segurança
- Autenticação na API BSMART via API Key
- Autenticação na aplicação via JWT
- Envio de emails via SMTP seguro

## Logs e Monitorização
- Logs de integração e envio de emails
- Monitorização de uptime e falhas
- Backup periódico da base de dados

## Backend Express – Arquitetura Técnica

O backend foi desenvolvido com Node.js e Express, utilizando o driver `msnodesqlv8` para ligação ao SQL Server com autenticação Windows.

### Estrutura de pastas

bsmart-db-setup/ 
├── db.js               # Configuração da ligação à base de dados 
├── server.js           # Servidor Express principal 
├── routes/             # Rotas REST por entidade 
│   
├── clientes.js 
│   
├── estacoes.js 
│   
├── tanques.js 
│   
├── leituras.js 
│   
└── logs.js

### Tecnologias utilizadas

- Node.js v22
- Express
- mssql + msnodesqlv8
- SQL Server 2022