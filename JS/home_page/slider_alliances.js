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

// const scrollAlliance = () => {
//   //   fragment para elementos hermanos menores
//   const fragment = document.createDocumentFragment();

//   if (viewportWidth * 2 == allianceList.scrollLeft) {
//     let items = [allianceList.children[0]];
//     fragment.append(...items);

//     allianceList.append(fragment);
//     allianceList.scrollLeft = viewportWidth;
//   }

//   if (viewportWidth * 3 == allianceList.scrollLeft) {
//     let items = [allianceList.children[0], allianceList.children[1]];
//     fragment.append(...items);

//     allianceList.append(fragment);
//     allianceList.scrollLeft = viewportWidth;
//   }

//   if (viewportWidth * 4 == allianceList.scrollLeft) {
//     let items = [
//       allianceList.children[0],
//       allianceList.children[1],
//       allianceList.children[2]
//     ];
//     fragment.append(...items);

//     allianceList.append(fragment);
//     allianceList.scrollLeft = viewportWidth;
//   }

//   if (viewportWidth * 5 == allianceList.scrollLeft) {
//     let items = [
//       allianceList.children[0],
//       allianceList.children[1],
//       allianceList.children[2],
//       allianceList.children[3]
//     ];
//     fragment.append(...items);

//     allianceList.append(fragment);
//     allianceList.scrollLeft = viewportWidth;
//   }

//   if (viewportWidth * 6 == allianceList.scrollLeft) {
//     let items = [
//       allianceList.children[0],
//       allianceList.children[1],
//       allianceList.children[2],
//       allianceList.children[3],
//       allianceList.children[4]
//     ];
//     fragment.append(...items);

//     allianceList.append(fragment);
//     allianceList.scrollLeft = viewportWidth;
//   }

//   if (viewportWidth * 7 == allianceList.scrollLeft) {
//     let items = [
//       allianceList.children[0],
//       allianceList.children[1],
//       allianceList.children[2],
//       allianceList.children[3],
//       allianceList.children[4],
//       allianceList.children[5]
//     ];
//     fragment.append(...items);

//     allianceList.append(fragment);
//     allianceList.scrollLeft = viewportWidth;
//   }

//   if (viewportWidth * 8 == allianceList.scrollLeft) {
//     let items = [
//       allianceList.children[0],
//       allianceList.children[1],
//       allianceList.children[2],
//       allianceList.children[3],
//       allianceList.children[4],
//       allianceList.children[5],
//       allianceList.children[6]
//     ];
//     fragment.append(...items);

//     allianceList.append(fragment);
//     allianceList.scrollLeft = viewportWidth;
//   }

//   if (viewportWidth * 9 == allianceList.scrollLeft) {
//     let items = [
//       allianceList.children[0],
//       allianceList.children[1],
//       allianceList.children[2],
//       allianceList.children[3],
//       allianceList.children[4],
//       allianceList.children[5],
//       allianceList.children[6],
//       allianceList.children[7]
//     ];
//     fragment.append(...items);

//     allianceList.append(fragment);
//     allianceList.scrollLeft = viewportWidth;
//   }

//   // RESEST slider auto mobile
//   sliderAutoDesac();
// };

// const resizeAlliance = (viewportWidth) => {
//   // ancho de viewport

//   // para tener el ancho del documento y verificar (tomando en cuenta que los elementos a scrollear son equivalentes al viewport) que el scroll realizado sea N veces el viewportWidth y asi saber cuanto elementos existen a la izquierda

//   // desplazar un elemento para que quede otro a la izquierda
//   allianceList.scrollLeft = viewportWidth;

//   // Event scroll function
//   allianceList.addEventListener('scroll', scrollAlliance);

//   // activar slider auto mobile
//   sliderAutoActive(viewportWidth);
// };

// slider CSS MOBILE

const allianceList = document.getElementById('allianceList');

let sliderAutoMobile;

const sliderAutoActive = (viewportWidth, index) => {
  sliderAutoMobile = setTimeout(() => {
    // NEW

    if (index <= allianceList.children.length - 1) {
      allianceList.scrollLeft = viewportWidth * index;

      index++;

      sliderAutoActive(viewportWidth, index);
    } else {
      index = 0;
      sliderAutoActive(viewportWidth, index);
    }
  }, 5000);
};

const sliderAutoDesac = () => {
  clearInterval(sliderAutoMobile);

  sliderAutoActive(viewportWidth, 0);
};

allianceList.addEventListener('touchmove', () => {
  //NEW
  sliderAutoDesac();
});

// exit slider auto mobile

// variables slider auto PC - (se tiene arriba para que lo limpie en mobile)
let sliderAutoTime, sliderAutoInterval;
const sliderAuto = () => {
  sliderAutoTime = setTimeout(() => {
    sliderAutoInterval = setInterval(() => {
      next();
    }, 4000);
  }, 10000);
};

// aplicacion de slider CSS con JS

// construccion de slider infinito CSS mobile
let viewportWidth = document.firstElementChild.clientWidth;

let validSliderMovil = true;

if (viewportWidth < 1000) {
  // activar slider auto mobile // NEW

  if (validSliderMovil) {
    sliderAutoActive(viewportWidth, 1); // NEW
    validSliderMovil = false;
  }
} else {
  sliderAuto();
}

addEventListener('resize', () => {
  viewportWidth = document.firstElementChild.clientWidth;

  // no se ocupara espacio en memoria cada vez que haga resize en PC
  if (viewportWidth < 1000) {
    // limpiar TIEMPOS de slider pc
    clearTimeout(sliderAutoTime);
    clearInterval(sliderAutoInterval);
    //     // limpiar acumulacion de automatic slider mobile
    //     clearInterval(sliderAutoMobile);
    //     allianceList.removeEventListener('scroll', scrollAlliance);
    //     resizeAlliance(viewportWidth);

    if (validSliderMovil) {
      sliderAutoActive(viewportWidth, 0); // NEW
      validSliderMovil = false;
      sliderAutoDesac();
    }
  } else {
    if (!validSliderMovil) {
      clearInterval(sliderAutoMobile); // NEW
      validSliderMovil = true;
    }
  }
});

// INCISO

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
