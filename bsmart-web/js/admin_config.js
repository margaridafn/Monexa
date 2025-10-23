document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formConfig');
  const mensagem = document.getElementById('mensagem');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const periodicidade = document.getElementById('periodicidade').value;
    const hora = document.getElementById('horaEnvio').value;

    // Simulação de envio
    console.log('Configurações guardadas:', { periodicidade, hora });

    mensagem.textContent = 'Configurações guardadas com sucesso.';
    mensagem.style.color = 'green';
  });
});