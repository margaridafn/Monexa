# Entidades Principais

## Cliente
- id
- nome
- morada
- NIF
- contacto
- emails_destino
- periodicidade_envio
- hora_envio

## Estação
- id
- cliente_id (FK)
- nome
- morada
- contacto_responsavel
- link_dyndns

## Tanque
- id
- estacao_id (FK)
- nome
- produto
- capacidade_total
- nivel_aviso
- nivel_baixo

## Leitura
- id
- tanque_id (FK)
- data_hora
- nivel
- tipo (normal, aviso, baixo, reabastecimento)

## Configuração de Envio
- cliente_id (FK)
- emails_destino
- periodicidade
- hora_envio
- último_envio

## API REST – Entidades e Endpoints

Cada entidade da base de dados tem um endpoint REST associado:

| Entidade         | Endpoint               | Método | Descrição                                   |
|------------------|------------------------|--------|---------------------------------------------|
| Clientes         | `/clientes`            | GET    | Lista todos os clientes                     |
| Estações         | `/estacoes`            | GET    | Lista todas as estações com nome do cliente |
| Tanques          | `/tanques`             | GET    | Lista todos os tanques com nome da estação  |
| Leituras         | `/leituras`            | GET    | Lista todas as leituras com nome do tanque  |
| LogsEnvioEmail   | `/logs`                | GET    | Lista todos os logs com nome do cliente     |

Cada rota devolve um array de objetos em JSON, com os campos correspondentes à estrutura da base de dados.