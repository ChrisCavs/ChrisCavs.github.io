import {debounce} from './debounce';

const main = () => {

  const fadeLeft = Array.from(document.querySelectorAll('.fadeLeft'));
  const fadeRight = Array.from(document.querySelectorAll('.fadeRight'));

  fadeRight.forEach(item => {
    console.log(item.previousSibling);
    item.previousSibling.addEventListener('transitionend', function() {
      item.classList.add('active');
    })
  });

  function checkContent() {

    fadeLeft.forEach(item => {

      let slideInAt = (window.scrollY + window.innerHeight - 50);

      if (slideInAt >= item.offsetTop) {
        item.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', debounce(checkContent, 15));


}

document.addEventListener('DOMContentLoaded', main)
