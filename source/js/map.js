/* global L:readonly */
const LAT = 59.938635;
const LNG = 30.323118;
const MAP_ZOOM = 16;
const ICON_IMAGE_SIZE = [57, 53];
const ICON_IMAGE_OFFSET = [28, 53];

const addInteractiveMap = () => {
  if (document.querySelector('#map')) {
    const map = L.map('map')
      .setView({
        lat: LAT,
        lng: LNG,
      }, MAP_ZOOM);

    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      },
    ).addTo(map);

    const mainPinIcon = L.icon({
      iconUrl: '../img/map-pin.png',
      iconSize: ICON_IMAGE_SIZE,
      iconAnchor: ICON_IMAGE_OFFSET,
    });

    const marker = L.marker(
      {
        lat: LAT,
        lng: LNG,
      },
      {
        icon: mainPinIcon,
      },
    );

    marker.addTo(map);
  }
};

export {addInteractiveMap};
