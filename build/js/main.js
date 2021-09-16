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
const phoneRegEx =  /^(\+7|8)?(\(\d{3}\)|\d{3})\d{7}$/;
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
      iconUrl: 'map-pin.png',
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