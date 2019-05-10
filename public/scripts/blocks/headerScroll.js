'use strict';

(function() {
  var header = document.querySelector('.js-header');
  var SCROLL_HEIGHT = 60;
  var WIDTH = 1570;

  if (parseInt(window.innerWidth, 10) < WIDTH) {
    window.addEventListener('scroll', function(e) {
      if (parseInt(window.pageYOffset, 10) > SCROLL_HEIGHT ){
        header.classList.add('active');
      } else if(parseInt(window.pageYOffset, 10) <= SCROLL_HEIGHT && header.hasClass('active')) {
        header.classList.remove('active');
      }
    });
  }

})();
