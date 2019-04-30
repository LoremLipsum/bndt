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
