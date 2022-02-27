// Slider para mobile

/* Prueba */
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
    // Se puede sumar mas 6 px en PC el allianceList.scrollLeft para desplazar infinitamente, debido a diferencias de tamaño del scroll por anclaje y el viewport

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

resizeAlliance();

addEventListener('resize', () => {
  const viewportWidth = document.firstElementChild.clientWidth;
  // no se ocupara espacio en memoria cada vez que haga resize en PC
  if (viewportWidth < 1000) {
    resizeAlliance(viewportWidth);
  }
});
