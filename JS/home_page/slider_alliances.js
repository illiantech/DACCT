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

  // desplazar un elemento para que quede otro a la izquierda
  allianceList.scrollLeft = viewportWidth;

  //  documentar

  allianceList.addEventListener('scroll', (e) => {
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
    // RESEST slider auto mobile
    sliderAutoDesac();
  });

  // activar slider auto mobile
  sliderAutoActive(viewportWidth);
};

// slider automaitco Mobile en scope General - ATTENTION
let sliderAutoMobile;
// desplazaiento de un elemento a otro reposicionante con primer IF
const sliderAutoActive = (viewportWidth) => {
  sliderAutoMobile = setInterval(() => {
    allianceList.scrollLeft = viewportWidth * 2;
  }, 6000);
};

const sliderAutoDesac = () => {
  clearInterval(sliderAutoMobile);
  sliderAutoActive(viewportWidth);
};

// exit aslider auto mobile

// variables slider auto PC - (se tiene arriba para que lo limpie en mobile)
let sliderAutoTime, sliderAutoInterval;
const sliderAuto = () => {
  sliderAutoTime = setTimeout(() => {
    sliderAutoInterval = setInterval(() => {
      next();
    }, 4000);
  }, 10000);
};

sliderAuto();

// aplicacion de slider CSS con JS

let validSliderMobile = true;

const allianceList = document.getElementById('allianceList');

// construccion de slider infinito CSS mobile
let viewportWidth = document.firstElementChild.clientWidth;

if (viewportWidth < 1000) {
  // limpiar TIEMPOS de slider pc
  clearTimeout(sliderAutoTime);
  clearInterval(sliderAutoInterval);
  resizeAlliance(viewportWidth);
}

/* EMERGENCE : ERROR CUANDO HACES MUCHO RESIZE */

addEventListener('resize', () => {
  viewportWidth = document.firstElementChild.clientWidth;

  // no se ocupara espacio en memoria cada vez que haga resize en PC
  if (viewportWidth < 1000) {
    history.go();
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
