# Painéis Administrativos

Este módulo reúne os quatro painéis técnicos dedicados à administração do sistema: Clientes, Configuração, Estações e Logs. Cada painel possui estrutura modular, estilo técnico isolado e integração com a navegação principal.

---

## 1. Painel de Clientes

### Funcionalidades
- Criação, edição e remoção de clientes
- Atribuição de parâmetros técnicos por cliente
- Visualização de estado e última atividade
- Validação de campos obrigatórios e formatos

### Arquitetura
- **HTML**: `admin_clientes.html`
- **CSS**: `admin_clientes.css`
- **JS**: `admin_clientes.js`

### Navegação
- Acesso via menu lateral
- Retorno ao painel principal com preservação de estado
- Integração com `admin.js` para consistência de navegação

### Considerações
- Cada cliente é tratado como instância isolada
- Operações autenticadas via API RESTful
- Estilo técnico modular e reutilizável

---

## 2. Painel de Configuração

### Funcionalidades
- Definições globais e por cliente
- Validação dinâmica de campos
- Histórico com autor e timestamp
- Exportação/importação de configurações

### Arquitetura
- **HTML**: `admin_config.html`
- **CSS**: `admin_config.css`
- **JS**: `admin_config.js`

### Navegação
- Acesso via menu lateral
- Retorno ao painel anterior com estado preservado
- Integração com `admin.js` para navegação unificada

### Considerações
- Persistência via API RESTful autenticada
- Preparado para expansão modular
- Estilo técnico dedicado e isolado

---

## 3. Painel de Estações

### Funcionalidades
- Criação, edição e remoção de estações
- Associação a cliente e tipo de estação
- Visualização de estado operacional
- Validação de parâmetros técnicos

### Arquitetura
- **HTML**: `admin_estacoes.html`
- **CSS**: `admin_estacoes.css`
- **JS**: `admin_estacoes.js`

### Navegação
- Acesso via menu lateral
- Retorno ao painel principal com estado preservado
- Integração com `admin.js` para navegação consistente

### Considerações
- Cada estação é ligada a um cliente específico
- Operações autenticadas e rastreáveis
- Estilo técnico modular e claro

---

## 4. Painel de Logs

### Funcionalidades
- Visualização de logs por cliente, estação ou tipo
- Filtros por data, severidade e origem
- Exportação para análise externa
- Identificação de eventos críticos

### Arquitetura
- **HTML**: `admin_logs.html`
- **CSS**: `admin_logs.css`
- **JS**: `admin_logs.js`

### Navegação
- Acesso via menu lateral
- Retorno ao painel anterior com estado preservado
- Integração com `admin.js` para navegação fluida

### Considerações
- Logs são obtidos via API com autenticação
- Filtros aplicados no frontend para performance
- Estilo técnico focado em legibilidade e contraste