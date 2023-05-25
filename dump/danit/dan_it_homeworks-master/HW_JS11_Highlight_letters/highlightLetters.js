'use strict';

const btnWrap = document.querySelector('.btn-wrapper');
console.log(btnWrap);

document.addEventListener('keyup', highlightLetters);

function highlightLetters(event) {
    const keyUp = event.key.toUpperCase();
    const key = event.key;
    const className = 'active';
    console.log(keyUp);
    console.log(key);
    for (let btn of btnWrap.children) {
        if (btn.classList.contains(className)) {
            btn.classList.toggle(className);
        }
        if (btn.innerText === keyUp) {
            btn.classList.toggle(className);
        } else if (btn.innerText === key) {
            btn.classList.toggle(className);
        }
    }
}