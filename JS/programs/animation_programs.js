// Element scroll
const programs = document.getElementById('programs');

const programsArray = Array.from(programs.children);

const elementAnimationScroll = () => {
  let scrollTop = document.firstElementChild.scrollTop;
  let viewportHeight = document.firstElementChild.clientHeight;

  programsArray.forEach((item, index) => {
    let itemTop = item.offsetTop;

    if (scrollTop > itemTop + viewportHeight / 1.7) {
      item.classList.add('programs-list--item__scroll');

      if (index == programsArray.length - 1) {
        removeEventListener('scroll', elementAnimationScroll);
      }
    }
  });
};

addEventListener('scroll', elementAnimationScroll);
