// header complet page

// const headerHeightDocument = () => {
//   const header = menuNav.parentElement.parentElement.parentElement;
//   // para que header no se mas grande que body
//   const bodyHeight =
//     menuNav.parentElement.parentElement.parentElement.parentElement.offsetHeight -
//     50;

//   header.style.height = `${bodyHeight}px`;
// };

// headerHeightDocument();

// addEventListener('resize', () => {
//   headerHeightDocument();
// });

// Menu menos de 1300 px
const menuActive = document.getElementById('menu-active');
const menuDesac = document.getElementById('menu-desactive');
const menuNav = document.getElementById('menu-nav');

menuActive.addEventListener('click', (e) => {
  menuNav.classList.add('menu__start');
});

menuDesac.addEventListener('click', (e) => {
  menuNav.classList.remove('menu__start');
});

// side bar scroll

// const scrollBar = () => {
//   // side bar scroll
//   const header = menuNav.parentElement.parentElement.parentElement;
//   let scrollTop = document.firstElementChild.scrollTop;
//   if (scrollTop > header.offsetTop) header.classList.add('header__scroll');
//   else header.classList.remove('header__scroll');
// };

// addEventListener('scroll', () => {
//   scrollBar();
// });

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
  const idioma = document.getElementById('idioma');
  idioma.classList.remove('idioma__hover');

  idioma.addEventListener('click', () => {
    const idiomaList = idioma.nextElementSibling.firstElementChild;
    idiomaList.classList.toggle('idioma--list__active');
  });
}
