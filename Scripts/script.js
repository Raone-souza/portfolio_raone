// efeito de digitação

const carouselText1 = [
  { text: "Programador", color: "gray" },
  { text: "Desenvolvedor Back End", color: "gray" },
  { text: "Desenvolvedor Full Stack", color: "gray" }
];

const carouselText2 = [
  { text: "Bem-vindo(a) ao meu portfólio", color: "gray" }
];

$(document).ready(async function () {
  carousel(carouselText1, "#feature-text", 150, 2500, 100); 
  carousel(carouselText2, "#feature-text2", 180, 4500, 120); 
});

async function typeSentence(sentence, eleRef, delay = 150) {
  const letters = sentence.split("");
  let i = 0;
  $(eleRef).html("");
  while (i < letters.length) {
    await waitForMs(delay);
    $(eleRef).html($(eleRef).html() + letters[i]);
    i++;
  }
}

async function deleteSentence(eleRef, delay = 100) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  while (letters.length > 0) {
    await waitForMs(delay);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

async function carousel(carouselList, eleRef, typeSpeed = 150, displayTime = 2500, deleteSpeed = 100) {
  let i = 0;
  while (true) {
    updateFontColor(eleRef, carouselList[i].color);
    await typeSentence(carouselList[i].text, eleRef, typeSpeed);
    await waitForMs(displayTime);
    await deleteSentence(eleRef, deleteSpeed);
    await waitForMs(800); // Pausa extra para suavizar a transição
    i++;
    if (i >= carouselList.length) {
      i = 0;
    }
  }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css("color", color);
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}




// Mobile menu funcionabilidade
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// fechar mobile menu
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// envio do formulario
const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const response = await fetch("https://formspree.io/f/xqaebnrj", { 
    method: "POST",
    body: formData,
    headers: { "Accept": "application/json" }
  });

  if (response.ok) {
    alert("Mensagem enviada com sucesso!");
    form.reset();
  } else {
    alert("Erro ao enviar mensagem.");
  }
});

// Rolagem suave para links de navegação

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    if (href !== '#') {
      const target = document.querySelector(href);
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Scroll animação
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

