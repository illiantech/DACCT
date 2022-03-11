if (history.state != null) {
  console.log(history.state.validOpenBlog);
}

const blogList = document.getElementById('blogList');

const blogListArray = Array.from(blogList.children);

// active open blog

blogListArray.forEach((item, index) => {
  const itemButtom =
    item.children[1].firstElementChild.lastElementChild.firstElementChild;

  itemButtom.addEventListener('click', (e) => {
    e.preventDefault();

    item.classList.add('blog--list-item__open');

    setTimeout(() => {
      item.classList.add('blog--list-item__open-opacity');
    }, 10);
  });
});

// desactive open blog

blogListArray.forEach((item, index) => {
  const itemButtomDesac = item.children[0];

  itemButtomDesac.addEventListener('click', (e) => {
    e.preventDefault();

    item.classList.remove('blog--list-item__open');

    item.classList.remove('blog--list-item__open-opacity');
  });
});
