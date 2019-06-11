jQuery(document).ready(function($){
  'use strict';
	$(function() {

    var slider = undefined;

    function initSlider() {
      var screenWidth = $(window).outerWidth();
      if ((screenWidth < (520)) && (slider == undefined)) {
        slider = new Swiper('.js-top-slider', {
          loop: true,
          grabCursor: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          navigation: {
            nextEl: '.js-top-next',
            prevEl: '.js-top-prev',
          },
          pagination: {
            el: '.js-top-bullet',
            clickable: true,
            bulletClass: 'bullet__item',
          },
        });
      } else if ((screenWidth > 519) && (slider != undefined)) {
        slider.destroy();
        slider = undefined;
        var slider = $('.js-top-slider');
        slider.find('.swiper-wrapper').removeAttr('style');
        slider.find('.swiper-slide').removeAttr('style');
      }
    }

    initSlider();

    $(window).resize(function() {
      initSlider();
    });

  });
});
