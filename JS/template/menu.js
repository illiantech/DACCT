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

// Idioma

if (
	navigator.userAgent.match(/Android/i) ||
	navigator.userAgent.match(/webOS/i) ||
	navigator.userAgent.match(/iPhone/i) ||
	navigator.userAgent.match(/iPad/i) ||
	navigator.userAgent.match(/iPod/i) ||
	navigator.userAgent.match(/BlackBerry/i) ||
	navigator.userAgent.match(/Windows Phone/i)
) {
	const language = document.getElementById('idioma');
	language.classList.remove('idioma__hover');

	language.addEventListener('click', () => {
		const languageList = language.nextElementSibling.firstElementChild;
		languageList.classList.toggle('idioma--list__active');
	});
}
