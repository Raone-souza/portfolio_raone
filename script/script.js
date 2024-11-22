// Configura a exibição inicial para a seção "Home"
window.addEventListener('DOMContentLoaded', () => {
  const homeSection = document.getElementById('home'); // Certifique-se de que a seção "Home" tenha o ID 'home'

  // Esconde todas as seções
  document.querySelectorAll('main section').forEach(section => {
    section.style.display = 'none';
    section.style.opacity = '0'; // Garante que elas fiquem invisíveis
  });

  // Mostra a seção "Home"
  if (homeSection) {
    homeSection.style.display = 'block';
    setTimeout(() => {
      homeSection.style.opacity = '1'; // Transição suave ao carregar
    }, 50);
  }
});

// Adiciona os eventos de clique aos links do menu
document.querySelectorAll('.menu__link').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Impede o comportamento padrão do link

    const targetId = this.getAttribute('href').substring(1); // Obtém o ID do destino
    const targetSection = document.getElementById(targetId);

    // Esconde todas as seções com fade-out
    document.querySelectorAll('main section').forEach(section => {
      section.style.opacity = '0'; // Define opacidade para desaparecer
      setTimeout(() => {
        section.style.display = 'none'; // Oculta após a transição
      }, 500); // Tempo da transição no CSS (0.5s)
    });

    // Exibe apenas a seção clicada com fade-in
    if (targetSection) {
      setTimeout(() => {
        targetSection.style.display = 'block'; // Mostra a seção
        setTimeout(() => {
          targetSection.style.opacity = '1'; // Aplica opacidade para aparecer
        }, 50); // Pequeno atraso para garantir que o display já foi aplicado
      }, 500);
    }
  });
});

// Abre o modal com a imagem e detalhes do projeto
function showFrame(imageSrc, title, description) {
  const frame = document.getElementById("frameViewer");
  const frameImage = document.getElementById("frameImage");
  const frameTitle = document.getElementById("frameTitle");
  const frameDescription = document.getElementById("frameDescription");

  frameImage.src = imageSrc;
  frameTitle.textContent = title;
  frameDescription.textContent = description;

  frame.style.display = "flex";
};

function closeFrame() {
  const frame = document.getElementById("frameViewer");
  frame.style.display = "none";
};

