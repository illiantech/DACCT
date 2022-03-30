// delcaracion de variables

const elementsList = document.querySelector('[data-elementsList]');

let articles;

const insertArticles = () => {
	// delcaracion de variables dentro de la funcion
	let insertion = 0; // inserción del destacado
	let position = 2; // position push
	let p = 0;

	for (let index = 0; index < elementsList.children.length; index++) {
		if (articles[index].static) {
			if (insertion < elementsList.children.length) {
				// title
				elementsList.children[insertion].children[1].firstElementChild.children[2].innerHTML = `${articles[index].title}`;

				insertion++;
				index++;
			}
		}

		// position push (tiene que concordar con los static article)
		if (position < elementsList.children.length) {
			// title
			elementsList.children[position].children[1].firstElementChild.children[2].innerHTML = `${articles[index].title}`;

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
