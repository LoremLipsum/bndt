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
