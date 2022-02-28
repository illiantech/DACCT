//section estrategias

const bgrCardTwo = document.getElementById('bgrCardTwo');
const containerCardTwo = document.getElementById('containerCardTwo');
const cardTwo = document.getElementById('cardTwo');

const elementOpacityScroll = () => {
  const scrollTop = document.firstElementChild.scrollTop;
  const cardTop = containerCardTwo.offsetTop;
  const viewportHeight = document.firstElementChild.clientHeight;
  if (scrollTop > cardTop - viewportHeight / 1.3) {
    bgrCardTwo.classList.add('background-card2__scroll');
    cardTwo.classList.add('card2__scroll');
  }
};

addEventListener('scroll', () => {
  elementOpacityScroll();
});
