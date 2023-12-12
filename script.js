function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  // Pegar a tag img
  const img = document.querySelector('#profile img');

  // Salvar o estado atual do modo no armazenamento local
  const currentMode = html.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('theme', currentMode);

  // Substituir a imagem
  if (html.classList.contains('light')) {
    // Se estiver no modo claro, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png');
  } else {
    // Se estiver no modo escuro, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png');
  }
}

// Aplicar o modo salvo ao carregar a página
function applySavedTheme() {
  const html = document.documentElement;
  const img = document.querySelector('#profile img');
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    html.classList.add(savedTheme);

    // Atualizar a imagem de acordo com o modo salvo
    if (savedTheme === 'light') {
      img.setAttribute('src', './assets/avatar-light.png');
    }
  }
}

// Aplicar o modo salvo ao carregar a página
applySavedTheme();
