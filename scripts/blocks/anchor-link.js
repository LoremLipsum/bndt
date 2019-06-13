jQuery(document).ready(function($){
  'use strict';
	$(function() {

    var anchors = $('.js-anchor');
    var el;
    var attr;

    if(anchors.length) {
      anchors.click(function (){
        el = $(this);
        attr = el.attr('href');
        console.log(attr);

        $('html, body').animate({
          scrollTop: $(attr).offset().top
        }, 500);
      });
    }

  });
});
