jQuery(document).ready(function($){
  'use strict';
	$(function() {
    var btns = $('.js-link-secondary');
    var btn;

    btns.bind('click', function(e) {
      e.preventDefault();
      btn = $(this);
      btns.not(btn).parent().removeClass('active');
      btn.parent().toggleClass('active');

      setTimeout( function(){
          $('.nano').nanoScroller({});
      }, 300);
    });

  });
});
