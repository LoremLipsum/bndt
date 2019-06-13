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
