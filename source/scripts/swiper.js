'use strict';

(function() {

  var swiperReviews = new Swiper('.js-swiper-reviews', {
    slidesPerView: 2,
    spaceBetween: 160,
    loop: true,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1220: {
        slidesPerView: 2,
        spaceBetween: 110,
      },
      768: {
        slidesPerView: 1,
        // spaceBetween: 40,
      },
    }
  });

  var swiperScroll = new Swiper('.js-swiper-scroll', {
    direction: 'vertical',
    slidesPerView: 'auto',
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      snapOnRelease: true,
      grabCursor: true,
    },
    mousewheel: true,
  });
})();
