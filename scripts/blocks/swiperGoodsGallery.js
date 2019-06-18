'use strict';

(function() {

  var item = document.querySelector('.js-goods-gallery-main');

  if (item) {
    var navSlider = new Swiper('.js-goods-gallery-nav', {
      grabCursor: true,
      slidesPerView: 'auto',
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      spaceBetween: 30,
      direction: 'vertical',
      autoHeight: true,
      navigation: {
        nextEl: '.js-goods-gallery-next',
        prevEl: '.js-goods-gallery-prev',
        clickable: true,
        disabledClass: 'disabled',
      },
      breakpoints: {
        767: {
          slidesPerView: '3',
          direction: 'horizontal',
          autoHeight: false,
          spaceBetween: 15,
        },
      }
    });

    var mainSlider = new Swiper('.js-goods-gallery-main', {
      grabCursor: true,
      slidesPerView: 1,
      autoHeight: true,
      thumbs: {
        swiper: navSlider,
      },
      navigation: {
        prevEl: '.js-goods-gallery-prev',
        nextEl: '.js-goods-gallery-next',
        clickable: true,
        disabledClass: 'disabled',
      },
    });
  }

})();
