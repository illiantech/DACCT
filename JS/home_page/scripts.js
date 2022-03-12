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

// adaptation element rotate

// const sliderElementRotate = document.getElementById('sliderElementRotate');

// const efectWave = () => {
//   const viewportWidth = document.firstElementChild.clientWidth;
//   const sizeElement = viewportWidth * 5;

//   sliderElementRotate.style.width = `${sizeElement}px`;
//   sliderElementRotate.style.height = `${sizeElement}px`;
// };

// efectWave();

// addEventListener('resize', () => {
//   efectWave();
// });

// Blog PushState

const blogList = document.getElementById('blogList');

const blogListArray = Array.from(blogList.children);

blogListArray.forEach((item, index) => {
  const itemButtom = item.firstElementChild.lastElementChild;

  itemButtom.addEventListener('click', (e) => {
    e.preventDefault();
    history.pushState(
      {
        validOpenBlog: index
      },
      '',
      'http://127.0.0.1:5500/blog.html'
    );
    history.go();
  });
});

// redireccion a blog cuando desde home page.

addEventListener('popstate', () => {
  history.go();
});
