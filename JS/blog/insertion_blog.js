// delcaracion de variables

const elementsList = document.querySelector('[data-elementsList]');

let articles;

const insertArticles = () => {
	// delcaracion de variables dentro de la funcion
	let insertion = 0; // inserción del destacado
	let position = 2; // position push (tiene que concordar con los static article)

	// lectura de articles para integracion de contenido
	for (let index = 0; index < articles.length; index++) {
		if (articles[index].static) {
			if (insertion < elementsList.children.length) {
				if (routeLang === 'blog') {
					// - blog

					// srcset 1300 - img
					elementsList.children[
						insertion
					].children[1].firstElementChild.firstElementChild.firstElementChild.srcset = `${articles[index].srcset_1300}`;

					// srcset - img
					elementsList.children[insertion].children[1].firstElementChild.firstElementChild.children[1].srcset = `${articles[index].srcset}`;

					// src - img
					elementsList.children[insertion].children[1].firstElementChild.firstElementChild.lastElementChild.src = `${articles[index].src}`;

					// alt - img
					elementsList.children[insertion].children[1].firstElementChild.firstElementChild.lastElementChild.alt = `${articles[index].alt}`;

					// time
					elementsList.children[insertion].children[1].firstElementChild.children[1].innerHTML = `${articles[index].visual_date}`;

					// time - dataTime
					elementsList.children[insertion].children[1].firstElementChild.children[1].dateTime = `${articles[index].date}`;

					// title
					elementsList.children[insertion].children[1].firstElementChild.children[2].innerHTML = `${articles[index].title}`;

					// text - preview
					elementsList.children[insertion].children[1].firstElementChild.children[3].innerHTML = `${articles[index].text_preview}`;

					// text - preview
					elementsList.children[insertion].children[1].firstElementChild.children[4].innerHTML = `${articles[index].text}`;
				} else {
					// - Index

					// srcset 1300 - img
					elementsList.children[insertion].firstElementChild.firstElementChild.firstElementChild.srcset = `${articles[index].srcset_1300}`;

					// srcset - img
					elementsList.children[insertion].firstElementChild.firstElementChild.children[1].srcset = `${articles[index].srcset}`;

					// src - img
					elementsList.children[insertion].firstElementChild.firstElementChild.lastElementChild.src = `${articles[index].src}`;

					// alt - img
					elementsList.children[insertion].firstElementChild.firstElementChild.lastElementChild.alt = `${articles[index].alt}`;

					// time
					elementsList.children[insertion].firstElementChild.children[1].innerHTML = `${articles[index].visual_date}`;

					// time - dataTime
					elementsList.children[insertion].firstElementChild.children[1].dateTime = `${articles[index].date}`;

					// title
					elementsList.children[insertion].firstElementChild.children[2].innerHTML = `${articles[index].title}`;

					// text - preview
					elementsList.children[insertion].firstElementChild.children[3].innerHTML = `${articles[index].text_preview}`;
				}

				insertion++;
				index++;
			}
		}

		// position push
		if (position < elementsList.children.length) {
			if (routeLang === 'blog') {
				// - blog

				// srcset 1300 - img
				elementsList.children[position].children[1].firstElementChild.firstElementChild.firstElementChild.srcset = `${articles[index].srcset_1300}`;

				// srcset - img
				elementsList.children[position].children[1].firstElementChild.firstElementChild.children[1].srcset = `${articles[index].srcset}`;

				// src - img
				elementsList.children[position].children[1].firstElementChild.firstElementChild.lastElementChild.src = `${articles[index].src}`;

				// alt - img
				elementsList.children[position].children[1].firstElementChild.firstElementChild.lastElementChild.alt = `${articles[index].alt}`;

				// time
				elementsList.children[position].children[1].firstElementChild.children[1].innerHTML = `${articles[index].visual_date}`;

				// time - dataTime
				elementsList.children[position].children[1].firstElementChild.children[1].dateTime = `${articles[index].date}`;

				// title
				elementsList.children[position].children[1].firstElementChild.children[2].innerHTML = `${articles[index].title}`;

				// text - preview
				elementsList.children[position].children[1].firstElementChild.children[3].innerHTML = `${articles[index].text_preview}`;

				// text - preview
				elementsList.children[position].children[1].firstElementChild.children[4].innerHTML = `${articles[index].text}`;
			} else {
				// - Index

				// srcset 1300 - img
				elementsList.children[position].firstElementChild.firstElementChild.firstElementChild.srcset = `${articles[index].srcset_1300}`;

				// srcset - img
				elementsList.children[position].firstElementChild.firstElementChild.children[1].srcset = `${articles[index].srcset}`;

				// src - img
				elementsList.children[position].firstElementChild.firstElementChild.lastElementChild.src = `${articles[index].src}`;

				// alt - img
				elementsList.children[position].firstElementChild.firstElementChild.lastElementChild.alt = `${articles[index].alt}`;

				// time
				elementsList.children[position].firstElementChild.children[1].innerHTML = `${articles[index].visual_date}`;

				// time - dataTime
				elementsList.children[position].firstElementChild.children[1].dateTime = `${articles[index].date}`;

				// title
				elementsList.children[position].firstElementChild.children[2].innerHTML = `${articles[index].title}`;

				// text - preview
				elementsList.children[position].firstElementChild.children[3].innerHTML = `${articles[index].text_preview}`;
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
