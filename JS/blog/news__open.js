// variables blog

const blogList = document.getElementById('blogList');

// Push de estado de blog desde la home page

if (history.state != null) {
	blogList.children[history.state.validOpenBlog].classList.add('blog--list-item__open');
}

// active and desactive open blog

blogList.addEventListener('click', (e) => {
	const open = e.target.dataset.open;

	if (open == 'active') {
		const item = e.target.parentElement.parentElement.parentElement.parentElement;

		item.classList.add('blog--list-item__open');
	} else if (open == 'desactive') {
		const item = e.target.parentElement;
		item.classList.remove('blog--list-item__open');
	}
});

// redireccion a index cuando se accede a blog desde home page

addEventListener('popstate', () => {
	history.go();
});
