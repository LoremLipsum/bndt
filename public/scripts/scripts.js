'use strict';

(function() {
  baron({
    root: '.baron',
    scroller: '.baron__scroller',
    bar: '.baron__bar',
  });
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

// 'use strict';
//
// (function() {
//   var gallery = document.querySelector('.js-gallery');
//   var btn = gallery.querySelector('.js-button-gallery');
//   var items4 = gallery.querySelectorAll('.js-item-gallery:nth-child(n+5)');
//   var items6 = gallery.querySelectorAll('.js-item-gallery:nth-child(n+7)');
//   var items9 = gallery.querySelectorAll('.js-item-gallery:nth-child(n+10)');
//   var text;
//
//   if (gallery) {
//     btn.addEventListener('click', function(e) {
//       if(parseInt(window.innerWidth, 10) < 420) {
//         for (var i = 0; i < items4.length; i += 1) {
//           items4[i].classList.toggle('active');
//         }
//       } else if (parseInt(window.innerWidth, 10) < 768) {
//         for (var i = 0; i < items6.length; i += 1) {
//           items6[i].classList.toggle('active');
//         }
//       } else if (parseInt(window.innerWidth, 10) > 768) {
//         for (var i = 0; i < items9.length; i += 1) {
//           items9[i].classList.toggle('active');
//         }
//       }
//
//       text = e.currentTarget.innerText === 'Скрыть' ? 'Загрузить еще' : 'Скрыть';
//       e.currentTarget.innerText = text;
//     })
//   }
//
// })();

'use strict';

(function() {
  var header = document.querySelector('.js-header');
  var SCROLL_HEIGHT = 60;
  var WIDTH = 1570;

  if (parseInt(window.innerWidth, 10) < WIDTH) {
    window.addEventListener('scroll', function(e) {
      if (parseInt(window.pageYOffset, 10) > SCROLL_HEIGHT ){
        header.classList.add('active');
      } else if(parseInt(window.pageYOffset, 10) <= SCROLL_HEIGHT && header.hasClass('active')) {
        header.classList.remove('active');
      }
    });
  }

})();

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

// 'use strict';
//
// (function() {
//   var grid = document.querySelector('.js-gallery-list');
//   var sizer = document.querySelector('.gallery__item');
//
//   var msnry = new Masonry( grid, {
//     // options...
//     itemSelector: '.gallery__item',
//     columnWidth: sizer,
//     percentPosition: true
//   });
// })();

'use strict';

(function() {
  var btnsClose = document.querySelectorAll('.js-close-modal');
  var modals = document.querySelectorAll('.js-modal');
  var overlays = document.querySelectorAll('.js-overlay-modal');
  var btnsCallback = document.querySelectorAll('.js-open-callback');
  var callback = document.querySelector('.js-modal-callback');
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
    });
  }

  // Закрывает модальное окно по клику на оверлей
  for (var i = 0; i < overlays.length; i += 1) {
    overlays[i].addEventListener('click', function(e) {
      e.preventDefault();
      e.currentTarget.parentNode.classList.remove('active');
    });
  }

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

jQuery(document).ready(function($){
  'use strict';
	$(function() {

    var btns = $('.js-table-store-button');

    if(btns.length) {
      var btn;
      var rows = $('.js-table-store-row');
      var row;
      var heading;
      var atr;
      var coords;
      var mapItem = $('#our-stores-map');
      var content = $('.js-our-stores-section');
      var contentHeading = content.find('.js-our-stores-heading');
      var active = $('.js-table-store-row.active');

      var initMap = function(coords) {
        ymaps.ready(function () {
          var map = new ymaps.Map('our-stores-map', {
            center: coords,
            zoom: 18,
            scrollZoom: false,
            controls: []
          }, {
            searchControlProvider: 'yandex#search'
          }),

          Placemark = new ymaps.Placemark(coords, {
            balloonContent: ''
          }, {
            iconLayout: 'default#image',
            iconImageHref: 'assets/images/icon.png',
            iconImageSize: [40, 54],
            iconImageOffset: [-20, -68],
          });

          map.geoObjects.add(Placemark);
          map.behaviors.disable('scrollZoom');
          map.controls.add('zoomControl');
          var roadcontrolState = map.controls.get('zoomControl').state.get('size');
          map.controls.get('zoomControl').options.set('size', 'small');
        })
      }

      // если есть активный класс
      if(active.length) {
        heading = $(active).find('.js-table-store-heading').text();
        atr = $(active).attr('data-map-coords');
        coords = atr.split(',');
        contentHeading.text(heading);
        initMap(coords);
      } else { // по умолчанию первая строчка таблицы
        row = $('.js-table-store-row')[0];
        heading = $(row).find('.js-table-store-heading').text();
        atr = $(row).attr('data-map-coords');
        coords = atr.split(',');
        contentHeading.text(heading);
        initMap(coords);
      }

      btns.bind('click', function(e) {
        e.preventDefault();
        btn = $(this);
        row = btn.parents('.js-table-store-row');
        heading = row.find('.js-table-store-heading').text();
        atr = row.attr('data-map-coords');
        coords = atr.split(',');
        contentHeading.text(heading);
        mapItem.html('');
        row = btn.parents('.js-table-store-row');
        initMap(coords);

        $('html, body').animate({
          scrollTop: content.offset().top
        }, 500);
      })
    }
  });
});

'use strict';

(function() {
  var btnsAll = document.querySelectorAll('.js-more-button');
  var btnsMob = document.querySelectorAll('.js-more-button-mob');
  var content;
  var atr;
  var hiddenItems;
  var btn;
  var text;
  var TABLET = 768;

  var show = function(btns) {
    for (var i = 0; i < btns.length; i += 1) {
      content = btns[i].parentNode.querySelector('.js-more-content');
      atr = parseInt(content.getAttribute('data-more'), 10);
      hiddenItems = content.querySelectorAll('.js-more-content > *:nth-child(n + ' + (atr + 1) + ')');
      for (var j = 0; j < hiddenItems.length; j += 1) {
        hiddenItems[j].classList.add('js-hidden');
      }

      btns[i].addEventListener('click', function(e) {
        e.preventDefault();
        btn = e.currentTarget;
        content = btn.parentNode.querySelector('.js-more-content');
        atr = parseInt(content.getAttribute('data-more'), 10);
        hiddenItems = content.querySelectorAll('.js-more-content > *:nth-child(n + ' + (atr + 1) + ')');
        console.log(hiddenItems);
        for (var j = 0; j < hiddenItems.length; j += 1) {
          hiddenItems[j].classList.toggle('js-hidden');
        }
        text = btn.textContent === 'Скрыть' ? 'Смотреть больше' : 'Скрыть';
        btn.textContent = text;
      })
    }
  };

  if (btnsAll.length) {
    show(btnsAll);
  }

  if(btnsMob.length) {
    var showMob = function() {
      if(parseInt(window.innerWidth, 10) < 768) {
        show(btnsMob);
      }
    };

    showMob();

    window.addEventListener('resize', function() {
      showMob();
    });
  }

})();

'use strict';

(function() {

  var swiperReviews = new Swiper('.js-swiper-reviews', {
    slidesPerView: 2,
    spaceBetween: 160,
    loop: true,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    breakpoints: {
      1220: {
        slidesPerView: 2,
        spaceBetween: 110,
      },
      768: {
        slidesPerView: 1,
        // spaceBetween: 40,
      },
    }
  });

  var swiperScroll = new Swiper('.js-swiper-scroll', {
    direction: 'vertical',
    slidesPerView: 'auto',
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      snapOnRelease: true,
      grabCursor: true,
    },
    mousewheel: true,
  });
})();

'use strict';

(function() {

  var tabs = document.querySelector('.js-tabs');

  if(tabs) {
    var btns = tabs.querySelectorAll('.js-button-tabs');
    var contents = tabs.querySelectorAll('.js-content-tabs');
    var line = tabs.querySelector('.js-line');

    var getLineSize = function(left, width) {
      line.style.left = left + 'px';
      line.style.width = width + 'px';
    };

    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function (e) {
        e.preventDefault();
        var tab = e.currentTarget;
        var atr = tab.getAttribute('data-tab');
        var left = tab.offsetLeft;
        var width = tab.clientWidth;

        for (var j = 0; j < contents.length; j++) {
          contents[j].classList.remove('active');
        };

        for (var j = 0; j < btns.length; j++) {
          btns[j].classList.remove('active');
        };

        tab.classList.add('active');
        document.querySelector("." + atr).classList.add('active');

        getLineSize(left, width);
      });

      btns[i].addEventListener('mouseover', (e) => {
        e.preventDefault();
        var tab = e.currentTarget;
        var left = tab.offsetLeft;
        var width = tab.clientWidth;

        getLineSize(left, width);
      });

      if(btns[i].classList.contains('active')) {
        var left = btns[i].offsetLeft;
        var width = btns[i].clientWidth;

        getLineSize(left, width);
      }
    }
  }
})();
