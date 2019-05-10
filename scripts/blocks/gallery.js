'use strict';

(function() {
  var gallery = document.querySelector('.js-gallery');
  var btn = gallery.querySelector('.js-button-gallery');
  var items4 = gallery.querySelectorAll('.js-item-gallery:nth-child(n+5)');
  var items6 = gallery.querySelectorAll('.js-item-gallery:nth-child(n+7)');
  var items9 = gallery.querySelectorAll('.js-item-gallery:nth-child(n+10)');
  var text;

  if (gallery) {
    btn.addEventListener('click', function(e) {
      if(parseInt(window.innerWidth, 10) < 420) {
        for (var i = 0; i < items4.length; i += 1) {
          items4[i].classList.toggle('active');
        }
      } else if (parseInt(window.innerWidth, 10) < 768) {
        for (var i = 0; i < items6.length; i += 1) {
          items6[i].classList.toggle('active');
        }
      } else if (parseInt(window.innerWidth, 10) > 768) {
        for (var i = 0; i < items9.length; i += 1) {
          items9[i].classList.toggle('active');
        }
      }

      text = e.currentTarget.innerText === 'Скрыть' ? 'Загрузить еще' : 'Скрыть';
      e.currentTarget.innerText = text;
    })
  }

})();
