document.addEventListener('DOMContentLoaded', () => {
  const tabela = document.getElementById('tabelaClientes');

  const clientes = [
    {
      nome: 'EcoFuel Lda',
      nif: '509876321',
      email: 'contato@ecofuel.pt',
      periodicidade: 'Diária'
    },
    {
      nome: 'PetroLogix SA',
      nif: '507654321',
      email: 'info@petrologix.com',
      periodicidade: 'Semanal'
    }
  ];

  clientes.forEach(cliente => {
    const linha = document.createElement('tr');
    linha.innerHTML = `
      <td>${cliente.nome}</td>
      <td>${cliente.nif}</td>
      <td>${cliente.email}</td>
      <td>${cliente.periodicidade}</td>
      <td><button onclick="editarCliente('${cliente.nif}')">Editar</button></td>
    `;
    tabela.appendChild(linha);
  });
});

function editarCliente(nif) {
  alert(`Função de edição para NIF: ${nif} (em desenvolvimento)`);
}