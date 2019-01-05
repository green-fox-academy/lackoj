'use strict';

const createDivs = (howMany) => {
  const body = document.querySelector('body');
  for (let i = 0; i <= howMany; i++) {
    const div = document.createElement('div');
    const randomColor = '#' + Math.random().toString(16).substr(-6);
    div.style.backgroundColor = randomColor;
    body.appendChild(div);
  };
};

function infiniteScroll(scrollThreshold, callback) {
  window.addEventListener('scroll', () => {
    const currentPosition = window.scrollY + window.innerHeight;
    const refreshPosition = document.body.offsetHeight - scrollThreshold;

    if (currentPosition >= refreshPosition) {
      callback();
    };
  });
};

const randomNumber = Math.floor((Math.random() * 10) + 1);
createDivs(randomNumber);

infiniteScroll(300, () => {
  createDivs(10);
});
