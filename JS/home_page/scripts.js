//slider

/* Expilcar */
const slider = document.getElementById('slider');

const elementsSlider = Array.from(slider.children);

let index = -1;

const nextSlider = () => {
	if (index == -1) {
		elementsSlider.forEach((element) => {
			element.style.transition = 'none';
			element.style.opacity = '1';
		});
	}
	index++;

	// Cuando se va a opacar
	slider.children[index].style.transition = 'opacity 1.2s ease';
	slider.children[index].style.opacity = '0';
	if (index == elementsSlider.length - 1) {
		index = -1;
		slider.children[0].style.opacity = '1';
	}
};

setInterval(() => {
	nextSlider();
}, 6000);

// Blog PushState

const blogList = document.getElementById('blogList');

blogList.addEventListener('click', (e) => {
	const open = e.target.dataset.open;

	if (open) {
		history.pushState(
			{
				validOpenBlog: open
			},
			'',
			'blog.html'
		);
		history.go();
	}
});

// redireccion a blog cuando accede desde home page con las flechas del navegador.

addEventListener('popstate', () => {
	history.go();
});
