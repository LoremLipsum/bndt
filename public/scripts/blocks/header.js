'use strict';

(function() {

  var block = document.querySelector('.js-main-nav');
  var btn = document.querySelector('.js-button-nav');
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

  var onEscKeyup = function(e) {
    if (e.keyCode === ESC) {
      e.preventDefault();
      close();
    }
  };

  btn.addEventListener('click', onBtnClick);
  document.addEventListener('keyup', onEscKeyup);

})();
