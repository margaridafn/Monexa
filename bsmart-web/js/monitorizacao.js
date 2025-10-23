// Leituras simuladas
const leituras = [
  { tanque: "Tanque A", nivel: 4200 },
  { tanque: "Tanque B", nivel: 3100 },
  { tanque: "Tanque C", nivel: 1800 },
  { tanque: "Tanque D", nivel: 900 }
];

// Logs simulados
const logs = [
  "Email enviado para envios@ecofuel.pt às 08:00 – 22/10/2025",
  "Email enviado para backup@ecofuel.pt às 08:00 – 21/10/2025"
];

window.addEventListener('DOMContentLoaded', () => {
  const leiturasContainer = document.getElementById('leiturasContainer');
  leituras.forEach(l => {
    const div = document.createElement('div');
    div.textContent = `${l.tanque}: ${l.nivel} L`;
    leiturasContainer.appendChild(div);
  });

  const logsContainer = document.getElementById('logsContainer');
  logs.forEach(log => {
    const li = document.createElement('li');
    li.textContent = log;
    logsContainer.appendChild(li);
  });

  // Gráfico
  const ctx = document.getElementById('graficoTanques').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: leituras.map(l => l.tanque),
      datasets: [{
        label: 'Nível (L)',
        data: leituras.map(l => l.nivel),
        backgroundColor: '#003366'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
});