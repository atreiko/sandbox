'use strict';

const btnGallery = document.querySelector('.best-images-link');

btnGallery.addEventListener('click', preloading);
const preload = document.querySelector('.best-images-list');

function preloading() {
    preload.classList.add('preload-active');
    setTimeout(() => preload.classList.remove('preload-active'), 5000);

    btnGallery.remove();

}