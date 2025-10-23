# Estrutura de Dados BSMART

## Abastecimentos (refueling)
- stationId: número da estação
- tankId: número do tanque
- product: tipo de combustível
- volume: litros abastecidos
- timestamp: data/hora do abastecimento

## Níveis de Tanques (tank-levels)
- stationId: número da estação
- tankId: número do tanque
- level: nível atual (litros ou %)
- capacity: capacidade total do tanque
- timestamp: data/hora da leitura

## Estações
- stationId: identificador único
- name: nome da estação
- address: morada
- contact: contacto do responsável

## Produtos
- productId: identificador
- name: nome do produto (ex: Gasóleo, AdBlue)