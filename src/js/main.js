import {debounce} from './debounce';

const main = () => {

  const fadeLeft = Array.from(document.querySelectorAll('.fadeLeft'));
  const fadeRight = Array.from(document.querySelectorAll('.fadeReft'));

  function checkContent() {
    
  }


  window.addEventListener('scroll', debounce(checkContent, 15));
}

document.addEventListener('DOMContentLoaded', main)
