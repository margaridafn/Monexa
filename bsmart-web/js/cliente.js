// Simulação de dados do cliente (substituir por fetch real da API)
const cliente = {
  id: 1, // ID fictício para simulação
  nome: "EcoFuel Lda",
  morada: "Rua das Energias, 123",
  nif: "509876321",
  contacto1: "912345678",
  contacto2: "918765432",
  email1: "envios@ecofuel.pt",
  email2: "backup@ecofuel.pt",
  periodicidade: "Diária",
  horaEnvio: "08:00"
};

// Simulação de estações do cliente
const estacoesSimuladas = [
  { id: 101, nome: "Estação Norte" },
  { id: 102, nome: "Estação Sul" }
];

// Simulação de tanques por estação
const tanquesPorEstacao = {
  101: [
    { nome: "Tanque A", nivelAtual: 75 },
    { nome: "Tanque B", nivelAtual: 60 },
    { nome: "Tanque C", nivelAtual: 40 },
    { nome: "Tanque D", nivelAtual: 90 }
  ],
  102: [
    { nome: "Tanque A", nivelAtual: 30 },
    { nome: "Tanque B", nivelAtual: 45 },
    { nome: "Tanque C", nivelAtual: 20 },
    { nome: "Tanque D", nivelAtual: 55 }
  ]
};

window.addEventListener('DOMContentLoaded', () => {
  // Dados gerais
  document.getElementById('nomeCliente').textContent = cliente.nome;
  document.getElementById('moradaCliente').textContent = cliente.morada;
  document.getElementById('nifCliente').textContent = cliente.nif;
  document.getElementById('contacto1').textContent = cliente.contacto1;
  document.getElementById('contacto2').textContent = cliente.contacto2;
  document.getElementById('email1').textContent = cliente.email1;
  document.getElementById('email2').textContent = cliente.email2;
  document.getElementById('periodicidade').textContent = cliente.periodicidade;
  document.getElementById('horaEnvio').textContent = cliente.horaEnvio;

  // Inicializar dashboard pós-login
  inicializarDashboardCliente(cliente.id);
});

// Carrega lista lateral de estações
function inicializarDashboardCliente(clienteId) {
  const lista = document.getElementById('lista-estacoes');
  lista.innerHTML = '';

  estacoesSimuladas.forEach(estacao => {
    const btn = document.createElement('button');
    btn.textContent = estacao.nome;
    btn.onclick = () => carregarGraficoTanques(estacao.id);
    lista.appendChild(btn);
  });

  // Carrega gráfico da primeira estação por defeito
  if (estacoesSimuladas.length > 0) {
    carregarGraficoTanques(estacoesSimuladas[0].id);
  }
}

// Carrega gráfico dos tanques da estação selecionada
function carregarGraficoTanques(estacaoId) {
  const tanques = tanquesPorEstacao[estacaoId];
  const ctx = document.getElementById('graficoNiveisTanques').getContext('2d');

  const dados = {
    labels: tanques.map(t => t.nome),
    datasets: [{
      label: 'Nível Atual (%)',
      data: tanques.map(t => t.nivelAtual),
      backgroundColor: '#4a90e2'
    }]
  };

  if (window.graficoTanques) {
    window.graficoTanques.data = dados;
    window.graficoTanques.update();
  } else {
    window.graficoTanques = new Chart(ctx, {
      type: 'bar',
      data: dados,
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true, max: 100 }
        }
      }
    });
  }
}