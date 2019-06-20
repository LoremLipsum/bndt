jQuery(document).ready(function($){
  'use strict';
	$(function() {

    var toFly = function(btns, mob, desk) {

      btns.bind('click', function (e) {
        e.preventDefault();
        var el = $(this);

        var coordsBtn = {
          top: $(el).offset().top,
          left: $(el).offset().left,
        };

        if($(window).width() < 1570) {
          var coordsTarget = {
            top: $(mob).offset().top,
            left: $(mob).offset().left,
          };
        } else {
          var coordsTarget = {
            top: $(desk).offset().top,
            left: $(desk).offset().left ,
          };
        }

        var distance = {
          x: coordsBtn.left > coordsTarget.left ? '-' + (coordsBtn.left - coordsTarget.left) : Math.abs(coordsBtn.left - coordsTarget.left),
          y: coordsBtn.top > coordsTarget.top ?  '-' + (coordsBtn.top - coordsTarget.top) : Math.abs(coordsBtn.top - coordsTarget.top),
        }

        var clone = el.clone()
        .css(
          {
            position : 'absolute',
            'z-index' : '9999',
            top: coordsBtn.top,
            left: coordsBtn.left,
          }
        );

        clone.appendTo('body');
        clone.animate({  textIndent: 0 }, {
            step: function(now,fx) {
              $(this).css({
                'opacity': 0.2,
                'transform': 'translate3d(' + distance.x + 'px, ' + distance.y +  'px, 0)',
              });
            },
            duration: 1000,
        },'easy-out');

        setTimeout( function(){
          clone.remove();
        }, 300);
      })
    };

    var btnsCart = $('.js-to-cart');
    var cartMob = $('.js-cart-target-mob');
    var cartDesk = $('.js-cart-target-desk');

    if(btnsCart.length) {
      toFly(btnsCart, cartMob, cartDesk);
    }

    var btnsWishlist = $('.js-to-wishlist');
    var wishlistMob = $('.js-wishlist-target-mob');
    var wishlistDesk = $('.js-wishlist-target-desk');

    if(btnsWishlist.length) {
      toFly(btnsWishlist, wishlistMob, wishlistDesk);
    }

  });
});
