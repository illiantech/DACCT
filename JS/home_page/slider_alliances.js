// Slider para mobile

const resizeAlliance = () => {
  //   fragment para elementos hermanos menores
  const fragment = document.createDocumentFragment();

  // ancho de viewport
  const viewportWidth = document.firstElementChild.clientWidth;

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

    sliderAutoDesac();
  });

  let sliderAuto;
  const sliderAutoActive = () => {
    sliderAuto = setInterval(() => {
      allianceList.scrollLeft = viewportWidth * 2;
    }, 100000);
  };
  sliderAutoActive();

  const sliderAutoDesac = () => {
    clearInterval(sliderAuto);
    sliderAutoActive();
  };
};

// aplicacion de slider CSS con JS

const allianceList = document.getElementById('allianceList');

if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/webOS/i) ||
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPad/i) ||
  navigator.userAgent.match(/iPod/i) ||
  navigator.userAgent.match(/BlackBerry/i) ||
  navigator.userAgent.match(/Windows Phone/i)
) {
  allianceList.classList.add('alliance--list__mobile');

  // construccion de slider infinito CSS mobile

  resizeAlliance();

  addEventListener('resize', () => {
    resizeAlliance();
  });
} else allianceList.classList.remove('alliance--list__mobile');
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
