// index.html and blog.html

// delcaracion de variables

const elementsList = document.querySelector('[data-elementsList]');

let articles;

// funtion integration content elements

const contentOriginalBlog = (i, index) => {
	// - blog

	// srcset 1300 - img
	elementsList.children[i].children[1].firstElementChild.firstElementChild.firstElementChild.srcset = `${articles[index].srcset_1300}`;

	// srcset - img
	elementsList.children[i].children[1].firstElementChild.firstElementChild.children[1].srcset = `${articles[index].srcset}`;

	// src - img
	elementsList.children[i].children[1].firstElementChild.firstElementChild.lastElementChild.src = `${articles[index].src}`;

	// alt - img
	elementsList.children[i].children[1].firstElementChild.firstElementChild.lastElementChild.alt = `${articles[index].alt}`;

	// time
	elementsList.children[i].children[1].firstElementChild.children[1].innerHTML = `${articles[index].visual_date}`;

	// time - dataTime
	elementsList.children[i].children[1].firstElementChild.children[1].dateTime = `${articles[index].date}`;

	// title
	elementsList.children[i].children[1].firstElementChild.children[2].innerHTML = `${articles[index].title}`;

	// text - preview
	elementsList.children[i].children[1].firstElementChild.children[3].innerHTML = `${articles[index].text_preview}`;

	// text - preview
	elementsList.children[i].children[1].firstElementChild.children[4].innerHTML = `${articles[index].text}`;
};

const contentIndexBlogs = (i, index) => {
	// - Index

	// srcset 1300 - img
	elementsList.children[i].firstElementChild.firstElementChild.firstElementChild.srcset = `${articles[index].srcset_1300}`;

	// srcset - img
	elementsList.children[i].firstElementChild.firstElementChild.children[1].srcset = `${articles[index].srcset}`;

	// src - img
	elementsList.children[i].firstElementChild.firstElementChild.lastElementChild.src = `${articles[index].src}`;

	// alt - img
	elementsList.children[i].firstElementChild.firstElementChild.lastElementChild.alt = `${articles[index].alt}`;

	// time
	elementsList.children[i].firstElementChild.children[1].innerHTML = `${articles[index].visual_date}`;

	// time - dataTime
	elementsList.children[i].firstElementChild.children[1].dateTime = `${articles[index].date}`;

	// title
	elementsList.children[i].firstElementChild.children[2].innerHTML = `${articles[index].title}`;

	// text - preview
	elementsList.children[i].firstElementChild.children[3].innerHTML = `${articles[index].text_preview}`;
};

const insertArticles = () => {
	// delcaracion de variables dentro de la funcion
	let insertion = 0; // inserción del destacado (solo cuando sea estatico en article)
	let position = 0; // position push (tiene que concordar con los static article)

	// lectura de articles para integracion de contenido
	for (let index = 0; index < articles.length; index++) {
		if (articles[index].static) {
			// inserción del destacado
			if (insertion < elementsList.children.length) {
				if (routeLang === 'blog') {
					// blog.html
					contentOriginalBlog(insertion, index);

					// DESTACADO - BLOG STATIC
					const star = document.createElement('div');
					star.classList.add('star');

					elementsList.children[insertion].children[1].firstElementChild.lastElementChild.before(star);
				} else {
					// index.html
					contentIndexBlogs(insertion, index);

					// DESTACADO - BLOG STATIC
					const star = document.createElement('div');
					star.classList.add('star');

					elementsList.children[insertion].firstElementChild.lastElementChild.before(star);
				}

				insertion++;
				index++;
			}
		}

		// position push
		if (position < elementsList.children.length) {
			if (routeLang === 'blog') {
				// blog.html
				contentOriginalBlog(position, index);
			} else {
				// index.html
				contentIndexBlogs(position, index);
			}

			position++;
		}
	}
};

// Extraccion de articulos de API JSON con AJAX

const fetchInsertArticles = async (lang) => {
	if (lang) {
		articles = await fetch(`https://kanutegx.github.io/DACCT/JSON/register_blog/${lang}.json`)
			.then((res) => res.json())
			.then((res) => res.articles);
	} else {
		articles = await fetch(`https://kanutegx.github.io/DACCT/JSON/register_blog/en.json`)
			.then((res) => res.json())
			.then((res) => res.articles);
	}

	insertArticles();
};

fetchInsertArticles(localStorage.getItem('lang'));

// click event de lang

languageContainer.addEventListener('click', (e) => {
	const language = e.target.dataset.lang;

	if (language != undefined) {
		fetchInsertArticles(language);
	}
});
