const articles = [
  {
    title: 'La Ballena Azul.',
    date: '2022-03-17',
    link: '../../assets/Constancia-de-Trabajo-daniel.pdf'
  },
  {
    title: 'Don Quijote de la Mancha.',
    date: '2022-03-10',
    link: '../../assets/firma_bancamiga.pdf'
  },
  {
    title: 'Luces en el Cielo.',
    date: '2022-03-05',
    link: '../../assets/Constancia-de-Trabajo-daniel.pdf'
  },
  {
    title: 'Eres mia pequeña.',
    date: '2022-03-01',
    link: '../../assets/Constancia-de-Trabajo-daniel.pdf'
  },
  {
    title: 'La Razón de estar contigo',
    date: '2022-02-17',
    link: '../../assets/Constancia-de-Trabajo-daniel.pdf'
  },
  {
    title: 'Yo antes de ti',
    date: '2022-01-17',
    link: '../../assets/Constancia-de-Trabajo-daniel.pdf'
  },
  {
    title: 'Bajo la Misma Estrella',
    date: '2021-11-17',
    link: '../../assets/Constancia-de-Trabajo-daniel.pdf'
  },
  {
    title: 'Atrás de mi Ventana',
    date: '2021-11-12',
    link: '../../assets/Constancia-de-Trabajo-daniel.pdf'
  },
  {
    title: 'Y una vida sin tí.',
    date: '2022-11-10',
    link: '../../assets/Constancia-de-Trabajo-daniel.pdf'
  }
];

const searchBar = document.getElementById('searchBar');

const containerList = document.getElementById('containerList');

// eliminarDiacriticosEs

function removeAccents(texto) {
  return texto
    .normalize('NFD')
    .replace(
      /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,
      '$1'
    )
    .normalize();
}

const filter = () => {
  // declaracion de elementos
  const text = removeAccents(searchBar.value.toLowerCase());
  const fragment = document.createDocumentFragment();

  const list = document.createElement('ul');
  list.classList.add('list-blog');

  // busqueda de articulos
  for (const article of articles) {
    const title = removeAccents(article.title.toLowerCase());

    if (title.indexOf(text) !== -1) {
      // crecion de elementos
      const item = document.createElement('li');
      item.classList.add('list-blog--item');

      const title = document.createElement('a');
      title.classList.add('list-blog--item-title');

      title.textContent = article.title;
      title.title = 'Abrir artículo';
      title.href = article.link;
      title.target = '_blank';

      const date = document.createElement('time');
      date.classList.add('list-blog--item-time');

      date.textContent = article.date;
      date.dateTime = article.date;

      item.append(title, date);
      // esto con la finalidad de insertar una vez en el doom
      list.append(item);
    }
  }

  // Insercion de elementos en el DOM con metodologia fragment
  if (containerList.children.length > 0) {
    containerList.removeChild(containerList.children[0]);
  }

  if (list.children.length === 0) {
    // en caso de que no ninguna key coinsida
    const item = document.createElement('li');
    item.textContent = 'Articulo no encontrado...';
    item.classList.add('list-blog--item__undefined');
    // agregar alerta en lista
    list.append(item);

    containerList.append(list);
    searchBar.classList.add('search-bar__invalid');
  } else {
    containerList.append(list);
    searchBar.classList.remove('search-bar__invalid');
  }
};

searchBar.addEventListener('keyup', filter);

filter();
