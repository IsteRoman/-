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

export {workHeader};
