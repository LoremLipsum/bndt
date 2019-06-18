jQuery(document).ready(function($){
  'use strict';
	$(function() {

    var btns = $('.js-catalog-nav-link');
    var btn;
    var screenWidth = $(window).outerWidth();

    if(btns.length) {

      var open = function() {
        if (screenWidth < 1023) {
          btns.bind('click', function(e) {
            e.preventDefault();
            btn = $(this);
            btns.not(btn).parent().removeClass('active');
            btn.parent().toggleClass('active');
          });
        }
      }

      open();

      $(window).resize(function() {
        open();
      });
    }

  });
});
