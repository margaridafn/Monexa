// Simulação de tanques (substituir por fetch real da API)
const tanques = [
  {
    nome: "Tanque A",
    produto: "Gasóleo",
    capacidade: 10000,
    aviso: 3000,
    baixo: 1000
  },
  {
    nome: "Tanque B",
    produto: "Gasolina",
    capacidade: 8000,
    aviso: 2500,
    baixo: 800
  },
  {
    nome: "Tanque C",
    produto: "AdBlue",
    capacidade: 5000,
    aviso: 1500,
    baixo: 500
  },
  {
    nome: "Tanque D",
    produto: "Lubrificante",
    capacidade: 3000,
    aviso: 1000,
    baixo: 300
  }
];

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('listaTanques');

  tanques.forEach(tanque => {
    const card = document.createElement('div');
    card.className = 'tanque-card';
    card.innerHTML = `
      <h3>${tanque.nome}</h3>
      <p><strong>Produto:</strong> ${tanque.produto}</p>
      <p><strong>Capacidade Total:</strong> ${tanque.capacidade} L</p>
      <p><strong>Nível de Aviso:</strong> ${tanque.aviso} L</p>
      <p><strong>Nível Baixo:</strong> ${tanque.baixo} L</p>
    `;
    container.appendChild(card);
  });
});