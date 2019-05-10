'use strict';

(function() {
  var grid = document.querySelector('.js-gallery-list');
  var sizer = document.querySelector('.gallery__item');

  var msnry = new Masonry( grid, {
    // options...
    itemSelector: '.gallery__item',
    columnWidth: sizer,
    percentPosition: true
  });
})();
