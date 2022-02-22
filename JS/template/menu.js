// header complet page

const menuActive = document.getElementById('menu-active');
const menuDesac = document.getElementById('menu-desactive');
const menuNav = document.getElementById('menu-nav');

const headerHeightDocument = () => {
  const header = menuNav.parentElement.parentElement.parentElement;
  const bodyHeight =
    menuNav.parentElement.parentElement.parentElement.parentElement.offsetHeight;
  header.style.height = `${bodyHeight}px`;
};

headerHeightDocument();

addEventListener('resize', () => {
  headerHeightDocument();
});

// Menu menos de 1300 px

menuActive.addEventListener('click', (e) => {
  menuNav.classList.add('menu__start');
});

menuDesac.addEventListener('click', (e) => {
  menuNav.classList.remove('menu__start');
});

// side bar scroll

const scrollBar = () => {
  // side bar scroll
  const header = menuNav.parentElement.parentElement.parentElement;
  let scrollTop = document.firstElementChild.scrollTop;
  if (scrollTop > header.offsetTop) header.classList.add('header__scroll');
  else header.classList.remove('header__scroll');
};

addEventListener('scroll', () => {
  scrollBar();
});

// Idioma
const idioma = document.getElementById('idioma');

idioma.addEventListener('click', () => {
  const idiomaList = idioma.nextElementSibling.nextElementSibling.firstElementChild;
  idiomaList.classList.toggle('idioma--list__active');
});
