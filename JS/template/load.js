// Pantalla de carga

const load = document.getElementById('load');

window.addEventListener('load', (e) => {
  load.classList.add('load__end');
  setTimeout(() => {
    load.style.display = 'none';
  }, 1100);
});
