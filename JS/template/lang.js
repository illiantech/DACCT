// ruta de lang

const routeLang = document.querySelector('[data-routeLang]').dataset.routelang;

// declarion de los elementos al traducir

const blocksContent = document.querySelectorAll('[data-section]');

// funcion async - await fetch JSON Lang

const translate = async (lang) => {
	// objeto JSON
	// la ruta del fetch esta sujeta a cambio en funcion al hosting
	const objectTranslate = await fetch(`https://kanutegx.github.io/DACCT/JSON/${routeLang}/${lang}.json`).then((res) => res.json());

	// iteracion de bloques de contenido para agregar datos del objeto a partir del indice del mismo
	for (const blockContent of blocksContent) {
		const section = blockContent.dataset.section;
		const content = blockContent.dataset.content;

		if (blockContent.hasAttribute('alt'))
			// colocar en los alts de las imagenes la traduccion
			blockContent.alt = objectTranslate[section][content];
		else if (blockContent.hasAttribute('placeholder'))
			// colocar placeholder para los inputs
			blockContent.placeholder = objectTranslate[section][content];
		else if (blockContent.hasAttribute('title') && blockContent.hasChildNodes()) {
			// colocar en titles con nodos hijos
			if (blockContent.firstChild.nodeName == '#text') {
				// colocar en titles con nodos hijos de tipo text
				const textFormat = blockContent.firstChild.textContent.trim();
				if (textFormat.length == 0)
					// colocar en titles con nodos hijos de tipo text con 0 caracteres despues de formateo
					blockContent.title = objectTranslate[section][content];
				else {
					// colocar en titles con nodos hijos de tipo text con MAS de 0 caracteres despues de formateo
					blockContent.title = objectTranslate[section][content];
					blockContent.innerHTML = objectTranslate[section][content];
				}
			} else blockContent.title = objectTranslate[section][content]; // colocar en titles con nodos hijos que NO SEAN de tipo text
		} else if (blockContent.hasAttribute('title') && !blockContent.hasChildNodes())
			// colocar en titles que NO tengan nodos hijos
			blockContent.title = objectTranslate[section][content];
		else blockContent.innerHTML = objectTranslate[section][content]; // colocar en cualquier texto que desee traducir
	}
};

//  localStorage para indicar la heredacion del cambio de idioma en otras paginas cuando recargue y cambio de paginación
// No se coloca solo un "else" porque si recarga la pagina y el valor no es "es" se ejecutara la funcion incluso ya tiendo el idioma en ingles por defecto

if (localStorage.getItem('lang') === 'es') translate(localStorage.getItem('lang'));
else if (localStorage.getItem('lang') === 'en') translate(localStorage.getItem('lang'));

// declaracion del click para cambio de idioma

const languageContainer = document.getElementById('languageContainer');

languageContainer.addEventListener('click', (e) => {
	const language = e.target.dataset.lang;

	if (language != undefined) {
		translate(language);
		localStorage.setItem('lang', `${language}`);
	}
});
