document.addEventListener('DOMContentLoaded', () => {
  const tabela = document.getElementById('tabelaEstacoes');

  const estacoes = [
    {
      cliente: 'EcoFuel Lda',
      nome: 'Estação Norte',
      morada: 'Rua das Bombas, 123',
      responsavel: 'Carlos Silva',
      dyndns: 'dyn.ecofuel.pt/norte'
    },
    {
      cliente: 'PetroLogix SA',
      nome: 'Estação Sul',
      morada: 'Av. dos Tanques, 456',
      responsavel: 'Ana Costa',
      dyndns: 'dyn.petrologix.com/sul'
    }
  ];

  estacoes.forEach(estacao => {
    const linha = document.createElement('tr');
    linha.innerHTML = `
      <td>${estacao.cliente}</td>
      <td>${estacao.nome}</td>
      <td>${estacao.morada}</td>
      <td>${estacao.responsavel}</td>
      <td><a href="http://${estacao.dyndns}" target="_blank">${estacao.dyndns}</a></td>
    `;
    tabela.appendChild(linha);
  });
});