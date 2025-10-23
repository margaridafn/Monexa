# Documentação Técnica – Fase 2: Design da Aplicação Web

## Objetivo da Fase

Desenvolver o frontend funcional da aplicação web multi-cliente, com navegação entre páginas, estilo técnico alinhado com a identidade da ECL, e integração futura com a API REST.

---

## Estrutura de Páginas

| Página               | Descrição                                                                 |
|----------------------|---------------------------------------------------------------------------|
| `login.html`         | Autenticação por cliente ou administrador                                 |
| `cliente.html`       | Painel principal com dados gerais e configuração de envio                 |
| `estacoes.html`      | Lista de estações associadas ao cliente                                   |
| `tanques.html`       | Visualização dos 4 tanques fixos por estação                              |
| `monitorizacao.html` | Leitura dos níveis, histórico, gráficos e logs de envio de email          |
| `admin.html`         | Painel do administrador com navegação dinâmica entre secções              |

---

## Estilo Visual

- Cada página tem seu próprio ficheiro CSS dedicado:
  - `css/login.css`
  - `css/cliente.css`
  - `css/estacoes.css`
  - `css/tanques.css`
  - `css/monitorizacao.css`
  - `css/admin.css`
- Paleta de cores: azul escuro (`#003366`), branco, cinza claro
- Tipografia: Segoe UI (ou Arial como fallback)
- Layout técnico, funcional e responsivo

---

## Autenticação

- Simulação inicial via `js/login.js`
- Redirecionamento para `cliente.html` ou `admin.html` conforme credenciais
- Integração futura com API de autenticação via JWT ou sessão

```js
if (user === 'admin' && pass === 'admin123') {
  window.location.href = 'admin.html';
} else {
  window.location.href = 'cliente.html';
}
```

---

## Componentes Funcionais

### Cliente
- Nome, morada, NIF, contactos
- Emails de envio automático
- Periodicidade e hora de envio

### Estações
- Nome da estação
- Morada
- Contacto do responsável
- Link DYNDNS

### Tanques
- Nome do tanque
- Produto armazenado
- Capacidade total
- Nível de aviso
- Nível baixo

### Monitorização
- Última leitura por tanque
- Histórico de leituras
- Gráfico visual (Chart.js)
- Logs de envio de email

### Admin Master

- Navegação dinâmica entre secções:
  - Gestão de clientes
  - Visualização global de estações
  - Logs globais
  - Configurações do sistema
- Conteúdo gerado dinamicamente via `js/admin.js`


---

## Navegação

- Cada página inclui `<nav>` com:
  - Link para `cliente.html` (voltar ao painel)
  - Link para `login.html` (sair)
- `cliente.html` funciona como hub principal com botões para:
  - Estações
  - Tanques
  - Monitorização
- `admin.html` inclui navegação interna dinâmica entre secções

---

## Estrutura de Diretórios

bsmart-web/ 
├── login.html 
├── cliente.html 
├── estacoes.html 
├── tanques.html 
├── monitorizacao.html 
├── admin.html
├── css/ 
│   
├── login.css 
│   
├── cliente.css 
│   
├── estacoes.css 
│   
├── tanques.css 
│   
|── monitorizacao.css 
└── admin.css
├── js/ 
│   
├── login.js 
│   
├── cliente.js 
│   
├── estacoes.js 
│   
├── tanques.js 
│   
|── monitorizacao.js 
└── admin.js
├── docs/ 
│   
└── design_aplicacao_web.md
