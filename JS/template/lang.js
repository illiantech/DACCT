// ruta de lang

const routeLang = document.querySelector('[data-routeLang]').dataset.routelang;

// declarion de los elementos al traducir

const blocksContent = document.querySelectorAll('[data-section]');

// funcion async - await fetch JSON Lang

const translate = async (lang) => {
  // objeto JSON
  const objectTranslate = await fetch(`../../JSON/${routeLang}/${lang}.json`).then(
    (res) => res.json()
  );

  // iteracion de bloques de contenido para agrear datos de objeto a partir del indice del mismo
  for (const blockContent of blocksContent) {
    const section = blockContent.dataset.section;
    const content = blockContent.dataset.content;

    blockContent.innerHTML = objectTranslate[section][content];
  }
};

// declaracion del click para cambio de idioma

const languageContainer = document.getElementById('languageContainer');

languageContainer.addEventListener('click', (e) => {
  const language = e.target.dataset.lang;
  if (language != undefined) {
    translate(language);
  }
});
