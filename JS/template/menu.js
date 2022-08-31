// Menu menos de 1300 px (MOVIL)

const menuActive = document.getElementById('menu-active');
const menuDesac = document.getElementById('menu-desactive');
const menuNav = document.getElementById('menu-nav');

menuActive.addEventListener('click', (e) => {
	menuNav.classList.add('menu__start');
});

menuDesac.addEventListener('click', (e) => {
	menuNav.classList.remove('menu__start');
});

// remover menu al clicar afuera del mismo

const main = document.getElementById('main');

main.addEventListener('click', () => {
	menuNav.classList.remove('menu__start');
});
