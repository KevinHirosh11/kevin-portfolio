const navSection = document.querySelector('.project-navigation');
const glow = document.createElement('div');

glow.className = "nav-glow";
navSection.appendChild(glow);

document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});