'use strict';

(function() {

  var btn = document.querySelector('.js-button-nav');
  var block = document.querySelector('.js-panel-main-nav');
  var overlay = document.querySelector('.js-header-overlay');
  var ESC = 27;

  var toggle = function() {
    block.classList.toggle('active');
    btn.classList.toggle('active');
    overlay.classList.toggle('active');
  };

  var close = function() {
    block.classList.remove('active');
    btn.classList.remove('active');
    overlay.classList.remove('active');
  };

  var onBtnClick = function(e) {
    e.preventDefault();
    toggle();
  };

  var onCloseClick = function(e) {
    e.preventDefault();
    close();
  };

  var onEscKeyup = function(e) {
    if (e.keyCode === ESC) {
      e.preventDefault();
      close();
    }
  };

  btn.addEventListener('click', onBtnClick);
  overlay.addEventListener('click', onCloseClick);
  document.addEventListener('keyup', onEscKeyup);

})();


// jQuery(document).ready(function($){
//   'use strict';
// 	$(function() {
//
//     var btn = $('.js-button-nav');
//     var block = $('.js-panel-main-nav');
//     var overlay = $('.js-header-overlay');
//     var ESC = 27;
//
//     var toggle = function() {
//       block.toggleClass('active');
//       btn.toggleClass('active');
//       overlay.toggleClass('active');
//     };
//
//     var close = function() {
//       block.removeClass('active');
//       btn.removeClass('active');
//       overlay.removeClass('active');
//     };
//
//     var onEscKeyup = function(e) {
//       if (e.keyCode === ESC) {
//         e.preventDefault();
//         close();
//       }
//     };
//
//     btn.on('click', function(e) {
//       e.preventDefault();
//       toggle();
//       $(".js-nano-panel").nanoScroller({});
//     });
//     overlay.on('click', function(e) {
//       e.preventDefault();
//       close();
//     });
//     // document.on('keyup', onEscKeyup);
//
//
//
//   });
// });
