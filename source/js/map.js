const addInteractiveMap = () => {
  if (document.querySelector('#map')) {
    ymaps.ready(() => {
      const myMap = new ymaps.Map('map', {
          center: [59.938635, 30.323118],
          zoom: 16,
        }, {
          searchControlProvider: 'yandex#search',
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
          iconLayout: 'default#image',
          iconImageHref: '../img/map-pin.png',
          iconImageSize: [57, 53],
          iconImageOffset: [-25, -45],
        });

      myMap.controls.remove('geolocationControl');
      myMap.controls.remove('searchControl');
      myMap.controls.remove('trafficControl');
      myMap.controls.remove('typeSelector');
      myMap.controls.remove('fullscreenControl');
      myMap.controls.remove('rulerControl');
      myMap.behaviors.disable('scrollZoom');
      myMap.geoObjects.add(myPlacemark);
    });
  }
};

export {addInteractiveMap};
