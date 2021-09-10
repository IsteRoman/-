const MAP_CENTER_X = 59.938635;
const MAP_CENTER_Y = 30.323118;
const MAP_ZOOM = 16;
const ICON_IMAGE_SIZE_X = 57;
const ICON_IMAGE_SIZE_Y = 53;
const ICON_IMAGE_OFFSET_X = -25;
const ICON_IMAGE_OFFSET_Y = -45;
const ymaps = window.ymaps;

const addInteractiveMap = () => {
  if (document.querySelector('#map')) {
    ymaps.ready(() => {
      const myMap = new ymaps.Map('map', {
          center: [MAP_CENTER_X, MAP_CENTER_Y],
          zoom: MAP_ZOOM,
        }, {
          searchControlProvider: 'yandex#search',
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
          iconLayout: 'default#image',
          iconImageHref: '../img/map-pin.png',
          iconImageSize: [ICON_IMAGE_SIZE_X, ICON_IMAGE_SIZE_Y],
          iconImageOffset: [ICON_IMAGE_OFFSET_X, ICON_IMAGE_OFFSET_Y],
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
