jQuery(document).ready(function($){
  'use strict';
	$(function() {

    var btns = $('.js-link-secondary');
    var btn;

    btns.on('click', function(e) {
      e.preventDefault();
      btn = $(this);
      btns.not(btn).parent().removeClass('active');
      btn.parent().toggleClass('active');
    });

  });
});
