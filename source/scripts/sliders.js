(function($) {
	'use strict';
	$(function() {

    $('.slider-company').slick({
      arrows: true,
      dots: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
			autoplaySpeed: 5000,
      infinite: true,
      prevArrow: '<button class="control control--prev" type="button" tabindex="0" aria-lable="Назад"><svg class="control__icon" width="30" height="20"><use xlink:href="assets/images/sprites/sprite.svg#arrow"></use></svg></button>',
      nextArrow: '<button class="control control--next" type="button" tabindex="0" aria-lable="Вперёд"><svg class="control__icon" width="30" height="20"><use xlink:href="assets/images/sprites/sprite.svg#arrow"></use></svg></button>',
      responsive: [
        {
          breakpoint: 1120,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            centerMode: false,
            variableWidth: false,
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
          }
        },

      ]
    });

    $('.js-slider-brends').slick({
      arrows: true,
      dots: false,
      slidesToShow: 8,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      prevArrow: '<button class="control control--prev" type="button" tabindex="0" aria-lable="Назад"><svg class="control__icon" width="30" height="20"><use xlink:href="assets/images/sprites/sprite.svg#arrow"></use></svg></button>',
      nextArrow: '<button class="control control--next" type="button" tabindex="0" aria-lable="Вперёд"><svg class="control__icon" width="30" height="20"><use xlink:href="assets/images/sprites/sprite.svg#arrow"></use></svg></button>',
      responsive: [
        {
          breakpoint: 1220,
          settings: {
            slidesToShow: 7,
          }
        },
        {
          breakpoint: 1020,
          settings: {
            slidesToShow: 6,
          }
        },
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });

	});
})(jQuery);
