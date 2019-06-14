'use strict';

(function() {
  var btnsClose = document.querySelectorAll('.js-close-modal');
  var modals = document.querySelectorAll('.js-modal');
  var overlays = document.querySelectorAll('.js-overlay-modal');
  var overlayClass = '.js-overlay-modal';
  var callbackBtns = document.querySelectorAll('.js-callback-button');
  var callbackModal = document.querySelector('.js-callback-modal');
  var loginBtns = document.querySelectorAll('.js-login-button');
  var loginModal = document.querySelector('.js-login-modal');
  var ESC = 27;

  var close = function() {
    for (var i = 0; i < modals.length; i += 1) {
      modals[i].classList.remove('active');
    }
  }

  // Закрывает модальное окно по клику на крестик
  for (var i = 0; i < btnsClose.length; i += 1) {
    btnsClose[i].addEventListener('click', function(e) {
      e.preventDefault();
      e.currentTarget.parentNode.parentNode.classList.remove('active');
      e.currentTarget.parentNode.parentNode.querySelector(overlayClass).classList.remove('active');
    });
  }

  // Закрывает модальное окно по клику на оверлей
  for (var i = 0; i < overlays.length; i += 1) {
    overlays[i].addEventListener('click', function(e) {
      e.preventDefault();
      e.currentTarget.parentNode.classList.remove('active');
      overlays[i].remove('active');
    });
  }

  for (var i = 0; i < callbackBtns.length; i += 1) {
    callbackBtns[i].addEventListener('click', function(e) {
      e.preventDefault();
      callbackModal.classList.add('active');
      callbackModal.querySelector(overlayClass).classList.add('active')
    });
  }

  for (var i = 0; i < loginBtns.length; i += 1) {
    loginBtns[i].addEventListener('click', function(e) {
      e.preventDefault();
      loginModal.classList.add('active');
      loginModal.querySelector(overlayClass).classList.add('active')
    });
  }

  var onEscKeyup = function(e) {
    if (e.keyCode === ESC) {
      e.preventDefault();
      close();
    }
  };

  document.addEventListener('keyup', onEscKeyup);
})()
