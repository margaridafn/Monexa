# Planeamento e Análise Técnica

## Objetivo
Integrar dados entre BSMART e FPI.Net, garantindo consistência e automatização.

## Fontes de Dados
- API BSMART: https://apibsmartexport.piusi.com/docs/index.html
- API DEMO SOSI: http://sosirele01.myddns.me:3000/

## Entidades Principais
- Cliente
- Estação
- Tanque
- Leitura
- Configuração de envio de email

## Formato de Integração
- Tipo: Pull (sistema recolhe dados da API BSMART)
- Frequência: Cada 30 minutos
- Formato de dados: JSON

## Formato de Integração

### BSMART → Base Local
- Tipo: Pull
- Frequência: Cada 30 minutos
- Método: API GET
- Justificação: A API BSMART não envia dados automaticamente, então o sistema deve buscar os dados.

### Base Local → FPI.Net
- Tipo: Push
- Frequência: Definida por cliente (diária, semanal, etc.)
- Método: Exportação por email ou API
- Justificação: O sistema envia os dados já normalizados para o FPI.Net conforme configuração do cliente.

## Próximos passos no backend

- [x] Criar base de dados e tabelas
- [x] Inserir dados de exemplo
- [x] Implementar API REST com Express
- [ ] Adicionar filtros por data, cliente ou estação
- [ ] Criar endpoints POST para inserção de dados
- [ ] Implementar autenticação (JWT ou API Key)
- [ ] Integrar com FPI.Net para envio automático