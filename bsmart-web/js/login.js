document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  // Simulação: autenticação básica
  if (user === 'cliente1' && pass === '1234') {
    window.location.href = 'cliente.html';
  } else if (user === 'admin' && pass === 'admin123') {
    window.location.href = 'admin.html';
  } else {
    alert('Credenciais inválidas');
  }
});

document.getElementById('adminLogin').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('username').value = 'admin';
});