// variables blog

const blogList = document.getElementById('blogList');

// Push de estado de blog desde la home page

if (history.state != null) {
	blogList.children[history.state.validOpenBlog].classList.add('blog--list-item__open');
}

// active open blog

// pending

const blogListArray = Array.from(blogList.children);

blogListArray.forEach((item, index) => {
	const itemButtom = item.children[1].firstElementChild.lastElementChild.firstElementChild;

	itemButtom.addEventListener('click', (e) => {
		item.classList.add('blog--list-item__open');
	});
});

// desactive open blog

blogListArray.forEach((item, index) => {
	const itemButtomDesac = item.children[0];

	itemButtomDesac.addEventListener('click', (e) => {
		item.classList.remove('blog--list-item__open');
	});
});

// redireccion a index cuando se accede a blog desde home page

addEventListener('popstate', () => {
	history.go();
});
