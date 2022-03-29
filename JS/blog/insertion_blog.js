let articles;

const insertArticles = () => {
	for (let index = 0; index < articles.length; index++) {
		blogList.children[
			index
		].children[1].firstElementChild.children[2].innerHTML = `${articles[index].title}`;
		if (index == 9) {
			break;
		}
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
