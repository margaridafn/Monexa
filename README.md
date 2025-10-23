# 🛢️ Monexa — Sistema Web de Monitorização de Tanques

## Descrição
O **Monexa** é uma aplicação web **multi-cliente** para **monitorização de tanques de combustível e gestão de estações**, com integração à **API BSMART** e exportação automática de dados para o **FPI.Net**.  
O sistema foi desenvolvido com foco na **centralização de informação**, **envio automatizado de relatórios** e **visualização em tempo real** dos níveis de tanques.

---

## Objetivos do Projeto
- Desenvolver uma aplicação web modular e escalável.  
- Permitir autenticação separada de clientes e administradores.  
- Implementar dashboards dinâmicos com visualização de dados de tanques.  
- Configurar envio automático de relatórios por email.  
- Preparar integração com **API REST (BSMART → FPI.Net)**.  

---

## Planeamento e Análise Técnica

### Objetivo
Compreender o fluxo de dados e definir a arquitetura da integração entre os sistemas.


### Principais tarefas
- Identificação dos endpoints de exportação de **abastecimentos** e **níveis de tanques**.  
- Verificação do método de autenticação (API Key, Token ou OAuth).  
- Validação do formato de exportação (JSON / CSV / XML).  
- Mapeamento da estrutura de dados necessária no **FPI.Net**.  
- Definição do formato de integração (push ou pull).  
- Mapeamento das entidades principais:
  - Cliente  
  - Estação  
  - Tanque  
  - Leitura  
  - Configuração de envio de email  

### Entregáveis
- Documento de arquitetura técnica  
- Diagrama de fluxo de dados (**BSMART → Base Local → FPI.Net**)

---

## Diagrama de Fluxo de Dados

BSMART (API)
↓
Monexa (Camada de Integração)
├─ Ingestão de dados (Pull ou Push)
├─ Normalização e persistência em BD local
├─ Aplicação de regras (alertas, níveis críticos)
└─ Envio de relatórios automáticos por email
↓
FPI.Net (Destino final)


---

## Design da Aplicação Web

### Estrutura das Páginas

#### Login / Autenticação
- Acesso diferenciado para **clientes** e **administradores**.  
- Redirecionamento automático consoante o perfil.  
- Autenticação local (simulada) com futura integração JWT.

#### Página do Cliente
- Dados gerais (nome, morada, NIF, contactos).  
- Configuração de envio automático de relatórios:
  - Emails principais e secundários.  
  - Periodicidade (diária, semanal, mensal).  
  - Hora de envio.  
- Dashboard pós-login com:
  - Lista lateral de estações.  
  - Gráfico dinâmico de níveis dos tanques (Chart.js).  
  - Atualização automática ao selecionar uma estação.  

#### Página de Estações
- Listagem de todas as estações associadas ao cliente.  
- Informação por estação:
  - Nome, morada, contacto e link DYNDNS.  

#### Página de Tanques
- Visualização dos **4 tanques fixos por estação**.  
- Campos configuráveis:
  - Nome, produto, capacidade, nível de aviso e nível baixo.  

#### Página de Monitorização
- Exibição da **última leitura** e do **histórico de níveis**.  
- Gráfico de variação de níveis (Chart.js).  
- Logs de envio de email e alertas.  

#### Página de Administração
- Painel master para gestão global:
  - Gestão de clientes.  
  - Estações e tanques globais.  
  - Logs e configurações do sistema.  

---

## Estrutura de Diretórios

bsmart-db-setup/
├── node_modules/
├── routes/
│ ├── clientes.js
│ ├── estacoes.js
│ ├── leituras.js
│ ├── logs.js
│ ├── tanques.js
│ ├── createDatabase.js
│ ├── db.js
│ ├── insertSampleData.js
│ ├── server.js
│ └── setupTables.js
├── package.json
└── package-lock.json

bsmart-web/
├── css/
│ ├── admin_clientes.css
│ ├── admin_config.css
│ ├── admin_estacoes.css
│ ├── admin_logs.css
│ ├── admin.css
│ ├── cliente.css
│ ├── estacoes.css
│ ├── login.css
│ ├── monitorizacao.css
│ └── tanques.css
├── js/
│ ├── admin_clientes.js
│ ├── admin_config.js
│ ├── admin_estacoes.js
│ ├── admin_logs.js
│ ├── admin.js
│ ├── cliente.js
│ ├── estacoes.js
│ ├── login.js
│ ├── monitorizacao.js
│ └── tanques.js
├── admin_clientes.html
├── admin_config.html
├── admin_estacoes.html
├── admin_logs.html
├── admin.html
├── cliente.html
├── estacoes.html
├── login.html
├── monitorizacao.html
└── tanques.html

docs/
├── arquitetura_tecnica.md
├── design_aplicacao_web.md
├── entidades.md
├── estrutura_dados_fpi.md
├── estrutura_dados_bsmart.md
├── paineis_admin.md
└── planeamento.md

---

## Estrutura da Base de Dados

| Entidade | Descrição |
|-----------|------------|
| **Clientes** | Identificação e dados de contacto dos clientes. |
| **Estações** | Informação das estações associadas a cada cliente. |
| **Tanques** | Dados dos tanques (produto, capacidade, limites). |
| **Leituras** | Histórico de níveis e volumes. |
| **Logs** | Registo de eventos, envios e erros. |
| **Configurações de Email** | Definições de envio automático por cliente. |

---

## Documentação Incluída
Todos os ficheiros `.md` em `/docs` documentam o projeto:

- `planeamento.md` → Planeamento do sistema.  
- `arquitetura_tecnica.md` → Estrutura e fluxos técnicos.  
- `design_aplicacao_web.md` → Layout e estilo visual.  
- `paineis_admin.md` → Estrutura dos painéis administrativos.  
- `entidades.md` → Estrutura de dados.  
- `estrutura_dados_bsmart.md` → Mapeamento dos dados da API BSMART.  

---

## Tecnologias Utilizadas
- **Frontend:** HTML, CSS, JavaScript  
- **Gráficos:** Chart.js  
- **Backend:** Node.js / Express  
- **Base de Dados:** MySQL / PostgreSQL  
- **Integração:** API BSMART  
- **Envio de Emails:** Nodemailer  
- **Autenticação:** JWT (planeada)  

---

## Estado do Projeto
| Fase | Estado |
|------|--------|
| Estrutura inicial e layout | Concluído |
| Frontend funcional completo | Concluído |
| Dashboard pós-login | Concluído |
| Integração API (simulada) | Em preparação |

---

## Identidade Técnica
- **Paleta de cores:** Azul escuro `#003366`, branco e cinza claro.  
- **Tipografia:** Segoe UI.  
- **Layout:** Modular, responsivo e funcional.  
- **CSS:** Um ficheiro dedicado por página.  

---

## Instalação e Execução

### Pré-requisitos
Antes de começar, garante que tens instalados:
- [Node.js](https://nodejs.org/) (v16 ou superior)
- [MySQL](https://www.mysql.com/) ou [PostgreSQL](https://www.postgresql.org/)

### Passos de Instalação

1. **Clonar o repositório**
  
   git clone https://github.com/teu-username/monexa.git
   cd monexa
Instalar dependências

cd bsmart-db-setup
npm install
Configurar a Base de Dados

Cria uma base de dados (ex: monexa_db) no MySQL ou PostgreSQL.

Atualiza o ficheiro db.js com as tuas credenciais locais.

Executa:

node routes/setupTables.js
node routes/insertSampleData.js
Iniciar o servidor

node routes/server.js
Aceder à aplicação

Abre o navegador e entra em:
http://localhost:3000/login.html

Licença
Este projeto foi desenvolvido para fins académicos e demonstração técnica.
© 2025 — Monexa.

