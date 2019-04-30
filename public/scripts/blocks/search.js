'use strict';

(function() {

  var block = document.querySelector('.js-search');
  var btnClose = document.querySelector('.js-search-close');
  var btn = document.querySelector('.js-search-button');
  var ESC = 27;

  var toggle = function() {
    block.classList.toggle('active');
    btn.classList.toggle('active');
  };

  var close = function() {
    block.classList.remove('active');
    btn.classList.remove('active');
  }

  var onBtnClick = function(e) {
    e.preventDefault();
    toggle();
  };

  var onBtnCloseClick = function(e) {
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
  btnClose.addEventListener('click', onBtnCloseClick);
  document.addEventListener('keyup', onEscKeyup);

})();
