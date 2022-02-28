// Slider para mobile

/* Prueba de bucle de if */
// for (let index = 2; index < allianceList.children.length; index++) {
//   if (viewportWidth * index == allianceList.scrollLeft) {
//     console.dir(`tirada ${index}`);
//     for (let i = 0; i < index - 1; i++) {
//       fragment.append(allianceList.children[i]);
//       console.dir(i);
//     }
//     allianceList.append(fragment);
//     allianceList.scrollLeft = viewportWidth;
//   }
// }

const resizeAlliance = (viewportWidth) => {
  //   fragment para elementos hermanos menores
  const fragment = document.createDocumentFragment();

  // ancho de viewport

  // para tener el ancho del documento y verificar (tomando en cuenta que los elementos a scrollear son equivalentes al viewport) que el scroll realizado sea N veces el viewportWidth y asi saber cuanto elementos existen a la izquierda
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    viewportWidth = document.firstElementChild.clientWidth;
  } else {
    viewportWidth = document.firstElementChild.clientWidth + 18;
  }

  allianceList.scrollLeft = viewportWidth;
  // desplazar un elemento para que quede otro a la izquierda

  //  documentar

  allianceList.addEventListener('scroll', (e) => {
    // Se puede sumar mas 6 px en PC el allianceList.scroll para desplazar infinitamente, debido a diferencias de tamaño del scroll por anclaje y el viewport

    if (viewportWidth * 2 == allianceList.scrollLeft) {
      let items = [allianceList.children[0]];
      fragment.append(...items);

      allianceList.append(fragment);
      allianceList.scrollLeft = viewportWidth;
    }

    if (viewportWidth * 3 == allianceList.scrollLeft) {
      let items = [allianceList.children[0], allianceList.children[1]];
      fragment.append(...items);

      allianceList.append(fragment);
      allianceList.scrollLeft = viewportWidth;
    }

    if (viewportWidth * 4 == allianceList.scrollLeft) {
      let items = [
        allianceList.children[0],
        allianceList.children[1],
        allianceList.children[2]
      ];
      fragment.append(...items);

      allianceList.append(fragment);
      allianceList.scrollLeft = viewportWidth;
    }

    if (viewportWidth * 5 == allianceList.scrollLeft) {
      let items = [
        allianceList.children[0],
        allianceList.children[1],
        allianceList.children[2],
        allianceList.children[3]
      ];
      fragment.append(...items);

      allianceList.append(fragment);
      allianceList.scrollLeft = viewportWidth;
    }

    if (viewportWidth * 6 == allianceList.scrollLeft) {
      let items = [
        allianceList.children[0],
        allianceList.children[1],
        allianceList.children[2],
        allianceList.children[3],
        allianceList.children[4]
      ];
      fragment.append(...items);

      allianceList.append(fragment);
      allianceList.scrollLeft = viewportWidth;
    }

    if (viewportWidth * 7 == allianceList.scrollLeft) {
      let items = [
        allianceList.children[0],
        allianceList.children[1],
        allianceList.children[2],
        allianceList.children[3],
        allianceList.children[4],
        allianceList.children[5]
      ];
      fragment.append(...items);

      allianceList.append(fragment);
      allianceList.scrollLeft = viewportWidth;
    }

    if (viewportWidth * 8 == allianceList.scrollLeft) {
      let items = [
        allianceList.children[0],
        allianceList.children[1],
        allianceList.children[2],
        allianceList.children[3],
        allianceList.children[4],
        allianceList.children[5],
        allianceList.children[6]
      ];
      fragment.append(...items);

      allianceList.append(fragment);
      allianceList.scrollLeft = viewportWidth;
    }

    if (viewportWidth * 9 == allianceList.scrollLeft) {
      let items = [
        allianceList.children[0],
        allianceList.children[1],
        allianceList.children[2],
        allianceList.children[3],
        allianceList.children[4],
        allianceList.children[5],
        allianceList.children[6],
        allianceList.children[7]
      ];
      fragment.append(...items);

      allianceList.append(fragment);
      allianceList.scrollLeft = viewportWidth;
    }

    if (viewportWidth * 10 == allianceList.scrollLeft) {
      let items = [
        allianceList.children[0],
        allianceList.children[1],
        allianceList.children[2],
        allianceList.children[3],
        allianceList.children[4],
        allianceList.children[5],
        allianceList.children[6],
        allianceList.children[7],
        allianceList.children[8]
      ];
      fragment.append(...items);

      allianceList.append(fragment);
      allianceList.scrollLeft = viewportWidth;
    }

    sliderAutoDesac();
  });

  let sliderAuto;
  const sliderAutoActive = () => {
    sliderAuto = setInterval(() => {
      allianceList.scrollLeft = viewportWidth * 2;
    }, 6000);
  };
  sliderAutoActive();

  const sliderAutoDesac = () => {
    clearInterval(sliderAuto);
    sliderAutoActive();
  };
};

// aplicacion de slider CSS con JS

const allianceList = document.getElementById('allianceList');

// construccion de slider infinito CSS mobile
const viewportWidth = document.firstElementChild.clientWidth;

if (viewportWidth < 1000) {
  resizeAlliance(viewportWidth);
}

addEventListener('resize', () => {
  // no se ocupara espacio en memoria cada vez que haga resize en PC
  if (viewportWidth < 1000) {
    resizeAlliance(viewportWidth);
  }
});

// Slider para PC

// valid click event
let validSlider = true;

// prev item
const prev = () => {
  allianceList.classList.add('alliance--list__prev');
  validSlider = false;
  setTimeout(() => {
    allianceList.prepend(allianceList.lastElementChild);
    allianceList.classList.remove('alliance--list__prev');
    validSlider = true;
  }, 610);
};

// next item
const next = () => {
  allianceList.classList.add('alliance--list__next');
  validSlider = false;
  setTimeout(() => {
    allianceList.append(allianceList.firstElementChild);
    allianceList.classList.remove('alliance--list__next');
    validSlider = true;
  }, 610);
};

// slider automatic
let sliderAutoTime, sliderAutoInterval;

const sliderAuto = () => {
  sliderAutoTime = setTimeout(() => {
    sliderAutoInterval = setInterval(() => {
      next();
    }, 4000);
  }, 10000);
};

sliderAuto();

const sliderAutoReset = () => {
  clearTimeout(sliderAutoTime);
  clearInterval(sliderAutoInterval);
  sliderAuto();
};

// buttom and event click

const buttomPrev = document.getElementById('buttomPrev');

const buttomNext = document.getElementById('buttomNext');

buttomPrev.addEventListener('click', () => {
  if (validSlider) {
    prev();
    sliderAutoReset();
  }
});

buttomNext.addEventListener('click', () => {
  if (validSlider) {
    next();
    sliderAutoReset();
  }
});
