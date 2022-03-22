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

  // iteracion de bloques de contenido para agregar datos del objeto a partir del indice del mismo
  for (const blockContent of blocksContent) {
    const section = blockContent.dataset.section;
    const content = blockContent.dataset.content;

    if (blockContent.hasAttribute('alt'))
      blockContent.alt = objectTranslate[section][content];
    else if (blockContent.hasAttribute('title'))
      blockContent.title = objectTranslate[section][content];
    else if (
      blockContent.localName == 'p' ||
      blockContent.localName == 'h2' ||
      blockContent.localName == 'h3'
    )
      blockContent.innerHTML = objectTranslate[section][content];
    else blockContent.innerText = objectTranslate[section][content];
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
