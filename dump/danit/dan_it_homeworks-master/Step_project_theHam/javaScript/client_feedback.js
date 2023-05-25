'use strict';

let currentSlide = 0;
const mainContent = document.querySelectorAll('.client-feedback-item');
const clientsPhoto = document.querySelectorAll('.clients-photo');

function goToSlide(nextSlide) {
    mainContent[currentSlide].classList.remove('active-client');
    clientsPhoto[currentSlide].classList.remove('shown');
    mainContent[nextSlide].classList.add('active-client');
    clientsPhoto[nextSlide].classList.add('shown');
    currentSlide = nextSlide;
}

const btnPrew = document.querySelector('.previous');
const btnNext = document.querySelector('.next');

btnPrew.addEventListener('click', previousItem);
btnNext.addEventListener('click', nextItem);

let nextSlide = 0;

function previousItem() {
    if (currentSlide === 0) {
        nextSlide = mainContent.length - 1
    } else {
        nextSlide = currentSlide - 1;
    }
    goToSlide(nextSlide);
}

function nextItem() {
    if (currentSlide === mainContent.length - 1) {
        nextSlide = 0;
    } else {
        nextSlide = currentSlide + 1;
    }
    goToSlide(nextSlide);
}

clientsPhoto.forEach((item, index) => {
    item.addEventListener('click', function(event) {
        goToSlide(index);
    })
})