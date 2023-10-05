const slideshow = document.querySelector('.slideshow-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;
let interval;

// Função para avançar para a próxima imagem
function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  slideTo(currentIndex);
}

// Função para voltar para a imagem anterior
prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  slideTo(currentIndex);
});

// Função para mover o slide para a posição do índice escolhido
function slideTo(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[index].style.display = 'block';
}

// Iniciar o slide automaticamente
function startSlide() {
  interval = setInterval(nextSlide, 6000); // O tempo está em milissegundos, para controlar a velocidade do slide.
}

// Parar o slide automaticamente
function stopSlide() {
  clearInterval(interval);
}

// Iniciar o slide automaticamente quando a página for carregada
startSlide();

// Parar o slide automaticamente quando o mouse estiver sobre o slide
slideshow.addEventListener('mouseover', stopSlide);

// Retomar o slide automaticamente quando o mouse sair do slide
slideshow.addEventListener('mouseout', startSlide);

// Atribuir a função nextSlide ao evento de clique do botão nextBtn
nextBtn.addEventListener('click', nextSlide);
