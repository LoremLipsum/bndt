'use strict';

(function() {

  var item = document.querySelector('.js-w-product-buy')

  if (item) {
    var swiper = new Swiper('.js-w-product-buy', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.js-w-product-buy-next',
        prevEl: '.js-w-product-buy-prev',
      },
      breakpoints: {
        920: {
          slidesPerView: 2,
          // spaceBetween: 40,
        },
        520: {
          slidesPerView: 1,
          pagination: {
            el: '.js-w-product-buy-bullet',
            clickable: true,
            bulletClass: 'bullet__item',
          },
        }
      }
    });
  }

})();
