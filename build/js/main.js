/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./source/js/header.js
const ESC_CODE = 27;
const body = document.querySelector('body');
const menuButton = document.querySelector('.header__menu-button');
const navigationlink = document.querySelectorAll('.header__nav-link');

const closeMenu = () => {
  body.classList.remove('header--menu-open');
};

const checkJS = () => {
  body.classList.remove('no-js');
};

const clickButton = () => {
  menuButton.addEventListener('click', () => {
    body.classList.toggle('header--menu-open');
  });
};

const closeByLink = () => {
  navigationlink.forEach((close) => {
    close.addEventListener('click', closeMenu);
  });
};

const closeByEsc = () => {
  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === ESC_CODE) {
      closeMenu();
    }
  });
};

const workHeader = () => {
  checkJS();
  clickButton();
  closeByLink();
  closeByEsc();
};



;// CONCATENATED MODULE: ./source/js/validation.js
const ZERO_VALUE = 0;
const MIN_NAME_LENGTH = 2;
const phoneRegEx = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
const validation_form = document.querySelector('.main__feedback');
const nameField = document.querySelector('#user_name');
const phoneField = document.querySelector('#user_phone');
const buttonSubmit = document.querySelector('.main__feedback-button');

const setErrorStyle = (object) => {
  object.style.border = '1px solid rgb(255, 0, 0)';
};

const removeError = (object) => {
  object.removeAttribute('style');
};

const changeButtonText = () => {
  buttonSubmit.textContent = 'Подобрать велосипед мечты';
};

const checkName = () => {
  nameField.addEventListener('blur', () => {
    if (nameField.value.length < MIN_NAME_LENGTH) {
      setErrorStyle(nameField);
    } else if (nameField.value.length > MIN_NAME_LENGTH) {
      removeError(nameField);
    }

    if (nameField.value.length === ZERO_VALUE) {
      removeError(nameField);
    }
  });
};

const checkPhone = () => {
  phoneField.addEventListener('blur', () => {
    if (!phoneRegEx.test(phoneField.value)) {
      setErrorStyle(phoneField);
    } else if (phoneRegEx.test(phoneField.value)) {
      removeError(phoneField);
    }

    if (phoneField.value.length === ZERO_VALUE) {
      removeError(phoneField);
    }
  });
};

const stopSubmit = () => {
  validation_form.addEventListener('change', () => {
    checkName();
    checkPhone();
  });
  buttonSubmit.addEventListener('click', (evt) => {
    if (nameField.hasAttribute('style') || phoneField.hasAttribute('style')) {
      evt.preventDefault();
    }
  });
};

const sentForm = () => {
  validation_form.addEventListener('submit', (evt) => {
    if (!nameField.hasAttribute('style') && !phoneField.hasAttribute('style')) {
      evt.preventDefault();
      localStorage.setItem('name', nameField.value);
      localStorage.setItem('tel', phoneField.value);
      validation_form.reset();
      buttonSubmit.textContent = 'Форма Отправлена';
      setTimeout(changeButtonText, 2500);
    }
  });
};

const workForm = () => {
  stopSubmit();
  sentForm();
};



;// CONCATENATED MODULE: ./source/js/video.js
const video = document.querySelector('.video__content');
const videoButton = document.querySelector('.video__button');

const workVideo = () => {
  videoButton.addEventListener('click', () => {
    videoButton.classList.add('visually-hidden');
    video.setAttribute('controls', 'controls');
    video.play();
  });
};



;// CONCATENATED MODULE: ./source/js/map.js
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



;// CONCATENATED MODULE: ./source/js/main.js





const err = 1;

if(document.querySelector('.header')) {
  workHeader();
} else {
  err + 1;
}

if(document.querySelector('.main__feedback')) {
  workForm();
} else {
  err + 1;
}

if(document.querySelector('.video')) {
  workVideo();
} else {
  err + 1;
}

if(document.querySelector('#map')) {
  addInteractiveMap();
} else {
  err + 1;
}

/******/ })()
;