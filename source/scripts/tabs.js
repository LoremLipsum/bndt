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
