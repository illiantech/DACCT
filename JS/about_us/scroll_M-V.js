const misionVision = document.getElementById('misionVision');

const efectScrollMV = () => {
  const MVTop = misionVision.offsetTop;
  let scrollTop = document.firstElementChild.scrollTop;
  let viewportHeight = document.firstElementChild.clientHeight;

  if (scrollTop > MVTop - viewportHeight / 3) {
    misionVision.classList.add('second-container__scroll');

    // Desac evento scroll
    // removeEventListener('scroll', efectScrollMV);
  }
};

addEventListener('scroll', efectScrollMV);
