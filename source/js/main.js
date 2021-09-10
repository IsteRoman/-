import {workHeader} from './header.js';
import {workForm} from './validation.js';
import {workVideo} from './video.js';
import {addInteractiveMap} from './map.js';

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

