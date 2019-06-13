jQuery(document).ready(function($){
  'use strict';
	$(function() {
    var header = $('.js-header');
    var lastScrollTop = 0;
    var width = $(window).outerWidth();

    var scrollHeader = function(height) {
      $(window).scroll(function(e){
        var st = $(this).scrollTop();
        if (st > lastScrollTop || st < height) {
          header.removeClass('active');
        } else  {
          header.addClass('active');
        }
        lastScrollTop = st;
      });
    }

    var initScrollHeader = function() {
      if (width < 520) {
        scrollHeader(60);
      } else if (width > 519 && width < 920) {
        scrollHeader(64);
      } else if (width > 920 && width < 1570) {
        scrollHeader(70);
      }
    }

    initScrollHeader();

    $(window ).resize(function() {
      initScrollHeader();
    });

  });
});
