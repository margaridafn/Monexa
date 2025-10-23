document.addEventListener('DOMContentLoaded', () => {
  const conteudo = document.getElementById('adminConteudo');

  document.getElementById('gestaoClientes').addEventListener('click', e => {
    e.preventDefault();
    conteudo.innerHTML = renderClientes();
  });

  document.getElementById('verEstacoes').addEventListener('click', e => {
    e.preventDefault();
    conteudo.innerHTML = renderEstacoes();
  });

  document.getElementById('verLogs').addEventListener('click', e => {
    e.preventDefault();
    conteudo.innerHTML = renderLogs();
  });

  document.getElementById('configSistema').addEventListener('click', e => {
    e.preventDefault();
    conteudo.innerHTML = renderConfig();
  });
});

function renderClientes() {
  return `
    <h3>Clientes</h3>
    <ul>
      <li>EcoFuel Lda – NIF: 509876321</li>
      <li>PetroLogix SA – NIF: 507654321</li>
    </ul>
  `;
}

function renderEstacoes() {
  return `
    <h3>Estações</h3>
    <ul>
      <li>Estação Norte – DYNDNS: dyn.ecofuel.pt/norte</li>
      <li>Estação Sul – DYNDNS: dyn.ecofuel.pt/sul</li>
    </ul>
  `;
}

function renderLogs() {
  return `
    <h3>Logs Globais</h3>
    <ul>
      <li>22/10 – Email enviado para EcoFuel</li>
      <li>21/10 – Email falhou para PetroLogix</li>
    </ul>
  `;
}

function renderConfig() {
  return `
    <h3>Configurações do Sistema</h3>
    <p>Periodicidade padrão: Diária</p>
    <p>Hora de envio: 08:00</p>
  `;
}