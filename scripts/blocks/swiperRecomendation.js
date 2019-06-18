'use strict';

(function() {

  var item = document.querySelector('.js-recommend')

  if (item) {
    var swiper = new Swiper('.js-recommend', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.js-recommend-next',
        prevEl: '.js-recommend-prev',
      },
      breakpoints: {
        920: {
          slidesPerView: 2,
          // spaceBetween: 40,
        },
        520: {
          slidesPerView: 1,
          pagination: {
            el: '.js-recommend-bullet',
            clickable: true,
            bulletClass: 'bullet__item',
          },
        }
      }
    });
  }

})();
