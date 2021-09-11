const MAP_CENTER = [59.938635, 30.323118];
const MAP_ZOOM = 16;
const ICON_IMAGE_SIZE = [57, 53];
const ICON_IMAGE_OFFSET = [-25, -45];
const ymaps = window.ymaps;

const addInteractiveMap = () => {
  if (document.querySelector('#map')) {
    ymaps.ready(() => {
      const myMap = new ymaps.Map('map', {
          center: MAP_CENTER,
          zoom: MAP_ZOOM,
        }, {
          searchControlProvider: 'yandex#search',
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
          iconLayout: 'default#image',
          iconImageHref: '../img/map-pin.png',
          iconImageSize: ICON_IMAGE_SIZE,
          iconImageOffset: ICON_IMAGE_OFFSET,
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
