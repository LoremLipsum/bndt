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
