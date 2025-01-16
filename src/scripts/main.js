'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', () => {
  event.preventDefault();

  const link = event.target.closest('a');

  if (!link) {
    return;
  }

  largeImg.src = link.href;
  largeImg.alt = link.title;
});
