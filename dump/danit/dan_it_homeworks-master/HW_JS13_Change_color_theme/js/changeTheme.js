'use strict';

const changeBtn = document.querySelector('#change');
const wrap = document.querySelector('.wrapper');

changeBtn.addEventListener('click', changeColorTheme);

function setNewTheme() {
    wrap.classList.add('js-wrapper--change');
    localStorage.setItem('background', 'js-wrapper--change');
}

function setOldTheme() {
    wrap.classList.remove('js-wrapper--change');
    localStorage.removeItem('background');
}

function changeColorTheme() {
    if (wrap.classList.contains('js-wrapper--change')) {
        setOldTheme();
    } else {
        setNewTheme();
    }
}

function setChangeColorTheme() {
    if (localStorage.getItem('background')) {
        setNewTheme();
    }
}

setChangeColorTheme();