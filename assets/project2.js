  let currentIndex = 0;
  const slides = document.querySelectorAll('.screenshot');
  const slideshow = document.getElementById('slideshow');
  const indicators = document.querySelectorAll('.indicator');


  function moveSlide(direction) {
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    slideshow.style.transform = `translateX(-${currentIndex * 100}%)`;

    indicators.forEach(ind => ind.classList.remove('active'));
    indicators[currentIndex].classList.add('active');
  }

  indicators.forEach(ind => {
    ind.addEventListener('click', () => {
      const index = parseInt(ind.getAttribute('data-index'));
      showSlide(index);
    });
  });
  setInterval(() => moveSlide(1), 5000);


const navSection = document.querySelector('.project-navigation');
const glow = document.createElement('div');

glow.className = "nav-glow";
navSection.appendChild(glow);

document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});
