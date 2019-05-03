'use strict';

(function() {
  var btn = document.querySelector('.js-aside-nav-button');

  if(btn) {
    btn.addEventListener('click', function(e) {
      e.currentTarget.parentNode.classList.toggle('active');
    });
  }

})();

'use strict';

(function() {
  baron({
    root: '.baron',
    scroller: '.baron__scroller',
    bar: '.baron__bar',
  });


  // baron({
  //   root: '.baron-reviews-item',
  //   scroller: '.baron__scroller',
  //   bar: '.baron__bar',
  // });

})();

'use strict';

(function() {

  var header = document.querySelector('.js-header');
  var dialogs = header.querySelectorAll('.js-dialog');
  // поиск
  var dialogSearch = header.querySelector('.js-dialog-search');
  var classSearch = 'js-dialog-search';
  var btnSearch = header.querySelector('.js-button-search');
  var btnCloseSearch = dialogSearch.querySelector('.js-close-search');
  // телефоны
  var dialogCallback = header.querySelector('.js-dialog-callback');
  var classCallback = 'js-dialog-callback';
  var btnCallback = header.querySelector('.js-button-callback');
  var btnCloseCallback = dialogCallback.querySelector('.js-close-callback');

  var ESC = 27;

  var openDialog = function(dialog, className, btn, btnClose) {

    var open = function() {
      for (var i = 0; i < dialogs.length; i += 1) {
        if (!dialogs[i].classList.contains(className)) {
          dialogs[i].classList.remove('active');
        }
      }

      dialog.classList.toggle('active');
      btn.classList.toggle('active');
    };

    var close = function() {
      dialog.classList.remove('active');
      btn.classList.remove('active');
    }

    var onBtnClick = function(e) {
      e.preventDefault();
      open();
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
  };

  openDialog(dialogSearch, classSearch, btnSearch, btnCloseSearch);
  openDialog(dialogCallback, classCallback, btnCallback, btnCloseCallback);

})();

'use strict';

(function() {
  var inputsTel = document.querySelectorAll('input[type="tel"]');
  var textareas = document.querySelectorAll('textarea');

  for (var i = 0; i < inputsTel.length; i += 1) {
    var maskTel = new IMask(
      inputsTel[i], {
        mask: '+{7}(000)000-00-00',
      }
    );
  }

  for (var i = 0; i < textareas.length; i += 1) {
    textareas[i].innerHTML = textareas[i].innerHTML.trim();
  }

})();

$(document).ready(function (){
  var header = $('.js-header');
  var SCROLL_HEIGHT = 200;
  var WIDTH = 1570;

  if (+$(window).width() < WIDTH) {
    $(window).scroll(function(){
      if ( $(this).scrollTop() > SCROLL_HEIGHT ){
        header.addClass('active');
      } else if($(this).scrollTop() <= SCROLL_HEIGHT && header.hasClass('active')) {
        header.removeClass('active');
      }
    });
  }
});

objectFitImages();
svg4everybody();
picturefill();
// new WOW().init();

'use strict';

(function() {

  var btns = document.querySelectorAll('.js-link-secondary');

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(e) {
      e.preventDefault();
      // for (var j = 0; j < btns.length; j++) {
      //   btns[j].parentNode.classList.remove('active');
      // }
      e.currentTarget.parentNode.classList.toggle('active');
    });
  }

})();

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

(function() {
  var btnsClose = document.querySelectorAll('.js-close-modal');
  var modals = document.querySelectorAll('.js-modal');
  var overlays = document.querySelectorAll('.js-overlay-modal');
  var btnsCallback = document.querySelectorAll('.js-open-callback');
  var callback = document.querySelector('.js-modal-callback');
  var ESC = 27;

  var closeModal = function() {
    for (var i = 0; i < modals.length; i += 1) {
      modals[i].classList.remove('active');
    }
  }

  // Закрывает модальное окно по клику на крестик
  for (var i = 0; i < btnsClose.length; i += 1) {
    btnsClose[i].addEventListener('click', function(e) {
      e.preventDefault();
      e.currentTarget.parentNode.parentNode.classList.remove('active');
    });
  }

  // Закрывает модальное окно по клику на оверлей
  for (var i = 0; i < overlays.length; i += 1) {
    overlays[i].addEventListener('click', function(e) {
      e.preventDefault();
      e.currentTarget.parentNode.classList.remove('active');
    });
  }

  // включает модальное окно "Записаться на прием"
  for (var i = 0; i < btnsCallback.length; i += 1) {
    btnsCallback[i].addEventListener('click', function(e) {
      e.preventDefault();
      callback.classList.add('active');
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

(function($) {
	'use strict';
	$(function() {

    var btns = $('.js-show-more-button');
    var items = '.js-show-more-item-2:nth-child(n+3)';

    if (btns) {
      btns.on('click', function(e){
        e.preventDefault();
        $(this).parents('.js-show-more').find(items).toggleClass('active');
      });
    }

	});
})(jQuery);

'use strict';

(function() {

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
  });

})();

'use strict';

(function() {

  var tabs = document.querySelector('.js-tabs');

  if(tabs) {
    var btns = tabs.querySelectorAll('.js-button-tabs');
    var contents = tabs.querySelectorAll('.js-content-tabs');

    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function (e) {
        e.preventDefault();
        var tab = e.currentTarget;
        var atr = tab.getAttribute('data-tab');

        for (var j = 0; j < contents.length; j++) {
          contents[j].classList.remove('active');
        };

        for (var j = 0; j < btns.length; j++) {
          btns[j].parentNode.classList.remove('active');
        };

        tab.parentNode.classList.add('active');
        document.querySelector("." + atr).classList.add('active');
      });
    }
  }

})();
