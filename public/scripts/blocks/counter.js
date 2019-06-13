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
