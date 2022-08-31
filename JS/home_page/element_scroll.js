// funtion elements id

const $id = (id) => document.getElementById(id);

// section blog
const blogHome = $id('blogHome');
const blogHomeTop = blogHome.offsetTop;

//section estrategias

const containerCardTwo = $id('containerCardTwo');
const cardTwo = $id('cardTwo');
const cardTop = containerCardTwo.offsetTop;

// section programas
const programs = $id('programs');
const programsTop = programs.offsetTop;

// arrays de elementos a aplicar este efecto
const elements = {
	elementOne: [blogHome, blogHomeTop, 'blog__scroll'],
	elementTwo: [cardTwo, cardTop, 'card2__scroll'],
	elementThree: [programs, programsTop, 'programs__scroll']
};

// para el mantenimiento optimizar estos if
const elementOpacityScroll = () => {
	const scrollTop = document.firstElementChild.scrollTop;
	const viewportHeight = document.firstElementChild.clientHeight;

	for (const element in elements) {
		if (scrollTop > elements[element][1] - viewportHeight / 2) {
			elements[element][0].classList.add(elements[element][2]);
		}
	}
};

addEventListener('scroll', elementOpacityScroll);
