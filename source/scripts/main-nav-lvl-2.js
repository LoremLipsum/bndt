jQuery(document).ready(function($){
  'use strict';
	$(function() {

    var btns = $('.js-main-nav-link');
    var btn;
    $('.js-nano-panel').nanoScroller({});

    btns.bind('click', function(e) {
      e.preventDefault();
      btn = $(this);
      btns.not(btn).parent().removeClass('active');
      btn.parent().toggleClass('active');

      setTimeout( function(){
        $('.js-nano-panel').nanoScroller({});
      }, 300);
    });

  });
});
