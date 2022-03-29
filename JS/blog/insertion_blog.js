// delcaracion de variables

const elementsList = document.querySelector('[data-elementsList]');

let articles;

const insertArticles = () => {
	let Insertion = 0;
	for (let position = 0; position < elementsList.children.length; position++) {
		if (!articles[position].static)
			elementsList.children[
				position
			].children[1].firstElementChild.children[2].innerHTML = `${articles[position].title}`;
		else console.log('estatico');
	}
};

// Extraccion de articulos de API JSON con AJAX

const fetchInsertArticles = async (lang) => {
	if (lang) {
		articles = await fetch(
			`https://kanutegx.github.io/DACCT/JSON/register_blog/${lang}.json`
		)
			.then((res) => res.json())
			.then((res) => res.articles);
	} else {
		articles = await fetch(
			`https://kanutegx.github.io/DACCT/JSON/register_blog/en.json`
		)
			.then((res) => res.json())
			.then((res) => res.articles);
	}
	console.log(articles[1]);
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
