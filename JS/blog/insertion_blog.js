let articles;

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
	console.log(articles);
};

fetchInsertArticles(localStorage.getItem('lang'));

console.log(articles);

// click event de lang

languageContainer.addEventListener('click', (e) => {
	const language = e.target.dataset.lang;

	if (language != undefined) {
		fetchInsertArticles(language);
	}
});
