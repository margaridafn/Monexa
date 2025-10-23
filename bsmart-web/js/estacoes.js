// Simulação de estações (substituir por fetch real da API)
const estacoes = [
  {
    nome: "Estação Norte",
    morada: "Parque Industrial, Lote 5",
    contacto: "João Silva – 913456789",
    link: "http://dyn.ecofuel.pt/norte"
  },
  {
    nome: "Estação Sul",
    morada: "Zona Técnica, Bloco B",
    contacto: "Ana Costa – 917654321",
    link: "http://dyn.ecofuel.pt/sul"
  }
];

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('listaEstacoes');

  estacoes.forEach(estacao => {
    const card = document.createElement('div');
    card.className = 'estacao-card';
    card.innerHTML = `
      <h3>${estacao.nome}</h3>
      <p><strong>Morada:</strong> ${estacao.morada}</p>
      <p><strong>Responsável:</strong> ${estacao.contacto}</p>
      <p><strong>Link DYNDNS:</strong> <a href="${estacao.link}" target="_blank">${estacao.link}</a></p>
    `;
    container.appendChild(card);
  });
});