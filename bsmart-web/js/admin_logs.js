document.addEventListener('DOMContentLoaded', () => {
  const tabela = document.getElementById('tabelaLogs');

  const logs = [
    {
      data: '2025-10-22',
      cliente: 'EcoFuel Lda',
      email: 'contato@ecofuel.pt',
      status: 'OK',
      mensagem: 'Email enviado com sucesso.'
    },
    {
      data: '2025-10-21',
      cliente: 'PetroLogix SA',
      email: 'info@petrologix.com',
      status: 'Falha',
      mensagem: 'Servidor não respondeu.'
    }
  ];

  logs.forEach(log => {
    const linha = document.createElement('tr');
    linha.innerHTML = `
      <td>${log.data}</td>
      <td>${log.cliente}</td>
      <td>${log.email}</td>
      <td class="${log.status === 'OK' ? 'status-ok' : 'status-fail'}">${log.status}</td>
      <td>${log.mensagem}</td>
    `;
    tabela.appendChild(linha);
  });
});