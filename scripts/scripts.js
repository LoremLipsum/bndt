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

        $('html, body').animate({
          scrollTop: $(attr).offset().top
        }, 500);
      });
    }

  });
});

(function($) {
	'use strict';
	$(function() {
    var btn = $('.js-page-up');
    var lastScrollTop = 0;
    var SCROLL_HEIGHT = 200;

    $(window).scroll(function(e){
      var st = $(this).scrollTop();
      if (st > lastScrollTop || st < SCROLL_HEIGHT) {
        btn.removeClass('active');
      } else  {
        btn.addClass('active');
      }
      lastScrollTop = st;
    });

    btn.click(function (){
      $('html, body').animate({
        scrollTop: 0
      }, 500);
    });

	});
})(jQuery);

jQuery(document).ready(function($){
  'use strict';
	$(function() {

    var btns = $('.js-catalog-nav-link');
    var btn;
    var screenWidth = $(window).outerWidth();

    if(btns.length) {

      var open = function() {
        if (screenWidth < 1023) {
          btns.bind('click', function(e) {
            e.preventDefault();
            btn = $(this);
            btns.not(btn).parent().removeClass('active');
            btn.parent().toggleClass('active');
          });
        }
      }

      open();

      $(window).resize(function() {
        open();
      });
    }

  });
});

'use strict';

(function() {
  var counters = document.querySelectorAll('.js-counter');

  if(counters.length) {
    var downClass = 'js-counter-down';
    var upClass = 'js-counter-up';
    var inputClass = '.js-counter-input';
    var input;
    var count;
    var el;

    for (var i = 0; i < counters.length; i += 1) {
      counters[i].addEventListener('click', function(e) {
        e.preventDefault();
        input = e.currentTarget.querySelector(inputClass);
        el = e.target;
        count = parseInt(input.getAttribute('data-count'), 10);

        if (el.classList.contains(downClass)) {
          count = count == 1 ? count : (count - 1);
        } else if (el.classList.contains(upClass)){
          count += 1;
        }

        input.value = count;
        input.setAttribute('data-count', count);
      });
    }

  }
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

jQuery(document).ready(function($){
  'use strict';
	$(function() {
    var header = $('.js-header');
    var lastScrollTop = 0;
    var width = $(window).outerWidth();

    var scrollHeader = function(height) {
      $(window).scroll(function(e){
        var st = $(this).scrollTop();
        if (st > lastScrollTop || st < height) {
          header.removeClass('active');
        } else  {
          header.addClass('active');
        }
        lastScrollTop = st;
      });
    }

    var initScrollHeader = function() {
      if (width < 520) {
        scrollHeader(60);
      } else if (width > 519 && width < 920) {
        scrollHeader(64);
      } else if (width > 920 && width < 1570) {
        scrollHeader(70);
      }
    }

    initScrollHeader();

    $(window ).resize(function() {
      initScrollHeader();
    });

  });
});

objectFitImages();
svg4everybody();
// picturefill();
// new WOW().init();

jQuery(document).ready(function($){
  'use strict';
	$(function() {

    var btns = $('.js-main-nav-link');
    var btn;
    $('.js-nano-panel').nanoScroller({});

    btns.bind('click', function(e) {
      e.preventDefault();
      btn = $(this);
      btns.not(btn).parent().removeClass('active');
      btn.parent().toggleClass('active');

      setTimeout( function(){
        $('.js-nano-panel').nanoScroller({});
      }, 300);
    });

  });
});

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
  var oneClickBtns = document.querySelectorAll('.js-one-click-button');
  var oneClickModal = document.querySelector('.js-one-click-modal');
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

  for (var i = 0; i < oneClickBtns.length; i += 1) {
    oneClickBtns[i].addEventListener('click', function(e) {
      e.preventDefault();
      oneClickModal.classList.add('active');
      oneClickModal.querySelector(overlayClass).classList.add('active')
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

    $(".js-nano").nanoScroller({ });

  });
});

jQuery(document).ready(function($){
  'use strict';
	$(function() {

    var btns = $('.js-table-store-button');

    if(btns.length) {
      var btn;
      var rows = $('.js-table-store-row');
      var row;
      var heading;
      var attr;
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
        attr = $(active).attr('data-map-coords');
        coords = attr.split(',');
        contentHeading.text(heading);
        initMap(coords);
      } else { // по умолчанию первая строчка таблицы
        row = $('.js-table-store-row')[0];
        heading = $(row).find('.js-table-store-heading').text();
        attr = $(row).attr('data-map-coords');
        coords = attr.split(',');
        contentHeading.text(heading);
        initMap(coords);
      }

      btns.bind('click', function(e) {
        e.preventDefault();
        btn = $(this);
        row = btn.parents('.js-table-store-row');
        heading = row.find('.js-table-store-heading').text();
        attr = row.attr('data-map-coords');
        coords = attr.split(',');
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
  var TABLET = 767;

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
      if(parseInt(window.innerWidth, 10) < TABLET) {
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

  var item = document.querySelector('.js-goods-gallery-main');

  if (item) {
    var navSlider = new Swiper('.js-goods-gallery-nav', {
      grabCursor: true,
      slidesPerView: 'auto',
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      spaceBetween: 30,
      direction: 'vertical',
      autoHeight: true,
      navigation: {
        nextEl: '.js-goods-gallery-next',
        prevEl: '.js-goods-gallery-prev',
        clickable: true,
        disabledClass: 'disabled',
      },
      breakpoints: {
        767: {
          slidesPerView: '3',
          direction: 'horizontal',
          autoHeight: false,
          spaceBetween: 15,
        },
      }
    });

    var mainSlider = new Swiper('.js-goods-gallery-main', {
      grabCursor: true,
      slidesPerView: 1,
      autoHeight: true,
      thumbs: {
        swiper: navSlider,
      },
      navigation: {
        prevEl: '.js-goods-gallery-prev',
        nextEl: '.js-goods-gallery-next',
        clickable: true,
        disabledClass: 'disabled',
      },
    });
  }

})();

jQuery(document).ready(function($){
  'use strict';
	$(function() {

    var slider = undefined;

    function initSlider() {
      var screenWidth = $(window).outerWidth();
      if ((screenWidth < (520)) && (slider == undefined)) {
        slider = new Swiper('.js-new-slider', {
          loop: true,
          grabCursor: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          navigation: {
            nextEl: '.js-new-next',
            prevEl: '.js-new-prev',
          },
          pagination: {
            el: '.js-new-bullet',
            clickable: true,
            bulletClass: 'bullet__item',
          },
        });
      } else if ((screenWidth > 519) && (slider != undefined)) {
        slider.destroy();
        slider = undefined;
        var slider = $('.js-new-slider');
        slider.find('.swiper-wrapper').removeAttr('style');
        slider.find('.swiper-slide').removeAttr('style');
      }
    }

    initSlider();

    $(window).resize(function() {
      initSlider();
    });

  });
});

'use strict';

(function() {

  var item = document.querySelector('.js-recommend')

  if (item) {
    var swiper = new Swiper('.js-recommend', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.js-recommend-next',
        prevEl: '.js-recommend-prev',
      },
      breakpoints: {
        920: {
          slidesPerView: 2,
          // spaceBetween: 40,
        },
        520: {
          slidesPerView: 1,
          pagination: {
            el: '.js-recommend-bullet',
            clickable: true,
            bulletClass: 'bullet__item',
          },
        }
      }
    });
  }

})();

'use strict';

(function() {

  var swiper = new Swiper('.js-swiper-reviews', {
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
      520: {
        slidesPerView: 1,
        pagination: {
          el: '.js-bullet',
          clickable: true,
          bulletClass: 'bullet__item',
        },
      }
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
  var swiperScroll = new Swiper('.js-swiper-scroll', {
    direction: 'vertical',
    slidesPerView: 'auto',
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      snapOnRelease: true,
      grabCursor: true,
      freeMode: true,
    },
    mousewheel: true,
  });
})();

jQuery(document).ready(function($){
  'use strict';
	$(function() {

    var slider = undefined;

    function initSlider() {
      var screenWidth = $(window).outerWidth();
      if ((screenWidth < (520)) && (slider == undefined)) {
        slider = new Swiper('.js-top-slider', {
          loop: true,
          grabCursor: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          navigation: {
            nextEl: '.js-top-next',
            prevEl: '.js-top-prev',
          },
          pagination: {
            el: '.js-top-bullet',
            clickable: true,
            bulletClass: 'bullet__item',
          },
        });
      } else if ((screenWidth > 519) && (slider != undefined)) {
        slider.destroy();
        slider = undefined;
        var slider = $('.js-top-slider');
        slider.find('.swiper-wrapper').removeAttr('style');
        slider.find('.swiper-slide').removeAttr('style');
      }
    }

    initSlider();

    $(window).resize(function() {
      initSlider();
    });

  });
});

'use strict';

(function() {

  var item = document.querySelector('.js-w-product-buy')

  if (item) {
    var swiper = new Swiper('.js-w-product-buy', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.js-w-product-buy-next',
        prevEl: '.js-w-product-buy-prev',
      },
      breakpoints: {
        920: {
          slidesPerView: 2,
          // spaceBetween: 40,
        },
        520: {
          slidesPerView: 1,
          pagination: {
            el: '.js-w-product-buy-bullet',
            clickable: true,
            bulletClass: 'bullet__item',
          },
        }
      }
    });
  }

})();

'use strict';

(function() {

  var tabsSmall= document.querySelectorAll('.js-tabs-small');
  var tabs = document.querySelectorAll('.js-tabs');
  var line;
  var btn;
  var atr;
  var btnsTabsSmall;
  var contentTabsSmall;
  var btnsTabs;
  var contentsTabs;
  var left;
  var width;

  var switchTabs = function (item, btns, contents, classContents, line) {
    for (var i = 0; i < btns.length; i++) {
      if(line) {
        btns[i].addEventListener('mouseover', function(e) {
          e.preventDefault();
          btn = e.currentTarget;
          left = btn.offsetLeft;
          width = btn.clientWidth;
          line.style.left = left + 'px';
          line.style.width = width + 'px';
        });

        if(btns[i].parentNode.classList.contains('active')) {
          left = btns[i].offsetLeft;
          width = btns[i].clientWidth;
          line.style.left = left + 'px';
          line.style.width = width + 'px';
        }
      }

      btns[i].addEventListener('click', function (e) {
        e.preventDefault();
        btn = e.currentTarget;
        atr = btn.getAttribute('data-tab');

        for (var j = 0; j < contents.length; j++) {
          contents[j].classList.remove('active');
        };

        for (var j = 0; j < btns.length; j++) {
          btns[j].parentNode.classList.remove('active');
        };

        btn.parentNode.classList.add('active');
        item.querySelector('.' + classContents + '.' + atr).classList.add('active');
      });
    }
  };

  var initTabs = function () {
    if(tabs) {
      for (var i = 0; i < tabs.length; i += 1) {
        btnsTabs = tabs[i].querySelectorAll('.js-tabs-button');
        contentsTabs = tabs[i].querySelectorAll('.js-tabs-content');
        lineTabs = tabs[i].querySelector('.js-line');
        switchTabs(tabs[i], btnsTabs, contentsTabs, 'js-tabs-content', lineTabs);
      }
    }
  }

  initTabs();

  // табы на мобильной версии
  var initTabsSmall = function() {
    if(parseInt(window.innerWidth, 10) < 920) {
      if(tabsSmall) {
        for (var i = 0; i < tabsSmall.length; i += 1) {
          btnsTabsSmall = tabsSmall[i].querySelectorAll('.js-tabs-button');
          contentTabsSmall = tabsSmall[i].querySelectorAll('.js-tabs-small-content');
          switchTabs(tabsSmall[i], btnsTabsSmall, contentTabsSmall, 'js-tabs-small-content');
        }
      }
    }
  };

  initTabsSmall();

  window.addEventListener('resize', function() {
    initTabsSmall();
  });

})();

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

jQuery(document).ready(function($){
  'use strict';
	$(function() {

    var propertyBtns = $('.js-property-size');
    var paginationBtns = $('.js-pagination-link');
    var btn;

    var toggle = function(btns) {
      btns.bind('click', function(e) {
        e.preventDefault();
        btn = $(this);
        btns.not(btn).parent().removeClass('active');
        btn.parent().toggleClass('active');
      });
    }

    if(propertyBtns.length) {
      toggle(propertyBtns);
    }

    if(paginationBtns.length) {
      toggle(paginationBtns);
    }

  });
});
