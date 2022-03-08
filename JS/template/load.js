// Pantalla de carga

const load = document.getElementById('load');
const body = load.parentElement;

body.style.overflowY = 'hidden';

window.addEventListener('load', (e) => {
  load.classList.add('load__end');
  body.style.overflowY = 'auto';
  setTimeout(() => {
    load.style.display = 'none';
  }, 1050);
});
