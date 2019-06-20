jQuery(document).ready(function($){
  'use strict';
	$(function() {

    var btns = $('.js-property-size');
    var btn;

    if(btns.length) {
      btns.bind('click', function(e) {
        e.preventDefault();
        btn = $(this);
        btns.not(btn).parent().removeClass('active');
        btn.parent().toggleClass('active');
      });
    }

  });
});
